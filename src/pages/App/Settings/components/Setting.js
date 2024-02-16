import React from "react";
import {
  Box,
  Heading,
  Text,
  UnorderedList,
  ListItem,
  Divider,
} from "@chakra-ui/react";

const sampleData = {
  customer: {
    name: "Kirannn",
    address: "a, ME 56212 US",
  },
  items: [
    {
      title: "THINK AND GROW RICH (PB) Paperback - Illustrated, 5 January 2020",
      quantity: 1,
      price: 0.05,
    },
    {
      title:
        "THE POWER OF YOUR SUBCONSCIOUS MIND Paperback - Advent Calendar, 1 February 2015",
      quantity: 1,
      price: 0.2,
    },
  ],
};

const CheckoutSummary = () => {
  const totalAmount = sampleData.items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <Box
      border="1px solid gray"
      borderRadius="md"
      mt={4}
      p={6}
      boxShadow="md"
      width="300px"
    >
      <Heading size="md" mb={4}>
        Checkout Summary
      </Heading>
      <Box mb={4}>
        <Text fontWeight="bold">Customer:</Text>
        <Text>{sampleData.customer.name}</Text>
        <Text>{sampleData.customer.address}</Text>
      </Box>
      <Divider my={4} />
      <Box mb={4}>
        <Text fontWeight="bold">Items:</Text>
        <UnorderedList>
          {sampleData.items.map((item, index) => (
            <ListItem key={index}>
              {item.title} x{item.quantity} - ${item.price}
            </ListItem>
          ))}
        </UnorderedList>
      </Box>
      <Divider my={4} />
      <Box>
        <Text fontWeight="bold">Total Amount:</Text>
        <Text fontSize="lg" color="green.500">
          ${totalAmount.toFixed(2)}
        </Text>
      </Box>
    </Box>
  );
};

export default CheckoutSummary;
