import React, { useState } from "react";
import {
  VStack,
  HStack,
  Heading,
  Text,
  Button,
  Spacer,
  Box,
  Image,
  Flex,
  Avatar,
  Divider,
  Grid,
  Icon,
  SimpleGrid,
  Badge,
  Link,
} from "@chakra-ui/react";
import Card from "../../../../components/Card/Card";
import ProductCard from "../../Home/components/ProjectCard";
import { DownloadIcon } from "@chakra-ui/icons";
import SwipeableViews from "react-swipeable-views";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link as ReactRouterLink, useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

const ProductDetails = () => {
  const dispatch = useDispatch();

  let { productId } = useParams();
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await axios.get(`/api/products/${productId}`);
        setProductData(response.data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchProductData();
  }, [productId]); // Execute the effect whenever the productId changes

  const [productList, setProductList] = useState("");
  useEffect(() => {
    // fetch products on page load
    fetch("/v1/products", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setProductList(data));
  }, []);

  let productsLists = {};

  // Check if productList and its properties are defined
  if (productList && productList.products && productList.prices) {
    // Map over productList.products and combine prices
    productsLists = {
      products: productList.products.map((product) => {
        return {
          ...product,
          prices: productList.prices.filter(
            (price) => price.product === product.id
          ),
        };
      }),
    };
  } else {
    // Handle the case where productList or its properties are undefined
    console.log("Product list or its properties are undefined.");
    // You can assign a default value or handle the situation accordingly
  }

  const handleAddToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: productData });
  };

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const handlePrevImage = () => {
    setActiveImageIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : productData.product.images.length - 1
    );
  };

  const handleNextImage = () => {
    setActiveImageIndex((prevIndex) =>
      prevIndex < productData.product.images.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <Flex w="100%" minH="90vH" overflow="auto" direction="row">
      <Card
        borderRadius="md"
        overflow="hidden"
        width="100%"
        boxShadow="md"
        align="start"
      >
        {productData ? (
          <Flex
            px="2"
            w="100%"
            direction={{ base: "column", sm: "column", md: "row", lg: "row" }}
          >
            <Box>
              <Box align="start" mb="5px">
                <Heading as="h4" size="md">
                  Product Details
                </Heading>
              </Box>
              <Divider mb="10px" />
              <Flex align="center" direction="column">
                <Box minW="400px" align="center" position="relative">
                  <SwipeableViews
                    index={activeImageIndex}
                    onChangeIndex={(index) => setActiveImageIndex(index)}
                  >
                    {productData.product.images.map((img, index) => (
                      <Image
                        key={index}
                        src={img}
                        alt={`Image ${index + 1}`}
                        boxSize={{
                          base: "400px",
                          md: "250px",
                          sm: "200px",
                          xl: "400px",
                        }}
                        // objectFit="cover"
                        borderRadius="md"
                      />
                    ))}
                  </SwipeableViews>
                  <Button
                    position="absolute"
                    top="50%"
                    left="2px"
                    colorScheme="gray"
                    onClick={handlePrevImage}
                  >
                    <FaArrowLeft />
                  </Button>
                  <Button
                    position="absolute"
                    top="50%"
                    right="2px"
                    colorScheme="gray"
                    onClick={handleNextImage}
                  >
                    <FaArrowRight />
                  </Button>
                  <HStack
                    position="absolute"
                    bottom="10px"
                    left="50%"
                    transform="translateX(-50%)"
                    spacing={1}
                  >
                    {productData.product.images.map((_, index) => (
                      <Box
                        key={index}
                        boxSize="5px"
                        borderRadius="full"
                        bg={index === activeImageIndex ? "blue.500" : "white"}
                        opacity="1"
                      />
                    ))}
                  </HStack>
                </Box>
                <SimpleGrid columns={1} spacing={2} mt="2">
                  {productData.product.images.map((img, index) => (
                    <Box
                      key={index}
                      boxSize="30px"
                      cursor="pointer"
                      onClick={() => setActiveImageIndex(index)}
                      ml={index !== 0 ? 0 : 0}
                    >
                      <Image
                        src={img}
                        alt={`Thumbnail ${index + 1}`}
                        boxSize="30px"
                        objectFit="cover"
                        borderRadius="lg"
                      />
                    </Box>
                  ))}
                </SimpleGrid>
              </Flex>
            </Box>

            <Spacer />
            <Box ml="50px" mt="9px" mb="50px" w="100%">
              <Box>
                <Divider mt="20px" orientation="horizontal" />
                <Flex
                  direction={{
                    base: "column",
                    sm: "column",
                    md: "row",
                    lg: "row",
                  }}
                  align="center"
                  mt="5px"
                  p="2px"
                >
                  <Flex align={"center"}>
                    <Avatar
                      size="2xs"
                      mr="2"
                      src={"https://bit.ly/broken-link"}
                    />
                    <Link
                      as={ReactRouterLink}
                      to={`/app/profile`}
                      color="#0648b3"
                    >
                      <Text as="u" fontSize="xs">
                        {"Impact Dev"}
                      </Text>
                    </Link>
                    <Text fontSize="xs" color="gray.500" ml="2" mr="10px">
                      {/* | {product.dateTime} */}| {"Feb 6 2024"}
                    </Text>
                    <Badge mr="10px" colorScheme="green">
                      <Icon as={DownloadIcon} me="4px" />
                      {/* {product.numberOfDownloads >= 1
                        ? product.numberOfDownloads
                        : 0} */}
                      {"1"}
                    </Badge>
                  </Flex>
                  <Spacer />
                  <Flex
                    mt={{
                      base: "0px",
                      sm: "15px",
                      md: "0px",
                      xl: "0px",
                    }}
                    align={"center"}
                  >
                    <Text mr="20px" fontSize="xl" fontWeight="bold">
                      ${productData.prices[0].unit_amount}
                    </Text>
                    <Box>
                      <Button
                        fontWeight="normal"
                        bg="#0a48b3"
                        color="white"
                        onClick={handleAddToCart}
                        fontSize="xs"
                      >
                        Add to Cart
                      </Button>
                    </Box>
                  </Flex>
                </Flex>
                <Divider mt="5px" orientation="horizontal" />
              </Box>
              <VStack mt="10px" spacing="2" align="start">
                <Heading as="h1" size="lg">
                  {productData.product.name}
                </Heading>
                <Text fontSize="md" color="gray.500">
                  Category:{}
                </Text>
                <Text color="gray.500">Description:</Text>
                <Text fontSize="md">{productData.product.description}</Text>
              </VStack>
            </Box>
          </Flex>
        ) : (
          <Text align="center">No data found</Text>
        )}
        <Box mt="20px" mb="2" align="center" h="40px" bg="gray.200" p="2">
          <Text fontWeight="bold" fontSize={{ base: "lg", sm: "md" }}>
            {"More Products"}
          </Text>
        </Box>
        {productsLists &&
        productsLists.products &&
        productsLists.products.length > 0 ? (
          <Grid
            templateColumns={{ sm: "1fr", md: "1fr 1fr", xl: "1fr 1fr 1fr" }}
            templateRows={{ sm: "1fr 1fr 1fr auto", md: "1fr 1fr", xl: "1fr" }}
            gap="8px"
          >
            {productsLists.products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </Grid>
        ) : (
          <Text align="center">No data found</Text>
        )}
      </Card>
    </Flex>
  );
};

export default ProductDetails;
