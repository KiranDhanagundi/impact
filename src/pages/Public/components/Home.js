import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import * as actions from "../actions";
import Hero from "./Hero";
import FeedBack from "./FeedBack.js";
import { Flex } from "@chakra-ui/react";

export default function Home() {
  const dispatch = useDispatch();
  const [dispatched, setDispatched] = useState(false);

  // useEffect(() => {
  //   if (!dispatched) {
  //     dispatch(actions.awsConfigRequest());
  //     setDispatched(true);
  //   }
  // }, []);

  return (
    <Flex direction={"column"}>
      <Hero />
      <FeedBack />
    </Flex>
  );
}
