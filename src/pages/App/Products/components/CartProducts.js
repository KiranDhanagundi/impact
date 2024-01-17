import React, { useState } from "react";
import {
  Box,
  Flex,
  Image,
  Text,
  Avatar,
  Button,
  Spacer,
  Stack,
  Link,
  useDisclosure,
  Badge,
  Icon,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import RemoveCartItems from "./RemoveCartItems";
import { DownloadIcon } from "@chakra-ui/icons";

const CartProducts = ({ cartItem }) => {
  const {
    title,
    description,
    imageUrl,
    author,
    dateTime,
    price,
    avatar,
    numberOfDownloads,
  } = cartItem;
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const { onOpen } = useDisclosure();

  const handleDelete = (event) => {
    // Prevent the default link behavior if the event is defined
    if (event) {
      event.preventDefault();
    }
    // Open the edit modal
    onOpen();

    setSelectedProduct(cartItem);
    setIsDeleteModalOpen(true);
  };

  const handleDeleteConfirmation = () => {
    // Implement your delete logic here
    setIsDeleteModalOpen(false);
  };

  return (
    <Link
      as={ReactRouterLink}
      to={`/app/productdetails`}
      style={{ textDecoration: "none" }}
    >
      <Box
        borderWidth="1px"
        borderRadius="md"
        overflow="hidden"
        width="auto"
        boxShadow="sm"
        p="2"
        bg="white"
        mb="4px"
      >
        <Stack direction="row" spacing="5" width="full">
          <Image
            src={imageUrl}
            alt={title}
            boxSize={{ base: "150px", md: "80px", sm: "80px" }}
            objectFit="cover"
            borderRadius="sm"
            minW={{ base: "150px", md: "80px", sm: "80px" }}
            minH={{ base: "150px", md: "80px", sm: "80px" }}
            mr="1px"
          />
          <Stack spacing="0.5">
            <Box align={"start"} H={"100px"}>
              <Text
                noOfLines="3"
                fontWeight="bold"
                fontSize={{ base: "lg", sm: "md" }}
              >
                {title}
              </Text>
              <Text
                noOfLines="2"
                color="gray.600"
                fontSize="sm"
                overflow={"hidden"}
              >
                {description}
              </Text>
            </Box>
          </Stack>
        </Stack>
        <Flex align="center" mt="10px">
          <Avatar
            size="2xs"
            mr="2"
            src={avatar ? avatar : "https://bit.ly/broken-link"}
          />
          <Text fontSize="xs" color="gray.500">
            {author}
          </Text>
          <Text fontSize="xs" color="gray.500" ml="2">
            | {dateTime}
          </Text>
          <Box
            m="10px"
            as="button"
            borderRadius="md"
            bg="#0a48b3"
            color="white"
            px={2}
            h={5}
            w="60px"
          >
            {"$" + price}
          </Box>
          <Badge mr="10px" colorScheme="green">
            <Icon as={DownloadIcon} me="4px" />
            {numberOfDownloads}
          </Badge>
          <Spacer />
          <Button
            variant="outline"
            colorScheme="red"
            minW="90px"
            h="36px"
            fontSize="xs"
            ml="4px"
            onClick={handleDelete}
          >
            Remove
          </Button>
          <RemoveCartItems
            isOpen={isDeleteModalOpen}
            onClose={() => setIsDeleteModalOpen(false)}
            product={selectedProduct}
            onConfirm={handleDeleteConfirmation}
          />
        </Flex>
      </Box>
    </Link>
  );
};

export default CartProducts;
