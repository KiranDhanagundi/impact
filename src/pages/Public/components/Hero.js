import {
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  Image,
  Box,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import globe from "../../../assets/img/globe-bg3.png";

const Hero = () => {
  const user = { user: "user" };

  return (
    <Flex
      align="center"
      justify={{ base: "center", md: "space-around", xl: "space-between" }}
      direction={{ base: "column-reverse", md: "row" }}
      wrap="no-wrap"
      minH="50vh"
      w="100%"
      px={8}
      marginTop={"20px"}
    >
      <Stack
        spacing={4}
        ml="0px"
        w={{ base: "80%", md: "40%" }}
        align={["center", "center", "flex-start", "flex-start"]}
      >
        <Heading
          as="h1"
          size="xl"
          fontWeight="bold"
          color="#0648b3"
          textAlign={["center", "center", "left", "left"]}
        >
          {"Share your ideas with the World..!"}
        </Heading>
        <Heading
          as="h2"
          size="lg"
          fontWeight="bold"
          lineHeight={1.5}
          color="#0648b3"
          textAlign={["center", "center", "left", "left"]}
        >
          {"Earn while you sleep"}
        </Heading>
        {!user ? (
          <Link to={"/app/signup"}>
            <Button
              colorScheme="primary.100"
              bg="primary.500"
              borderRadius="md"
              py="4"
              px="4"
              lineHeight="1"
              size="md"
            >
              {"Create your account now"}
            </Button>
          </Link>
        ) : (
          <Link to={"/app/home"}>
            <Button
              bg="#0648b3"
              color={"white"}
              borderRadius="md"
              py="4"
              px="4"
              lineHeight="1"
              size="md"
            >
              Explore Products
            </Button>
          </Link>
        )}
        <Text color="#0648b3" size="md">
          No credit card required
        </Text>
      </Stack>
      <Box w="100%" align="right" mr="0px">
        <Image
          h={{ base: "600px", md: "500px", sm: "200px", xs: "100px" }}
          align={"right"}
          borderRadius="full"
          src={globe}
        />
      </Box>
    </Flex>
  );
};

export default Hero;
