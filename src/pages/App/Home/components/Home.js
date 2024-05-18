import React, { useEffect } from "react";
import { Flex, Grid, Spinner } from "@chakra-ui/react";
import Card from "../../../../components/Card/Card";
import CardBody from "../../../../components/Card/CardBody";
import ProductCard from "./ProjectCard";
import SearchBar from "./SearchBar";
import { connect } from "react-redux";
import * as actions from "../../Products/actions";
import Banner from "../../../Market/MarketBanner";
import Categories from "./Category";

const Home = ({ productList, fetchProducts }) => {
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  let productsLists = {};

  if (productList && productList.products && productList.prices) {
    productsLists = {
      products: productList.products.map((product) => ({
        ...product,
        prices: productList.prices.filter((price) => price.product === product.id),
      })),
    };
  }

  return (
    <Flex w="100%" minH="90vh" overflow="auto" direction="column">
      <Banner />
      <SearchBar />
      <Card bg="none">
        <Categories />
        <CardBody>
          {productsLists && productsLists.products && productsLists.products.length > 0 ? (
            <Grid
              templateColumns={{ sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)",lg:"repeat(5, 1fr)", xl: "repeat(5, 1fr)" }}
              gap={4}
              justifyContent="center"
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
