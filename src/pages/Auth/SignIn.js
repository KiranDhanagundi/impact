import React from "react";
import {
  Box,
  Flex,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Switch,
  Text,
  HStack,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import {
  GoogleIcon,
  AppleIcon,
  GithubIcon,
  StripeIcon,
} from "../../components/Icons/Icons";

function SignIn() {
  const titleColor = useColorModeValue("teal.300", "teal.200");
  const textColor = useColorModeValue("gray.700", "#0648b3");
  const bgColor = useColorModeValue("white", "gray.700");
  const bgIcons = useColorModeValue("teal.200", "rgba(255, 255, 255, 0.5)");

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
      bg="#ffffff!important"
      minH="90VH"
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
          Welcome Back!
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
            Sign In
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
            mb="5px"
          >
            or
          </Text>
          <FormControl>
            <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
              Email
            </FormLabel>
            <Input
              borderRadius="md"
              mb="5px"
              fontSize="sm"
              type="text"
              placeholder="Your email adress"
              size="lg"
            />
            <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
              Password
            </FormLabel>
            <Input
              borderRadius="md"
              mb="5px"
              fontSize="sm"
              type="password"
              placeholder="Your password"
              size="lg"
            />
            <FormControl display="flex" alignItems="center">
              <Switch id="remember-login" colorScheme="blue" me="10px" />
              <FormLabel
                htmlFor="remember-login"
                mb="0"
                ms="1"
                fontWeight="normal"
              >
                Remember me
              </FormLabel>
            </FormControl>
            <Button
              fontSize="10px"
              type="submit"
              bg="#0648b3"
              w="100%"
              h="45"
              mb="10px"
              color="white"
              mt="10px"
            >
              SIGN IN
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
              Don't have an account?
              <Link
                color="#0648b3"
                as={ReactRouterLink}
                ms="5px"
                fontWeight="bold"
                to="/auth/Signup"
              >
                Sign Up
              </Link>
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default SignIn;
