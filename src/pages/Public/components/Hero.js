import {
  Button,
  Flex,
  Heading,
  Stack,
  Image,
  Box,
  useBreakpointValue 
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import globe from "../../../assets/img/globe-bg3.png";
import { useSelector } from "react-redux";

const Hero = () => {
  const user = useSelector((state) => state.users.userData);
const imageHeight = useBreakpointValue({
    sm: "200px",
    md: "200px",
    lg: "300px",
    xl: "300px",
  });
  return (
    <Flex
      align="center"
      justify={{ base: "center", md: "space-around", xl: "space-between" }}
      direction={{ base: "column-reverse", md: "row" }}
      wrap="no-wrap"
      // minH="40vh"
      w="100%"
      px={2}
    >
      <Stack
        spacing={4}
        w={{ base: "80%", md: "60%" }}
        align={["center", "center", "flex-start", "flex-start"]}
      >
        <Heading
        as="h1"
        size="lg"
        fontWeight="bold"
        color="#0648b3"
        textAlign={["center", "center", "left", "left"]}
          fontSize={{ sm: "3xl", md: "3xl", lg: "4xl", xl: "5xl" }}
        mb={1}
      >
        {"Impact a Platform Provider"}
        </Heading>
        <Heading
        as="h3"
        size="md"
        fontWeight="bold"
        color="#0648b3"
        textAlign={["center", "center", "left", "left"]}
        fontSize={["md", "lg", "2xl", "3xl"]}
        mb={1}
      >
        {"Market Place | IAM Security"}
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
                mb='20px'
            >
              Explore Products
            </Button>
          </Link>
        )}
      </Stack>
      <Box w={imageHeight} align="right" mr="0px">
        <Image
          h={imageHeight}
          align={"right"}
          borderRadius="full"
          src={globe}
        />
      </Box>
    </Flex>
  );
};

export default Hero;
