import React, { useState } from "react";
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
  Textarea,
  VStack,
  Link,
  Icon,
  HStack,
} from "@chakra-ui/react";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    address: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log(formData);
  };

  return (
    <Flex align="flex-start" justify="center" mt="4px" minHeight="50vh" bg="gray.50" p={2}>
      <Flex
        
              w='100%'
        direction='column'
              gap={2}
              p={2}
      >
        <Box
          width='100%'
          p={2}
          bg="white"
          borderRadius="md"
          boxShadow="lg"
          flexShrink={0}
        >
          <Heading as="h2" size="md" mb={3} textAlign="center">
            Contact Us
          </Heading>
          <form onSubmit={handleSubmit}>
            <VStack spacing={3}>
              <Flex direction={{ base: "column", md: "row" }} width="100%" gap={3}>
                <FormControl id="name" isRequired>
                  <FormLabel fontSize="sm">Name</FormLabel>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    size="sm"
                  />
                </FormControl>
                <FormControl id="email" isRequired>
                  <FormLabel fontSize="sm">Email</FormLabel>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    size="sm"
                  />
                </FormControl>
              </Flex>
              <Flex direction={{ base: "column", md: "row" }} width="100%" gap={3}>
                <FormControl id="phone" isRequired>
                  <FormLabel fontSize="sm">Phone</FormLabel>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    size="sm"
                  />
                </FormControl>
                <FormControl id="company">
                  <FormLabel fontSize="sm">Company</FormLabel>
                  <Input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    size="sm"
                  />
                </FormControl>
              </Flex>
              <FormControl id="address" isRequired>
                <FormLabel fontSize="sm">Address</FormLabel>
                <Textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  size="sm"
                />
              </FormControl>
              <FormControl id="message">
                <FormLabel fontSize="sm">Message</FormLabel>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  size="sm"
                />
              </FormControl>
              <Button type="submit" size='md'bg="#0648b3" fontWeight='normal'color="white" >
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
        <Box
          width='100%'
          p={3}
          bg="white"
          borderRadius="md"
          boxShadow="lg"
          flexShrink={0}
        >
          <Heading as="h2" size="md" mb={3} textAlign="center">
            Follow Us On
          </Heading>
          <HStack spacing={3}>
            <Button
              as={Link}
              href="https://www.instagram.com"
              isExternal
              leftIcon={<Icon as={FaInstagram}  />}
              width="full"
              colorScheme="pink"
              size="lg"
            >
              Instagram
            </Button>
            <Button
              as={Link}
              href="https://www.facebook.com"
              isExternal
              leftIcon={<Icon as={FaFacebook} />}
              width="full"
              colorScheme="facebook"
              size="lg"
            >
              Facebook
            </Button>
            <Button
              as={Link}
              href="https://www.twitter.com"
              isExternal
              leftIcon={<Icon as={FaTwitter}  />}
              width="full"
              colorScheme="twitter"
              size="lg"
            >
              Twitter
            </Button>
            <Button
              as={Link}
              href="https://www.linkedin.com"
              isExternal
              leftIcon={<Icon as={FaLinkedin}  />}
              width="full"
              colorScheme="linkedin"
              size="lg"
            >
              LinkedIn
            </Button>
          </HStack>
        </Box>
      </Flex>
    </Flex>
  );
};

export default ContactUs;
