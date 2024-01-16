import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";

export default function Logo(props) {
  return (
    <Box {...props}>
      <Flex>
        <Text fontSize="3xl" fontWeight="bold">
          Impact
        </Text>
      </Flex>
    </Box>
  );
}
