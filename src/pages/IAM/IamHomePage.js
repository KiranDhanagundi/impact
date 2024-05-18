import React from "react";
import IamHero from "./IamHero.js";
import FeedBack from "../Public/components/FeedBack.js"
import { Flex } from "@chakra-ui/react";
import Subscription from "../App/Subscriptions/components/Subscription.js";
import IamBanner from "./IamBanner.js";

export default function IamHomePage() {
  return (
    <Flex direction={"column"}>
      {/* <IamHero /> */}
      <IamBanner/>
      <FeedBack />
      <Subscription/>
    </Flex>
  );
}
