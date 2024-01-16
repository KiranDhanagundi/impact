import React from "react";
import { Button, Heading, Image, Stack, Text } from "@chakra-ui/react";

const Error404 = () => {
  return (
    <Stack minHeight="70vh" alignItems="center" justifyContent="center">
      <Heading as="h1" size="4xl">
        404
      </Heading>
      <Heading as="h2" size="xl" mt={4}>
        Page not found
      </Heading>
      <Text mt={4}>The page you're looking for does not exist.</Text>
      <Image
        src="https://bit.ly/ryan-florence"
        alt="Error Image"
        boxSize="500px"
        objectFit="cover"
      />
      <Button variant="outline" colorScheme="teal" mt={4}>
        Go to Homepage
      </Button>
    </Stack>
  );
};

export default Error404;
