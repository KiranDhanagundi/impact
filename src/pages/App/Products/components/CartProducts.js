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
  // const {
  //   title,
  //   description,
  //   imageUrl,
  //   author,
  //   dateTime,
  //   price,
  //   avatar,
  //   numberOfDownloads,
  // } = cartItem;
  const { product, prices } = cartItem;

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
      to={`/app/productdetails/${product.id}`}
      style={{ textDecoration: "none" }}
    >
      <Box
        position="relative"
        borderWidth="1px"
        borderRadius="md"
        overflow="hidden"
        width="100%"
        boxShadow="md"
        p="2"
        mb="4px"
        h="130px"
      >
        <Stack direction="row" spacing="5" width="full">
          <Image
            src={product.images[0]}
            alt={product.name}
            boxSize={{ base: "150px", md: "80px", sm: "80px" }}
            borderRadius="sm"
            minW={{ base: "150px", md: "80px", sm: "80px" }}
            minH={{ base: "150px", md: "80px", sm: "80px" }}
            mr="1px"
          />
          <Stack align="start" spacing="0.5">
            <Box align={"start"} H={"100px"}>
              <Text
                noOfLines="2"
                fontWeight="bold"
                fontSize={{ base: "lg", sm: "md" }}
              >
                {product.name}
              </Text>
              <Text
                noOfLines="1"
                color="gray.600"
                fontSize="sm"
                overflow={"hidden"}
              >
                {product.description}
              </Text>
            </Box>
            <Box mt="5px" as="button" fontWeight="bold">
              {"$" + prices[0].unit_amount}
            </Box>
          </Stack>
        </Stack>
        <Flex
          position="absolute"
          bottom="1px"
          p="2"
          left="0"
          right="0"
          alignItems="center"
          mt="10px"
        >
          <Avatar
            size="2xs"
            mr="2"
            // src={avatar ? avatar : "https://bit.ly/broken-link"}
            src={"https://bit.ly/broken-link"}
          />
          <Text fontSize="xs" color="gray.500">
            {/* {author} */}
            {"Elon Musk"}
          </Text>
          <Text fontSize="xs" color="gray.500" ml="2">
            {/* | {dateTime} */}
            {"Feb 6 2024"}
          </Text>
          <Badge ml="10px" colorScheme="green">
            <Icon as={DownloadIcon} me="4px" />
            {/* {numberOfDownloads} */}
            {"1"}
          </Badge>
          <Spacer />
          <Button
            boxShadow="sm"
            variant="outline"
            color={"red"}
            h="30px"
            fontSize="xs"
            p="8px"
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
