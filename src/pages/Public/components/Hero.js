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
import { useSelector } from "react-redux";

const Hero = () => {
  const user = useSelector((state) => state.users.userData);

  return (
    <Flex
      align="center"
      justify={{ base: "center", md: "space-around", xl: "space-between" }}
      direction={{ base: "column-reverse", md: "row" }}
      wrap="no-wrap"
      minH="50vh"
      w="100%"
      px={2}
    >
      <Stack
        spacing={4}
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
              fontWeight="normal"
              bg="#0648b3"
              color={"white"}
              borderRadius="md"
              size="md"
            >
              Create your account now
            </Button>
          </Link>
        ) : (
          <Link to={"/app/home"}>
            <Button
              fontWeight="normal"
              bg="#0648b3"
              color={"white"}
              borderRadius="md"
              size="md"
            >
              Explore Products
            </Button>
          </Link>
        )}
        <Text color="#0648b3" size="sm">
          No credit card required
        </Text>
      </Stack>
      <Box w="auto" align="right" mr="0px">
        <Image
          h={{
            base: "600px",
            md: "500px",
            sm: "200px",
            xs: "100px",
            xl: "400px",
            lg: "600px",
          }}
          align={"right"}
          borderRadius="full"
          src={globe}
        />
      </Box>
    </Flex>
  );
};

export default Hero;
