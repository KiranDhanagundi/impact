import { Box, Flex, Heading } from "@chakra-ui/react";
import CartProducts from "./CartProducts";
import CartOrderSummary from "./CartOrderSummary";

const Cart = () => {
  const cartItems = [
    {
      id: "Product01",
      title: "AI predictions: Top 13 AI trends for 2024",
      description:
        "Explore the future with our comprehensive guide to the top 13 AI trends anticipated for 2024.",
      imageUrl:
        "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*0DoUT3wzcxy89nm1tkd0qQ.png",
      author: "John Doe",
      dateTime: "Jan 1,2024",
      price: 5,
      avatar: "https://bit.ly/sage-adebayo",
      numberOfDownloads: "200",
    },
    {
      id: "Product01",
      title: "UX/UI Design Trends Going Into 2024",
      description:
        "Description for Product UX/UI Design Trends Going Into 2024",
      imageUrl:
        "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*Nm1_iC89eUi3Eb0JeVqUPg.jpeg",
      author: "John Doe",
      dateTime: "Jan 1,2024",
      price: 1,
      avatar: "https://bit.ly/sage-adebayo",
      numberOfDownloads: "200",
    },
    {
      id: "Product01",
      title:
        "The Making of Apple’s Emoji: How designing these tiny icons changed my life",
      description:
        "Description for ProductThe Making of Apple’s Emoji: How designing these tiny icons changed my life",
      imageUrl:
        "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*BniKIhT3c54sIEuPtzRQKw.jpeg",
      author: "John Doe",
      dateTime: "Jan 1,2024",
      price: 0,
      avatar: "https://bit.ly/sage-adebayo",
      numberOfDownloads: "200",
    },
  ];

  return (
    <Flex mt="10px" w="100%" minH="90vH" overflow="auto" direction="column">
      <Box align="start" mb="10px">
        <Heading as="h4" size="md">
          Back
        </Heading>
      </Box>

      <Flex
        w="100%"
        direction={{ base: "row", sm: "column-reverse", md: "row", xl: "row" }}
      >
        <Flex
          //   borderWidth={"1px"}
          mr="5px"
          w="auto"
          mt="5px"
          direction={"column"}
        >
          {/* <Text align={"start"}>Cart Items</Text> */}
          {cartItems.map((cartItem, index) => (
            <CartProducts key={index} cartItem={cartItem} />
          ))}
        </Flex>
        <Flex mt="5px" w={{ base: "100%", sm: "100%", md: "30%", xl: "30%" }}>
          <CartOrderSummary cartItems={cartItems} />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Cart;
