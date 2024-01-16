import {
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  Image,
  Box,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import globe from "../../../assets/img/globe-bg3.png";

export default function Hero({
  title,
  subtitle,
  image,
  ctaLink,
  ctaText,
  user,
  dashboard,
  ...rest
}) {
  return (
    <Flex
      align="center"
      justify={{ base: "center", md: "space-around", xl: "space-between" }}
      direction={{ base: "column-reverse", md: "row" }}
      wrap="no-wrap"
      minH="50vh"
      w="100%"
      px={8}
      {...rest}
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
          {title}
        </Heading>
        <Heading
          as="h2"
          size="lg"
          fontWeight="bold"
          lineHeight={1.5}
          color="#0648b3"
          textAlign={["center", "center", "left", "left"]}
        >
          {subtitle}
        </Heading>
        {!user ? (
          <Link to={ctaLink}>
            <Button
              colorScheme="primary.100"
              bg="primary.500"
              borderRadius="md"
              py="4"
              px="4"
              lineHeight="1"
              size="md"
            >
              {ctaText}
            </Button>
          </Link>
        ) : (
          <Link to={dashboard}>
            <Button
              bg="#0648b3"
              color={"white"}
              borderRadius="md"
              py="4"
              px="4"
              lineHeight="1"
              size="md"
            >
              Go to Dashboard
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
}

Hero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image: PropTypes.string,
  ctaText: PropTypes.string,
  ctaLink: PropTypes.string,
};

Hero.defaultProps = {
  title: "landing page",
  subtitle:
    "This is the subheader section where you describe the basic benefits of your product",
  image: "https://source.unsplash.com/collection/404339/800x600",
  ctaText: "Create your account now",
  ctaLink: "/signup",
};
