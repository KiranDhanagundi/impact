import React, { useState } from "react";
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
import {FaStar } from "react-icons/fa";
import DeleteProduct from "../../Products/components/DeleteProduct";

const UserProjects = ({ product }) => {
  const {
    description,
    images,
    name,
    prices,
    rating = 4.5,
    numPurchases = 100,
  } = product;

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleDelete = (event) => {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    setIsDeleteModalOpen(true);
  };

  const handleDeleteConfirmation = () => {
    setIsDeleteModalOpen(false);
  };

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      width="100%"
      maxW="240px"
      boxShadow="md"
      transition="box-shadow 0.3s ease"
      _hover={{
        boxShadow: "xl",
      }}
    >
      <Link
        as={ReactRouterLink}
        to={`/app/productdetails/${product.id}`}
        style={{ textDecoration: "none" }}
      >
        <Box
          width="100%"
          height={{ base: "140px", md: "160px" }}
          overflow="hidden"
          position="relative"
        >
          <Image
            src={images[0]}
            alt={name}
            width="100%"
            height="100%"
            objectFit="cover"
            transition="transform 0.2s ease"
            _hover={{ transform: "scale(1.05)" }}
          />
        </Box>
        <Flex
          direction="column"
          alignItems="start"
          p="2"
          justifyContent="space-between"
          height={{ base: "100px", md: "120px" }}
        >
          <Box>
            <Text
              fontWeight="bold"
              fontSize={{ base: "xs", md: "sm" }}
              noOfLines={2}
              mb={2}
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
            <Text fontWeight="bold" fontSize={{ base: "md", md: "xl" }} mr="2">
              {"$" + (prices[0].unit_amount / 100).toFixed(2)}
            </Text>
          </Flex>
        </Flex>
      </Link>
      <Flex
        direction="row"
        justify="space-between"
        p="1"
        borderTopWidth="1px"
      >
        <Link
          as={ReactRouterLink}
          to={`/app/productedit/${product.id}`}
          style={{ textDecoration: "none" }}
        >
          <Button
            boxShadow="sm"
            color={"#0a48b3"}
            variant={"outline"}
            fontSize={{ base: "sm", md: "md" }}
            h={{ base: "30px", md: "35px" }}
           
          >
            Edit
          </Button>
        </Link>
        <Button
          boxShadow="sm"
          color={"#0a48b3"}
          variant={"outline"}
          fontSize={{ base: "sm", md: "md" }}
          h={{ base: "30px", md: "35px" }}
          // Remove w="100%"
          onClick={handleDelete}
        >
          Delete
        </Button>
      </Flex>
      <DeleteProduct
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        product={product}
        onConfirm={handleDeleteConfirmation}
      />
    </Box>
  );
};

export default UserProjects;
