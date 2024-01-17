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
  Select,
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
// import Card from "../../../../components/Card/Card";
import { DownloadIcon } from "@chakra-ui/icons";
// import SwipeableViews from "react-swipeable-views";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const toast = useToast();
  const defaultImageSrc = "https://via.placeholder.com/150";
  const author = "Author Name";
  const dateTime = "Jan 16,2024";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !description || !imageUrl || !category || !price) {
      toast({
        title: "Error creating product.",
        description: "Please fill in all the required fields.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    // const newProject = {
    //   title,
    //   imageUrl,
    //   description,
    //   category,
    //   price,
    // };

    toast({
      title: "Product created successfully.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Flex mt="10px" w="100%" minH="90vH" overflow="auto" direction="column">
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
          bg="white"
          m="2px"
        >
          <Text fontWeight={"bold"} color={"#0648b3"}>
            New Product
          </Text>
          <VStack as="form" onSubmit={handleSubmit} w="100%" spacing="4">
            <FormControl isRequired id="title">
              <FormLabel>Product Title</FormLabel>
              <Input
                type="text"
                placeholder="Enter Title..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </FormControl>
            <FormControl isRequired id="imageUrl">
              <FormLabel> Media</FormLabel>
              <Input
                type="file"
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
            <FormControl isRequired>
              <FormLabel>Category</FormLabel>
              <Select placeholder="Select...">
                <option>Technology</option>
                <option>Art</option>
                <option>Others</option>
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              </Select>
            </FormControl>
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
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </InputGroup>
            </FormControl>
            <Flex>
              <Button
                variant="outline"
                colorScheme="blue"
                minW="90px"
                h="36px"
                fontSize="xs"
                mr="100px"
              >
                Prev
              </Button>
              <Spacer />
              <Button
                variant="outline"
                colorScheme="blue"
                minW="90px"
                h="36px"
                fontSize="xs"
                type="submit"
              >
                Next
              </Button>
            </Flex>
            <HStack>
              <Button
                // variant="outline"
                bg="#0a48b3"
                color="white"
                minW="90px"
                h="36px"
                fontSize="xs"
                type="submit"
              >
                Create Product And Publish
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
          m="2px"
          bg="white"
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
                  boxSize="200px"
                  objectFit="cover"
                  borderRadius="sm"
                />
              </Box>
              {/* <Box align="center" position="relative">
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
              </SimpleGrid> */}
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
                    ${price}
                  </Text>
                </Flex>
              </Flex>
              <Divider mt="5px" orientation="horizontal" />
            </Box>
            <VStack mt="10px" spacing="2" align="start">
              <Heading as="h1" size="md">
                {title}
              </Heading>
              <Text fontSize="md" color="gray.500">
                Category: {category}
              </Text>
              <Text decoration="auto" color="gray.500">
                Description:
              </Text>
              <Text fontSize="md">{description}</Text>
            </VStack>
          </Box>
        </Box>
      </Grid>
    </Flex>
  );
};

export default AddProduct;
