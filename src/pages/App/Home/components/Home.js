import React, { useEffect } from "react";
import { Flex, Grid, Spinner } from "@chakra-ui/react";
import Card from "../../../../components/Card/Card";
import CardBody from "../../../../components/Card/CardBody";
import ProductCard from "./ProjectCard";
import SearchBar from "./SearchBar";
import { connect } from "react-redux";
import * as actions from "../../Products/actions";

const Home = ({ productList, fetchProducts }) => {
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
      <Card bg="none">
        <SearchBar />
        <CardBody>
          {productsLists &&
          productsLists.products &&
          productsLists.products.length > 0 ? (
            <Grid
              templateColumns={{ sm: "1fr", md: "1fr 1fr", xl: "1fr 1fr 1fr" }}
              templateRows={{
                sm: "1fr 1fr 1fr auto",
                md: "1fr 1fr",
                xl: "1fr",
              }}
              gap="8px"
            >
              {productsLists.products.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
            </Grid>
          ) : (
            <Flex
              alignItems="center"
              justifyContent="center"
              minHeight="50vh"
              ml="600px"
            >
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="#0648b3"
                size="xl"
              />
            </Flex>
          )}
        </CardBody>
      </Card>
    </Flex>
  );
};

const mapStateToProps = (state) => ({
  productList: state.product.productList,
});

const mapDispatchToProps = {
  fetchProducts: actions.fetchProductsRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
