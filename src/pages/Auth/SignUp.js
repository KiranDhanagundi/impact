import React, { useState } from "react";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Icon,
  Input,
  Link,
  Text,
  useColorModeValue,
  Checkbox,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  useToast,
  Tooltip,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Link as ReactRouterLink } from "react-router-dom";
import axios from "axios";
import TermsAndPolicies from "../../assets/pdf/TermsAndPolicies.pdf";
import { Document, Page } from "react-pdf";

import {
  GoogleIcon,
  AppleIcon,
  GithubIcon,
  StripeIcon,
} from "../../components/Icons/Icons";

function SignUp() {
  const textColor = useColorModeValue("gray.700", "white");
  const bgColor = useColorModeValue("white", "gray.700");
  const toast = useToast();
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => setShowPassword(!showPassword);

  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
  });
  const [validation, setValidation] = useState({
    emailValid: true,
    passwordValid: true,
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    let emailValid = validation.emailValid;
    let passwordValid = validation.passwordValid;

    if (id === "email") {
      emailValid = validateEmail(value);
    } else if (id === "password") {
      passwordValid = validatePassword(value);
    }
    setFormData({ ...formData, [id]: value });

    setValidation({ emailValid, passwordValid });
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email validation
    return regex.test(email);
  };

  const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; // Example: Min 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character
    return regex.test(password);
  };

  const handleCheckboxChange = () => {
    setAcceptedTerms(!acceptedTerms);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Check if all fields are filled
    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !acceptedTerms
    ) {
      toast({
        title: "error",
        description:
          "All fields are required and you must accept the terms and policies.",
        status: "error",
        duration: 2000,
        isClosable: true,
      });

      return;
    }
    try {
      // API call
      const response = await axios.put("/auth/signup/user", formData);
      console.log(response.data);
      // Redirect or show success message
    } catch (error) {
      console.error("Signup error:", error);
      toast({
        title: "error",
        description: "There is a error while creating your account",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  const google = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };

  const github = () => {
    window.open("http://localhost:5000/auth/github", "_self");
  };
  const stripe = () => {
    // window.open("http://localhost:5000/auth/github", "_self");
  };

  return (
    <Flex
      direction="column"
      alignSelf="center"
      justifySelf="center"
      overflow="hidden"
      bg="#fff!important"
      minH="90vH"
      w="auto"
      p="2"
    >
      <Flex
        direction="column"
        textAlign="center"
        justifyContent="center"
        align="center"
        mt="20px"
      >
        <Text fontSize="3xl" color="#0648b3" fontWeight="bold">
          Welcome!
        </Text>
      </Flex>
      <Flex alignItems="center" justifyContent="center" mb="60px" mt="5px">
        <Flex
          direction="column"
          w="400px"
          background="transparent"
          borderRadius="md"
          p="10px"
          mx={{ base: "100px" }}
          bg={bgColor}
          boxShadow="md"
        >
          <Text
            fontSize="xl"
            color="#0648b3"
            fontWeight="bold"
            textAlign="center"
            mb="10px"
          >
            Sign Up
          </Text>
          <HStack spacing="10px" justify="center" mb="10px">
            <Flex
              justify="center"
              align="center"
              w="70px"
              h="40px"
              borderRadius="md"
              border="1px solid lightgray"
              cursor="pointer"
              transition="all .25s ease"
              onClick={google}
            >
              <Link href="#">
                <Icon as={GoogleIcon} w="30px" h="30px" />
              </Link>
            </Flex>
            <Flex
              justify="center"
              align="center"
              w="70px"
              h="40px"
              borderRadius="md"
              border="1px solid lightgray"
              cursor="pointer"
              transition="all .25s ease"
              onClick={github}
            >
              <Link href="#">
                <Icon as={GithubIcon} w="30px" h="30px" />
              </Link>
            </Flex>
            <Flex
              justify="center"
              align="center"
              w="70px"
              h="40px"
              borderRadius="md"
              border="1px solid lightgray"
              cursor="pointer"
              transition="all .25s ease"
            >
              <Link href="#">
                <Icon as={AppleIcon} w="30px" h="30px" />
              </Link>
            </Flex>
            <Flex
              justify="center"
              align="center"
              w="70px"
              h="40px"
              borderRadius="md"
              border="1px solid lightgray"
              cursor="pointer"
              transition="all .25s ease"
              onClick={stripe}
            >
              <Link href="#">
                <Icon as={StripeIcon} w="30px" h="30px" />
              </Link>
            </Flex>
          </HStack>
          <Text
            fontSize="sm"
            color="#0648b3"
            fontWeight="bold"
            textAlign="center"
          >
            or
          </Text>
          <FormControl>
            <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
              Name
            </FormLabel>
            <Input
              id="name"
              fontSize="sm"
              ms="4px"
              borderRadius="md"
              type="text"
              placeholder="Your  name"
              mb="5px"
              size="lg"
              required
              onChange={handleChange}
              value={formData.name}
            />
            <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
              Last Name
            </FormLabel>
            <Input
              id="lastname"
              fontSize="sm"
              ms="4px"
              borderRadius="md"
              type="text"
              placeholder="Your last name"
              mb="5px"
              size="lg"
              onChange={handleChange}
              value={formData.lastname}
            />
            <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
              Email
            </FormLabel>
            <Tooltip
              bg="gray.100"
              color="red"
              fontSize="xs"
              placement="top-start"
              isOpen={!validation.emailValid}
              fontWeight="normal"
              label="Email must be in a valid format (e.g., user@example.com)"
            >
              <Input
                id="email"
                fontSize="sm"
                ms="4px"
                borderRadius="md"
                type="email"
                placeholder="Your email address"
                mb="5px"
                size="lg"
                required
                onChange={handleChange}
                value={formData.email}
                isInvalid={!validation.emailValid}
              />
            </Tooltip>
            <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
              Password
            </FormLabel>
            <Tooltip
              bg="gray.100"
              color="red"
              fontSize="xs"
              placement="bottom-start"
              isOpen={!validation.passwordValid}
              fontWeight="normal"
              label="Password must be at least 8 characters long, include uppercase and lowercase letters, a number, and a special character"
            >
              <InputGroup>
                <Input
                  id="password"
                  fontSize="sm"
                  ms="4px"
                  borderRadius="md"
                  type={showPassword ? "text" : "password"}
                  placeholder="Your password"
                  mb="5px"
                  size="lg"
                  required
                  onChange={handleChange}
                  value={formData.password}
                  isInvalid={!validation.passwordValid}
                />
                <InputRightElement width="4.5rem">
                  <Button
                    _hover={"none"}
                    size="md"
                    bg="none"
                    mt="6px"
                    onClick={toggleShowPassword}
                  >
                    {showPassword ? (
                      <Icon as={ViewOffIcon} />
                    ) : (
                      <Icon as={ViewIcon} />
                    )}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </Tooltip>
            <FormControl display="flex" alignItems="start" mt="5px" mb="10px">
              <Checkbox
                isChecked={acceptedTerms}
                onChange={handleCheckboxChange}
                colorScheme="blue"
                me="10px"
                ml="1"
              />
              <FormLabel
                htmlFor="terms-and-policy"
                mb="0"
                fontWeight="normal"
                fontSize="xs"
              >
                By clicking Sign up, you agree to Impact's{" "}
                <Link
                  color="#0648b3"
                  textDecoration="underline"
                  onClick={onOpen}
                  cursor="pointer"
                >
                  Terms Of Service
                </Link>{" "}
                and{" "}
                <Link
                  color="#0648b3"
                  textDecoration="underline"
                  onClick={onOpen}
                  cursor="pointer"
                >
                  Privacy Policy.
                </Link>
              </FormLabel>
            </FormControl>
            {/* Terms and Policy Modal */}
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader color="#0648b3">Terms and Policies</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Document file={TermsAndPolicies}>
                    <Page pageNumber={1} />
                  </Document>
                </ModalBody>
                <ModalFooter>
                  <Button
                    boxShadow="sm"
                    variant="outline"
                    color={"#0a48b3"}
                    h="30px"
                    fontSize="xs"
                    p="8px"
                    mr={3}
                    onClick={onClose}
                  >
                    Close
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
            <Button
              // type="submit"
              bg="#0648b3"
              fontSize="10px"
              color="white"
              fontWeight="bold"
              w="100%"
              h="45"
              mb="10px"
              onClick={handleSubmit}
            >
              SIGN UP
            </Button>
          </FormControl>
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            maxW="100%"
            mt="0px"
          >
            <Text color={textColor} fontWeight="medium">
              Already have an account?
              <Link
                as={ReactRouterLink}
                color="#0648b3"
                ms="5px"
                fontWeight="bold"
                to="/app/signin"
              >
                Sign In
              </Link>
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default SignUp;
