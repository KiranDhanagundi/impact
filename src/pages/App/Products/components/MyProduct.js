import {
  Box,
  Flex,
  Button,
  Link,
  Icon,
  Grid,
  Heading,
  Text,
} from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";
import { Link as ReactRouterLink } from "react-router-dom";
import UserProjects from "../../Profile/components/UserProjects";
import { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

const MyProducts = ({ productList, fetchProducts }) => {
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  let productsLists = {};

  // Check if productList and its properties are defined
  if (productList && productList.products && productList.prices) {
    // Map over productList.products and combine prices
    productsLists = {
      products: productList.products.map((product) => {
        return {
          ...product,
          prices: productList.prices.filter(
            (price) => price.product === product.id
          ),
        };
      }),
    };
  }

  return (
    <Flex w="100%" minH="90vH" overflow="auto" direction="column">
      <Box align="start" mb="10px">
        <Heading as="h4" size="md">
          My Products
        </Heading>
      </Box>
      <Grid
        templateColumns={{ sm: "1fr", md: "1fr 1fr", xl: "1fr 1fr 1fr" }}
        templateRows={{ sm: "1fr 1fr 1fr auto", md: "1fr 1fr", xl: "1fr" }}
        gap="8px"
      >
        <Button
          p="0px"
          bg="transparent"
          color="gray.500"
          borderWidth="1px "
          borderRadius="xl"
          h="170px"
          boxShadow="md"
          borderColor="lightgray"
        >
          <Flex direction="column" justifyContent="center" align="center">
            <Icon as={FaPlus} fontSize="md" mb="12px" />
            <Link
              fontSize="md"
              as={ReactRouterLink}
              ms="5px"
              fontWeight="normal"
              to="/app/newproduct"
            >
              Create a New Project
            </Link>
          </Flex>
        </Button>
        {productsLists &&
        productsLists.products &&
        productsLists.products.length > 0 ? (
          productsLists.products.map((product, index) => (
            <UserProjects key={index} product={product} />
          ))
        ) : (
          <Text align="center">No data found</Text>
        )}
      </Grid>
    </Flex>
  );
};

const mapStateToProps = (state) => ({
  productList: state.product.userProductList,
});

const mapDispatchToProps = {
  fetchProducts: actions.fetchUerProductsRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(MyProducts);
