import React from "react";
import { Flex } from "@chakra-ui/react";
import { Header } from "../pages/Public/index.js";
import theme from "../utils/theme.js";
import { ChakraProvider } from "@chakra-ui/react";

export default function PublicLayout(props) {
  return (
    <ChakraProvider theme={theme} resetCss={false}>
      <Flex
        direction="column"
        align="center"
        maxW={{ xl: "1270px" }}
        backgroundColor="#ffffff!important"
        m="0 auto"
        {...props}
      >
        <Header />
        {props.children}
      </Flex>
    </ChakraProvider>
  );
}
