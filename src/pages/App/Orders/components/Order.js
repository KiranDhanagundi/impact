import {
  Box,
  Flex,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
  Tab,
  Heading,
} from "@chakra-ui/react";
import React from "react";
import AllOrders from "./AllOrders";
import BuyOrders from "./BuyOrders";
import SellOrders from "./SellOrders";

const Orders = () => {
  return (
    <Flex w="100%" minH="90vH" overflow="auto">
      <Box w="100%">
        <Heading align="left" as="h4" size="md" mb="10px">
          Order History
        </Heading>
        <Tabs align="start" size="sm" variant="line">
          <TabList>
            <Tab>All Orders</Tab>
            <Tab>Buy Orders</Tab>
            <Tab>Sell Orders</Tab>
          </TabList>
          <TabPanels>
            <TabPanel p="0px" mt="10px">
              {<AllOrders />}
            </TabPanel>
            <TabPanel p="0px" mt="10px">
              {<BuyOrders />}
            </TabPanel>
            <TabPanel p="0px" mt="10px">
              {<SellOrders />}
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Flex>
  );
};

export default Orders;
