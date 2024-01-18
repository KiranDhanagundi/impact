import React from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Spacer,
  Divider,
  Button,
} from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";

const CartOrderSummary = ({ cartItems }) => {
  const calculateTotal = () => {
    return cartItems.reduce((total, product) => total + product.price, 0);
  };

  const calculateTax = () => {
    // Calculate 5% tax on the total bill
    const totalBill = calculateTotal();
    const tax = (5 / 100) * totalBill;
    return tax;
  };

  return (
    <Box w="100%" borderWidth="1px" borderRadius="md" p="4">
      <Heading color={"#0a48b3"} as="h2" size="md" mb="4">
        Order Summary
      </Heading>
      <Divider />
      <VStack mt="5px" spacing="6" align="start">
        {cartItems.map((product) => (
          <HStack key={product.id} spacing="10">
            <Text>{product.id}</Text>
            <Spacer />
            <Text>${product.price}</Text>
          </HStack>
        ))}
        <Divider />
        <HStack spacing="10">
          <Text fontWeight="bold">Tax:</Text>
          <Spacer />
          <Text>${calculateTax().toFixed(2)}</Text>
        </HStack>
        <HStack spacing="10">
          <Text fontWeight="bold">Total:</Text>
          <Spacer />
          <Text>${(calculateTotal() + calculateTax()).toFixed(2)}</Text>
        </HStack>
      </VStack>
      <Divider />
      <Button
        mt="10px"
        color="white"
        bg="#0a48b3"
        size="md"
        fontWeight="normal"
        rightIcon={<FaArrowRight />}
      >
        Checkout
      </Button>
    </Box>
  );
};

export default CartOrderSummary;
