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
import EditProductModal from "../../Products/components/EditProduct";
import { DownloadIcon } from "@chakra-ui/icons";
import DeleteProduct from "../../Products/components/DeleteProduct";

const UserProjects = ({ product }) => {
  const {
    title,
    description,
    imageUrl,
    author,
    dateTime,
    price,
    avatar,
    numberOfDownloads,
  } = product;
  const { isOpen, onOpen, onClose } = useDisclosure();

  // const history = useHistory();

  // const [selectedProduct, setSelectedProduct] = useState(null);

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleDelete = (event) => {
    if (event) {
      event.preventDefault();
    }
    setIsDeleteModalOpen(true);
  };

  const handleDeleteConfirmation = () => {
    // Implement your delete logic here
    setIsDeleteModalOpen(false);
  };

  const handleEditClick = (event) => {
    if (event) {
      event.preventDefault();
    }
    onOpen();
  };

  const handleSaveEdit = (editedProduct) => {
    // Handle the edited product data (e.g., update state or send to the server)
    console.log("Edited Product:", editedProduct);
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
      >
        <Stack direction="row" spacing="5" width="full">
          <Image
            src={imageUrl}
            alt={title}
            boxSize={{ base: "200px", md: "100", sm: "80px" }}
            objectFit="cover"
            borderRadius="sm"
            minW={{ base: "150px", md: "100px", sm: "80px" }}
            minH={{ base: "150px", md: "100px", sm: "80px" }}
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
          <Badge mr="4px" colorScheme="green">
            <Icon as={DownloadIcon} me="4px" />
            {numberOfDownloads}
          </Badge>
          <Spacer />
          <Flex direction={{ base: "row", sm: "column", md: "row", xl: "row" }}>
            <Button
              variant="outline"
              colorScheme="blue"
              minW="70px"
              h="34px"
              fontSize="xs"
              ml="4px"
              mb="2px"
              onClick={handleEditClick}
            >
              Edit
            </Button>
            <Button
              variant="outline"
              colorScheme="blue"
              minW="70px"
              h="34px"
              fontSize="xs"
              ml="4px"
              onClick={handleDelete}
            >
              Delete
            </Button>
          </Flex>
          <EditProductModal
            isOpen={isOpen}
            onClose={onClose}
            product={product}
            onSave={handleSaveEdit}
          />
          <DeleteProduct
            isOpen={isDeleteModalOpen}
            onClose={() => setIsDeleteModalOpen(false)}
            product={product}
            onConfirm={handleDeleteConfirmation}
          />
        </Flex>
      </Box>
    </Link>
  );
};

export default UserProjects;
