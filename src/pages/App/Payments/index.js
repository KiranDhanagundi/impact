import { Box, Flex, Grid, Icon } from "@chakra-ui/react";
import BackgroundCard1 from "../../../assets/img/BackgroundCard1.png";
import { MastercardIcon, VisaIcon } from "../../../components/Icons/Icons";
import React from "react";
import { RiMastercardFill } from "react-icons/ri";
import CreditCard from "./components/CreditCard";
import PaymentMethod from "./components/PaymentMethod";

function Payments() {
  return (
    <Flex direction="column" pt={{ base: "10px", md: "10px" }}>
      <Grid templateColumns={{ sm: "1fr", lg: "2fr 1.2fr" }} templateRows="1fr">
        <Box>
          <Grid
            templateColumns={{
              sm: "1fr",
              md: "1fr 1fr",
              xl: "1fr 1fr 1fr 1fr",
            }}
            templateRows={{ sm: "auto auto auto", md: "1fr auto", xl: "1fr" }}
            gap="26px"
          >
            <CreditCard
              backgroundImage={BackgroundCard1}
              title={"Kiran"}
              number={"7812 2139 0823 XXXX"}
              validity={{
                name: "VALID THRU",
                data: "05/24",
              }}
              cvv={{
                name: "CVV",
                code: "09x",
              }}
              icon={
                <Icon
                  as={RiMastercardFill}
                  w="48px"
                  h="auto"
                  color="gray.400"
                />
              }
            />
          </Grid>
          <PaymentMethod
            title={"Payment Method"}
            mastercard={{
              icon: <MastercardIcon w="100%" h="100%" />,
              number: "7812 2139 0823 XXXX",
            }}
            visa={{
              icon: <VisaIcon w="100%" h="100%" />,
              number: "7812 2139 0823 XXXX",
            }}
          />
        </Box>
      </Grid>
    </Flex>
  );
}

export default Payments;
