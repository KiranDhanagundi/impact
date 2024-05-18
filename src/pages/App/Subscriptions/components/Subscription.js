import React from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Heading,
  SimpleGrid,
  Text,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { FaTimesCircle } from "react-icons/fa";

const Subscription = () => {
  return (
    <Flex w="100%" minH="90vh" direction="column">
      <Box as="section" id="plans">
        <Container maxW="5xl">
          <Heading as="h2" textAlign="center" mb="2">
            Our Plans
          </Heading>
          <Divider mb="20px" />
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <Box
              as="section"
              p={2}
              maxW="4xl"
              mx="auto"
              textAlign="center"
              borderRadius="md"
              boxShadow="md"
              borderWidth='1px'
            >
              <Heading as="h3" size="lg" mb={5}>
                Free Plan
              </Heading>
              <Text fontSize="xl" fontWeight="bold" mb={5}>
                $0 / month
              </Text>
              <Text mb={5}>
                Ideal for freelancers and small businesses who are just getting
                started.
              </Text>
              <Button
                fontWeight="normal"
                size="lg"
                bg="#0648b3"
                color={"white"}
                w="full"
              >
                Get Started
              </Button>
              <Divider mt="10px" />
              <Text m="2" align="start" fontSize="md" mb={5} mt={2}>
                <List spacing={3}>
                  <ListItem>
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    Free access to our Platform
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    Includes all Free features
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    Custom domain
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    Coupons & discounts
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    Affiliate selling
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaTimesCircle} color="gray.500" />
                    Premium support
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaTimesCircle} color="gray.500" />
                    Advanced analytics
                  </ListItem>
                </List>
              </Text>
            </Box>
            <Box
              as="section"
              p={2}
              maxW="4xl"
              mx="auto"
              textAlign="center"
              borderRadius="md"
              boxShadow="md"
              borderWidth='1px'
            >
              <Heading as="h3" size="lg" mb={5}>
                Premium Plan
              </Heading>
              <Text fontSize="xl" fontWeight="bold" mb={5}>
                $20 / month
              </Text>
              <Text mb={5}>
                Best for growing businesses with more demanding requirements.
              </Text>
              <Button
                fontWeight="normal"
                size="lg"
                bg="#0648b3"
                color={"white"}
                w="full"
              >
                Get Started
              </Button>
              <Divider mt="10px" />
              <Text m="2" align="start" fontSize="md" mb={5} mt={2}>
                <List spacing={3}>
                  <ListItem>
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    Free access to our Platform
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    Includes all Free features
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    Custom domain
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    Coupons & discounts
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    Affiliate selling
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    Premium support
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaTimesCircle} color="gray.500" />
                    Advanced analytics
                  </ListItem>
                </List>
              </Text>
            </Box>
            <Box
              as="section"
              p={2}
              maxW="4xl"
              mx="auto"
              textAlign="center"
              borderRadius="md"
              boxShadow="md"
              borderWidth='1px'
            >
              <Heading as="h3" size="lg" mb={5}>
                Enterprise Plan
              </Heading>
              <Text fontSize="xl" fontWeight="bold" mb={5}>
                $40 / month
              </Text>
              <Text mb={5}>
                Best for enterprises with heavy workloads and scalability needs.
              </Text>
              <Button
                fontWeight="normal"
                size="lg"
                bg="#0648b3"
                color={"white"}
                w="full"
              >
                Get Started
              </Button>
              <Divider mt="10px" />
              <Text m="2" align="start" fontSize="md" mb={5} mt={2}>
                <List spacing={3}>
                  <ListItem>
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    Free access to our Platform
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    Includes all Free features
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    Custom domain
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    Coupons & discounts
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    Affiliate selling
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    Premium support
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    Advanced analytics
                  </ListItem>
                </List>
              </Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>
    </Flex>
  );
};

export default Subscription;
