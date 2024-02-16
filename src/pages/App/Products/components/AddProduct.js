import React, { useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  HStack,
  Image,
  useToast,
  Flex,
  Grid,
  Box,
  Spacer,
  Text,
  Textarea,
  // NumberInput,
  InputGroup,
  InputLeftElement,
  // Stack,
  Avatar,
  Badge,
  Icon,
  Divider,
  Heading,
} from "@chakra-ui/react";

import { DownloadIcon } from "@chakra-ui/icons";
// import SwipeableViews from "react-swipeable-views";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import axios from "axios";
import { useHistory } from "react-router-dom";

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [category, setCategory] = useState("");
  const [prices, setPrices] = useState("");
  const toast = useToast();
  const defaultImageSrc = "https://via.placeholder.com/150";
  const author = "Impact Dev";
  const dateTime = "Feb 17,2024";
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory(); // Initialize useHistory hook

  const handleCreateProductAndPublish = async (e) => {
    e.preventDefault();

    if (!title || !description || !imageUrl || !category || !prices) {
      toast({
        title: "Error creating product.",
        description: "Please fill in all the required fields.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.post("/create-product-and-price", {
        title,
        description,
        imageUrl,
        category,
        prices,
      });

      console.log("Product created successfully:", response.data);

      toast({
        title: "Product created and published successfully.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      history.push(`/app/productedit/${response?.data.product?.id}`);
    } catch (error) {
      console.error("Error creating product:", error);

      toast({
        title: "Error creating product.",
        description: "An error occurred while creating the product.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Flex w="100%" minH="90vH" overflow="auto" direction="column">
      <Box align="start" mb="10px">
        <Heading as="h4" size="md">
          Create Product
        </Heading>
      </Box>
      <Grid
        templateColumns={{ sm: "1fr", md: "1fr", xl: "1fr 1fr" }}
        templateRows={{ sm: "1fr 1fr 1fr auto", md: "1fr 1fr", xl: "1fr" }}
        gap="4px"
      >
        <Box
          borderWidth="1px"
          borderRadius="md"
          overflow="hidden"
          width="auto"
          boxShadow="sm"
          p="2"
        >
          <Text fontWeight={"bold"} color={"#0648b3"}>
            New Product
          </Text>
          <VStack
            as="form"
            onSubmit={handleCreateProductAndPublish}
            w="100%"
            spacing="2"
          >
            <FormControl isRequired id="title">
              <FormLabel>Product Title</FormLabel>
              <Input
                type="text"
                placeholder="Enter Title..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </FormControl>
            {/* <FormControl isRequired id="imageUrl">
              <FormLabel> Media</FormLabel>
              <Input
                type="file"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
              />
            </FormControl> */}
            <FormControl isRequired id="imageUrl">
              <FormLabel> Media</FormLabel>
              <Input
                type="text"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
              />
            </FormControl>
            <FormControl isRequired id="description">
              <FormLabel>Description</FormLabel>
              <Textarea
                placeholder="Enter Description..."
                type="text"
                minH="200px"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </FormControl>
            <FormControl isRequired id="title">
              <FormLabel>Category</FormLabel>
              <Input
                type="text"
                placeholder="Enter Category..."
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </FormControl>
            {/* <FormControl isRequired>
              <FormLabel>Category</FormLabel>
              <Select placeholder="Select...">
                <option>Technology</option>
                <option>Art</option>
                <option>Others</option>
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              </Select>
            </FormControl> */}
            <FormControl isRequired id="price">
              <FormLabel>Price</FormLabel>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  color="gray.300"
                  fontSize="1.2em"
                >
                  $
                </InputLeftElement>
                <Input
                  placeholder="Enter Price.."
                  type="number"
                  value={prices}
                  onChange={(e) => setPrices(e.target.value)}
                />
              </InputGroup>
            </FormControl>
            <HStack>
              <Button
                fontWeight="normal"
                bg="#0a48b3"
                color="white"
                minW="90px"
                h="36px"
                fontSize="sm"
                type="submit"
                onClick={handleCreateProductAndPublish}
                isLoading={isLoading}
              >
                Create Product & Publish
              </Button>
            </HStack>
          </VStack>
        </Box>
        <Box
          borderWidth="1px"
          borderRadius="md"
          overflow="hidden"
          width="auto"
          boxShadow="sm"
          p="2"
        >
          <Text fontWeight={"bold"} color={"#0648b3"}>
            Preview
          </Text>
          <Box>
            <Flex align="center" direction="column">
              <Box borderWidth="1px" borderRadius="md" overflow="hidden" p="2">
                <Image
                  src={imageUrl || defaultImageSrc}
                  alt={title}
                  boxSize={{
                    base: "300px",
                    md: "200px",
                    sm: "150px",
                    xl: "200px",
                    lg: "300px",
                  }}
                  borderRadius="sm"
                />
              </Box>
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
                    // src={
                    //   product.avatar
                    //     ? product.avatar
                    //     : "https://bit.ly/broken-link"
                    // }
                    src="https://bit.ly/broken-link"
                  />
                  <Text fontSize="xs" color="gray.500">
                    {author || "Author Name"}
                  </Text>
                  <Text fontSize="xs" color="gray.500" ml="2" mr="10px">
                    | {dateTime}
                  </Text>
                  <Badge mr="10px" colorScheme="green">
                    <Icon as={DownloadIcon} me="4px" />
                    {0}
                  </Badge>
                </Flex>
                <Spacer />
                <Flex mt={{ base: "10px" }} align={"center"}>
                  <Text mr="20px" fontSize="xl" fontWeight="bold">
                    ${prices}
                  </Text>
                </Flex>
              </Flex>
              <Divider mt="5px" orientation="horizontal" />
            </Box>
            <VStack mt="5px" spacing="2" align="start">
              <Heading as="h1" size="md">
                {title}
              </Heading>
              <Text fontSize="md" color="gray.500">
                Category: {category}
              </Text>
              <Text decoration="auto" color="gray.500">
                Description:
              </Text>
              <Text p="2" align="left" fontSize="md">
                {description}
              </Text>
            </VStack>
          </Box>
        </Box>
      </Grid>
    </Flex>
  );
};

export default AddProduct;
