import React from "react";
import Hero from "./Hero";
import FeedBack from "./FeedBack.js";
import { Flex } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex direction={"column"}>
      <Hero />
      <FeedBack />
    </Flex>
  );
}
