import React from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";

import Role from "./components/Role";
import Resource from "./components/Resource";

const AccessManagement = () => {
  return (
    <Flex w="100%" overflow="auto" direction="column" minH="90vH">
      <Box align="start" mb="10px">
        <Heading as="h4" size="md">
          Access Management
        </Heading>
      </Box>
      <Role />
      <Resource />
    </Flex>
  );
};

export default AccessManagement;
