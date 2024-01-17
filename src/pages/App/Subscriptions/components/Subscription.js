import React from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

const Subscription = () => {
  return (
    <Flex bg="white" w="100%" minH="90vh">
      <Box as="section" id="plans">
        <Container maxW="6xl" py={10}>
          <Heading as="h2" textAlign="center" mb={5}>
            Our Plans
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <Box
              as="section"
              p={6}
              maxW="4xl"
              mx="auto"
              textAlign="center"
              borderRadius="md"
              boxShadow="md"
            >
              <Heading as="h3" size="xl" mb={5}>
                Free Plan
              </Heading>
              <Text fontSize="xl" fontWeight="bold" mb={5}>
                $0 / month
              </Text>
              <Text mb={5}>
                Ideal for freelancers and small businesses who are just getting
                started.
              </Text>
              <Button size="lg" bg="#0648b3" color={"white"} w="full">
                Get Started
              </Button>
            </Box>
            <Box
              as="section"
              p={6}
              maxW="4xl"
              mx="auto"
              textAlign="center"
              borderRadius="md"
              boxShadow="md"
            >
              <Heading as="h3" size="xl" mb={5}>
                Premium Plan
              </Heading>
              <Text fontSize="xl" fontWeight="bold" mb={5}>
                $20 / month
              </Text>
              <Text mb={5}>
                Best for growing businesses with more demanding requirements.
              </Text>
              <Button size="lg" bg="#0648b3" color={"white"} w="full">
                Get Started
              </Button>
            </Box>
            <Box
              as="section"
              p={6}
              maxW="4xl"
              mx="auto"
              textAlign="center"
              borderRadius="md"
              boxShadow="md"
            >
              <Heading as="h3" size="xl" mb={5}>
                Enterprise Plan
              </Heading>
              <Text fontSize="xl" fontWeight="bold" mb={5}>
                $40 / month
              </Text>
              <Text mb={5}>
                Best for enterprises with heavy workloads and scalability needs.
              </Text>
              <Button size="lg" bg="#0648b3" color={"white"} w="full">
                Get Started
              </Button>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>
    </Flex>
  );
};

export default Subscription;
