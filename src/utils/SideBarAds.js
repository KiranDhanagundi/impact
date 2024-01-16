import React from "react";
import { Link } from "react-router-dom";
import { Button, Flex, Text } from "@chakra-ui/react";

export function SideBarAds(props) {
  return (
    <Flex
      borderRadius="md"
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="center"
      boxSize="border-box"
      mt="5px"
      p="16px"
      h="120px"
      w="90%"
      borderWidth="1px"
    >
      <Text fontSize="md" fontWeight="bold">
        Subscribe
      </Text>
      <Link w="100%" to="/app/subscriptions">
        <Button
          mt="20px"
          fontSize="10px"
          fontWeight="bold"
          w="100%"
          bg="#0648b3"
          _hover="none"
          _active={{
            bg: "white",
            transform: "none",
            borderColor: "transparent",
          }}
          _focus={{
            boxShadow: "none",
          }}
          color="white"
        >
          Paid User
        </Button>
      </Link>
    </Flex>
  );
}
