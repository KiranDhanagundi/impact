import {
  Box,
  Flex,
  Image,
  Text,
  Button,
  Icon,
  Link,
  HStack,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { FaCartPlus, FaStar } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const { images, name, prices, rating = 4.5, numPurchases = 100 } = product;

  const handleAddToCart = (event) => {
    if (event) {
      event.preventDefault();
    }
    // dispatch({ type: "ADD_TO_CART", payload: product });
  };

  return (
    <Link
      as={ReactRouterLink}
      to={`/app/productdetails/${product.id}`}
      style={{ textDecoration: "none" }}
    >
      <Box
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        width="100%"
        maxW="200px"
        boxShadow="md"
        transition="box-shadow 0.3s ease"
        _hover={{
          boxShadow: "xl",
        }}
      >
        <Box
          width="100%"
          height={{ base: "120px", sm: "130px", md: "140px", lg: "150px" }}
          overflow="hidden"
          position="relative"
        >
          <Image
            src={images[0]}
            alt={name}
            width="100%"
            height="100%"
            objectFit="cover"
            objectPosition="center"
            transition="transform 0.2s ease"
            _hover={{ transform: "scale(1.05)" }}
          />
        </Box>
        <Flex
          direction="column"
          alignItems="start"
          p="2"
          justifyContent="space-between"
          height={{ base: "90px", md: "100px" }}
        >
          <Box>
            <Text
              fontWeight="bold"
              fontSize={{ base: "xs", md: "sm" }}
              noOfLines={1}
              mb={1}
            >
              {name}
            </Text>
            <HStack>
              <Icon as={FaStar} color="green.500" />
              <Text fontSize="xs" color="gray.600">
                {rating} ({numPurchases})
              </Text>
            </HStack>
          </Box>
          <Flex
            alignItems="center"
            width="100%"
            justifyContent="space-between"
            mb="5px"
          >
            <Text
              fontWeight="bold"
              fontSize={{ base: "sm", md: "md" }}
              mr="2"
            >
              {"$" + (prices[0].unit_amount / 100).toFixed(2)}
            </Text>
            <Button
              boxShadow="sm"
              color={"#0a48b3"}
              variant={"outline"}
              onClick={handleAddToCart}
              fontSize={{ base: "xs", md: "sm" }}
              h={{ base: "25px", md: "30px" }}
              w="30px"
            >
              <Icon as={FaCartPlus} boxSize={{ base: 3, md: 4 }} />
            </Button>
          </Flex>
        </Flex>
      </Box>
    </Link>
  );
};

export default ProductCard;
