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
  Button,
  Spacer,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { DownloadIcon } from "@chakra-ui/icons";
import { useDispatch } from "react-redux";
import { FaCartPlus } from "react-icons/fa";

const ProductCard = ({ product }) => {
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
    // package_dimensions,
    // shippable,
    // statement_descriptor,
    // tax_code,
    // type,
    // unit_label,
    // updated,
    // url,
    prices,
  } = product;

  const dispatch = useDispatch();

  const handleAddToCart = (event) => {
    if (event) {
      event.preventDefault();
    }
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  return (
    <Link
      as={ReactRouterLink}
      to={`/app/productdetails/${product.id}`}
      style={{ textDecoration: "none" }}
    >
      <Box
        borderWidth="1px"
        position="relative"
        borderRadius="xl"
        overflow="hidden"
        width="100%"
        boxShadow="md"
        borderColor="lightgray"
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
                fontSize={{ base: "lg", sm: "xs", md: "sm", xl: "sm" }}
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
            <Box align="start" mt="5px" as="button" fontWeight="bold">
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
          <Avatar size="2xs" mr="2" src={"https://bit.ly/broken-link"} />
          <Link as={ReactRouterLink} to={`/app/profile`} color="#0648b3">
            <Text as="u" fontSize="xs">
              {"Impact Dev"}
            </Text>
          </Link>
          <Text fontSize="xs" color="gray.500" ml="2">
            | {"Feb 6 2024"}
          </Text>
          <Badge ml="10px" colorScheme="green">
            <Icon as={DownloadIcon} me="4px" />
            {"1"}
          </Badge>
          <Spacer />
          <Button
            boxShadow="sm"
            color={"#0a48b3"}
            variant={"outline"}
            //onClick={handleAddToCart}
            fontSize="xs"
            h="30px"
            p="8px"
          >
            <Icon as={FaCartPlus} boxSize={4} />
          </Button>
        </Flex>
      </Box>
    </Link>
  );
};

export default ProductCard;
