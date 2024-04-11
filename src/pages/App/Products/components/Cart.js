import { Box, Flex, Heading, Button, Icon, Text } from "@chakra-ui/react";
import CartProducts from "./CartProducts";
import CartOrderSummary from "./CartOrderSummary";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux"; // Import useSelector hook
import { FaArrowRight, FaShoppingCart } from "react-icons/fa";

const Cart = () => {
  // Access cart items from the Redux store
  const cartItem = useSelector((state) => state.cart.items);

  return (
    <Flex w="100%" minH="90vH" overflow="auto" direction="column">
      <Box align="start" mb="10px">
        <Heading as="h4" size="md">
          Cart
        </Heading>
      </Box>
      {cartItem.length !== 0 ? (
        <Flex
          w="100%"
          direction={{
            base: "row",
            sm: "column-reverse",
            md: "row",
            xl: "row",
          }}
        >
          <Flex
            //   borderWidth={"1px"}
            mr="5px"
            maxW={{ base: "100%", sm: "100%", md: "500px", xl: "800px" }}
            mt="5px"
            direction={"column"}
            w="100%"
          >
            {cartItem.map((cartItem, index) => (
              <CartProducts key={index} cartItem={cartItem} />
            ))}
          </Flex>
          <Flex mt="5px" w={{ base: "100%", sm: "100%", md: "40%", xl: "42%" }}>
            <CartOrderSummary cartItems={cartItem} />
          </Flex>
        </Flex>
      ) : (
        <Box>
          <Icon as={FaShoppingCart} boxSize={50} mr="5px" color="#0a48b3" />
          <Text fontSize="md" fontWeight="bold" mb="5px">
            Your Cart is Empty!
          </Text>
          <Link to="/app/home">
            <Button
              mt="10px"
              color="white"
              bg="#0a48b3"
              size="md"
              fontWeight="normal"
              rightIcon={<FaArrowRight />}
            >
              Browse products
            </Button>
          </Link>
        </Box>
      )}
    </Flex>
  );
};

export default Cart;
