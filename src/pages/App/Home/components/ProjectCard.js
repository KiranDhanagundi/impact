import {
  Box,
  Flex,
  Image,
  Text,
  Avatar,
  Stack,
  Link,
  Icon,
  Badge,
} from "@chakra-ui/react";
import { Link as ReactRouterLink, useHistory } from "react-router-dom";
import { DownloadIcon } from "@chakra-ui/icons";

const ProductCard = ({ product }) => {
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
        <Stack direction="row" spacing="4" width="full">
          <Image
            src={imageUrl}
            alt={title}
            boxSize={{ base: "200px", md: "100", sm: "80px" }}
            objectFit="cover"
            borderRadius="sm"
            minW={{ base: "150px", md: "100px", sm: "80px" }}
            minH={{ base: "150px", md: "100px", sm: "80px" }}
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
            {"$ " + price}
          </Box>
          <Badge mr="10px" colorScheme="green">
            <Icon as={DownloadIcon} me="4px" />
            {numberOfDownloads}
          </Badge>
        </Flex>
      </Box>
    </Link>
  );
};

export default ProductCard;
