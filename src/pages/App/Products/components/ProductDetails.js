import React, { useState } from "react";
import {
  VStack,
  HStack,
  Heading,
  Text,
  Button,
  Spacer,
  Box,
  AspectRatio,
  Image,
  Rating,
  Link,
  Flex,
  Avatar,
  Divider,
  Grid,
  Icon,
  SimpleGrid,
  Badge,
  Stack,
  Center,
} from "@chakra-ui/react";
import Card from "../../../../components/Card/Card";
import { Link as ReactRouterLink } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import ProductCard from "../../Home/components/ProjectCard";
import { DownloadIcon } from "@chakra-ui/icons";
import SwipeableViews from "react-swipeable-views";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const ProductDetails = ({ props }) => {
  console.log("prod details", props);
  const product = {
    title: "AI predictions: Top 13 AI trends for 2024",
    images: [
      "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*0DoUT3wzcxy89nm1tkd0qQ.png",
      "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*Nm1_iC89eUi3Eb0JeVqUPg.jpeg",
      "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*BniKIhT3c54sIEuPtzRQKw.jpeg",
      "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*0DoUT3wzcxy89nm1tkd0qQ.png",
      "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*Nm1_iC89eUi3Eb0JeVqUPg.jpeg",
      "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*BniKIhT3c54sIEuPtzRQKw.jpeg",
      "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*0DoUT3wzcxy89nm1tkd0qQ.png",
      "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*Nm1_iC89eUi3Eb0JeVqUPg.jpeg",
      "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*BniKIhT3c54sIEuPtzRQKw.jpeg",
    ],

    rating: 4.5,
    numberOfDownloads: 500,
    price: 5,
    description:
      "This is a 13 tracks special edition of the best of the journey home and my culture albums. Most tracks are sung in  one of the 400+ Bantu spoken languages in Africa. These songs are based on true stories of Love, Relationships, Advice and Kindness given to others also appreciation of life. Available as a 1hr download in mp3 format. We will listen to your suggestions. There is a USB version available very soon, check out our main web site.",
    category: "Electronics",
    author: "John Doe",
    dateTime: "Jan 1,2024",
    avatar: "https://bit.ly/sage-adebayo",
  };

  const products = [
    {
      title: "AI predictions: Top 13 AI trends for 2024",
      description:
        "Explore the future with our comprehensive guide to the top 13 AI trends anticipated for 2024.",
      imageUrl:
        "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*0DoUT3wzcxy89nm1tkd0qQ.png",
      author: "John Doe",
      dateTime: "Jan 1,2024",
      // rating:"20"
      price: "5",
      avatar: "https://bit.ly/sage-adebayo",
      numberOfDownloads: 200,
    },
    {
      title: "UX/UI Design Trends Going Into 2024",
      description:
        "Description for Product UX/UI Design Trends Going Into 2024",
      imageUrl:
        "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*Nm1_iC89eUi3Eb0JeVqUPg.jpeg",
      author: "John Doe",
      dateTime: "Jan 1,2024",
      price: "1",
      avatar: "https://bit.ly/sage-adebayo",
      numberOfDownloads: 200,
    },
    {
      title:
        "The Making of Apple’s Emoji: How designing these tiny icons changed my life",
      description:
        "Description for ProductThe Making of Apple’s Emoji: How designing these tiny icons changed my life",
      imageUrl:
        "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*BniKIhT3c54sIEuPtzRQKw.jpeg",
      author: "John Doe",
      dateTime: "Jan 1,2024",
      price: "0",
      avatar: "https://bit.ly/sage-adebayo",
      numberOfDownloads: 200,
    },
    {
      title: "UX/UI Design Trends Going Into 2024",
      description:
        "Description for Product UX/UI Design Trends Going Into 2024",
      imageUrl:
        "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*Nm1_iC89eUi3Eb0JeVqUPg.jpeg",
      author: "John Doe",
      dateTime: "Jan 5,2024",
      price: "5",
      avatar: "https://bit.ly/sage-adebayo",
      numberOfDownloads: 200,
    },
    {
      title: "AI predictions: Top 13 AI trends for 2024",
      description:
        "Explore the future with our comprehensive guide to the top 13 AI trends anticipated for 2024.",
      imageUrl:
        "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*0DoUT3wzcxy89nm1tkd0qQ.png",
      author: "John Doe",
      dateTime: "Jan 1,2024",
      // rating:"20"
      price: "5",
      avatar: "https://bit.ly/sage-adebayo",
      numberOfDownloads: 200,
    },
  ];

  const handleAddToCart = () => {
    console.log(`Adding  ${product.title} to cart.`);
  };

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const handlePrevImage = () => {
    setActiveImageIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : product.images.length - 1
    );
  };

  const handleNextImage = () => {
    setActiveImageIndex((prevIndex) =>
      prevIndex < product.images.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <Flex mt="10px" w="100%" minH="90vH" overflow="auto" direction="row">
      <Card
        // borderWidth="1px"
        borderRadius="md"
        overflow="hidden"
        width="auto"
        boxShadow="md"
        p="2"
        bg="white"
        align="start"
      >
        <Flex
          w="100%"
          direction={{ base: "column", sm: "column", md: "row", lg: "row" }}
        >
          <Box>
            <Heading as="h4" size="md" mb="5px">
              {"Back to home"}
            </Heading>
            <Divider mb="10px" />

            <Flex align="center" direction="column">
              <Box align="center" position="relative">
                <SwipeableViews
                  index={activeImageIndex}
                  onChangeIndex={(index) => setActiveImageIndex(index)}
                >
                  {product.images.map((img, index) => (
                    <Image
                      key={index}
                      src={img}
                      alt={`Image ${index + 1}`}
                      boxSize={{ base: "400px", md: "400", sm: "270px" }}
                      objectFit="cover"
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
                  {product.images.map((_, index) => (
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
              <SimpleGrid columns={10} spacing={2} mt="2">
                {product.images.map((img, index) => (
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
          <Box mt="9px" ml="5px" mb="50px">
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
                    src={
                      product.avatar
                        ? product.avatar
                        : "https://bit.ly/broken-link"
                    }
                  />
                  <Text fontSize="xs" color="gray.500">
                    {product.author}
                  </Text>
                  <Text fontSize="xs" color="gray.500" ml="2" mr="10px">
                    | {product.dateTime}
                  </Text>
                  <Badge mr="10px" colorScheme="green">
                    <Icon as={DownloadIcon} me="4px" />
                    {product.numberOfDownloads >= 1
                      ? product.numberOfDownloads
                      : 0}
                  </Badge>
                </Flex>
                <Spacer />
                <Flex mt={{ base: "10px" }} align={"center"}>
                  <Text mr="20px" fontSize="xl" fontWeight="bold">
                    ${product.price}
                  </Text>
                  <Box>
                    <Button
                      w="100px"
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
              <Heading as="h1" size="md">
                {product.title}
              </Heading>
              <Text fontSize="md" color="gray.500">
                Category: {product.category}
              </Text>
              <Text color="gray.500">Description:</Text>
              <Text fontSize="md">{product.description}</Text>
            </VStack>
            {/* <Box mt="30px" align="center">
              <Button
                w={{ base: "100px", xl: "150px", md: "200px", sm: "300px" }}
                bg="#0a48b3"
                color="white"
                onClick={handleAddToCart}
                fontSize="xs"
              >
                Add to Cart
              </Button>
            </Box> */}
          </Box>
        </Flex>

        <Box mt="20px" mb="2" align="center" h="40px" bg="gray.200" p="2">
          <Text fontWeight="bold" fontSize={{ base: "lg", sm: "md" }}>
            {"More Products"}
          </Text>
        </Box>
        <Grid
          templateColumns={{ sm: "1fr", md: "1fr", xl: "1fr 1fr" }}
          templateRows={{ sm: "1fr 1fr 1fr auto", md: "1fr 1fr", xl: "1fr" }}
          gap="4px"
        >
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </Grid>
      </Card>
    </Flex>
  );
};

export default ProductDetails;
