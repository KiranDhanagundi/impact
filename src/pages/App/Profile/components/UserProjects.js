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
  Badge,
  Icon,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { DownloadIcon } from "@chakra-ui/icons";
import DeleteProduct from "../../Products/components/DeleteProduct";

const UserProjects = ({ product }) => {
  const {
    // id,
    // object,
    // active,
    // attributes,
    // created,
    // default_price,
    description,
    images,
    // metadata,
    name,
    prices,
  } = product;

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleDelete = (event) => {
    if (event) {
      event.preventDefault();
    }
    setIsDeleteModalOpen(true);
  };

  const handleDeleteConfirmation = () => {
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
        borderRadius="xl"
        overflow="hidden"
        width="auto"
        boxShadow="md"
        p="2"
        h="170px"
        transition="box-shadow 0.3s ease"
        _hover={{
          boxShadow: "xl",
        }}
      >
        <Stack direction="row" spacing="4" width="full">
          <Image
            src={images[0]}
            alt={name}
            boxSize={{ base: "200px", md: "100", sm: "80px" }}
            borderRadius="md"
            minW={{ base: "150px", md: "100px", sm: "80px" }}
            minH={{ base: "150px", md: "100px", sm: "80px" }}
            transition="transform 0.2s ease"
            _hover={{ transform: "scale(1.05)" }}
          />
          <Stack align="start" spacing="0.5">
            <Box align={"start"} H={"100px"}>
              <Text
                noOfLines="2"
                fontWeight="bold"
                fontSize={{ base: "lg", sm: "md", md: "sm", xl: "sm" }}
              >
                {name.toLowerCase()}
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
            {"Impact Dev"}
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
          <Flex direction={{ base: "row", sm: "column", md: "row", xl: "row" }}>
            <Link
              as={ReactRouterLink}
              to={`/app/productedit/${product.id}`}
              style={{ textDecoration: "none" }}
            >
              <Button
                boxShadow="sm"
                variant="outline"
                color={"#0a48b3"}
                h="30px"
                fontSize="xs"
                ml="4px"
                mb="2px"
                p="8px"
                minW="53px"
              >
                Edit
              </Button>
            </Link>
            <Button
              boxShadow="sm"
              variant="outline"
              color={"#0a48b3"}
              h="30px"
              fontSize="xs"
              ml="4px"
              onClick={handleDelete}
              p="8px"
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
        </Flex>
      </Box>
    </Link>
  );
};

export default UserProjects;
