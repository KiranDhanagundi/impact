import React, { useEffect } from "react";
import { Flex, Grid, Text } from "@chakra-ui/react";
import Card from "../../../../components/Card/Card";
import CardBody from "../../../../components/Card/CardBody";
import ProductCard from "./ProjectCard";
import SearchBar from "./SearchBar";
import { useState } from "react";

const Home = () => {
  const [productList, setProductList] = useState("");
  useEffect(() => {
    // fetch products on page load
    fetch("/v1/products", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setProductList(data));
  }, []);

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
  } else {
    console.log("Product list or its properties are undefined.");
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
            <Text align="center">No data found</Text>
          )}
        </CardBody>
      </Card>
    </Flex>
  );
};

export default Home;
