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
import { Link, useHistory, useLocation } from "react-router-dom";

const CartOrderSummary = ({ cartItems }) => {
  const history = useHistory();
  const location = useLocation();

  const calculateTotal = () => {
    return cartItem.reduce((total, item) => total + item.unit_amount, 0);
  };

  const calculateTax = () => {
    // Calculate 5% tax on the total bill
    const totalBill = calculateTotal();
    const tax = (5 / 100) * totalBill;
    return tax;
  };

  const cartItem = cartItems.map((item) => {
    return {
      ...item.product,
      price_id: item.prices[0].id,
      unit_amount: item.prices[0].unit_amount,
    };
  });

  const handleCheckout = () => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set("cartItems", JSON.stringify(cartItems));
    history.push(`/app/checkout`);
  };

  return cartItem.length !== 0 ? (
    <Box
      w="100%"
      minW={"500px"}
      boxShadow="md"
      borderWidth="1px"
      borderRadius="md"
      p="4"
    >
      <Heading color={"#0a48b3"} as="h2" size="md" mb="4">
        Order Summary
      </Heading>
      <Divider />
      <VStack mt="5px" spacing="6" align="start">
        {cartItem.map((item, index) => (
          <HStack key={item.id} spacing="10">
            <Text>items {index + 1}</Text>
            <Spacer />
            <Text>${item.unit_amount}</Text>
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
      <Link to="/app/checkout">
        <Button
          mt="10px"
          color="white"
          bg="#0a48b3"
          size="md"
          fontWeight="normal"
          rightIcon={<FaArrowRight />}
          onClick={handleCheckout}
        >
          Checkout
        </Button>
      </Link>
    </Box>
  ) : (
    <Box w="100%" borderWidth="1px" borderRadius="md" p="4">
      <Text>No data</Text>
    </Box>
  );
};

export default CartOrderSummary;
