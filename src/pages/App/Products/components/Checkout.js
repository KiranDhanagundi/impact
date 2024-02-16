import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from "@stripe/react-stripe-js";
import { Flex } from "@chakra-ui/react";

import { useSelector } from "react-redux";

const stripePromise = loadStripe(
  "pk_test_51Oc4QtSDyfxnEVq30RyP28ixzaiYlzKM2aC3Eu74pw9BY9oPdblPqCZ6qHjjfXnjSKB2MJhBjC22X1Gj3GF0ipTQ00gT7J1Rmz"
);

const CheckoutForm = () => {
  const [clientSecret, setClientSecret] = useState("");
  const cartItems = useSelector((state) => state.cart.items);
  const cartItem = cartItems.map((item) => {
    return {
      ...item.product,
      price_id: item.prices[0].id,
      unit_amount: item.prices[0].unit_amount,
    };
  });

  console.log("checkout", cartItem);

  useEffect(() => {
    // Create a Checkout Session as soon as the page loads
    fetch("/create-checkout-session", {
      method: "POST",
      body: JSON.stringify({ cartItems: cartItem }),
      headers: {
        "Content-Type": "application/json", // Set content type to JSON
      },
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [cartItem]);

  return (
    <Flex w="100%" minH="90vh" direction="column" id="checkout">
      {clientSecret && (
        <EmbeddedCheckoutProvider
          stripe={stripePromise}
          options={{ clientSecret }}
        >
          <EmbeddedCheckout />
        </EmbeddedCheckoutProvider>
      )}
    </Flex>
  );
};

export default CheckoutForm;
