import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const About = () => {
  return (
    <Box p={4} bg='gray.50' mb='4px'>
      <Heading as="h2" size="xl" color={'#0648b3'} mb={4} >
        About Us
      </Heading>
      <Text fontSize="lg" mb={4} textAlign="left">
        Impact was founded in 2023 to deliver innovative solutions that address some of the world’s most dynamic security issues. That passion and commitment for solving our customers’ pressing security and identity challenges guide us to this day. </Text>
      <Heading as="h3" size="md" mb={2} textAlign="left">
        Our Mission:
      </Heading>
      <Text fontSize="lg" textAlign="left">
        We are identity security innovators and guardians who collectively stand for bringing out the best in one another to the benefit of our stakeholders around the world</Text>
    </Box>
  );
};

export default About;
