import React from "react";
import {
  Button,
  Flex,
  Icon,
  Spacer,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Card from "../../../../components/Card/Card";
import CardBody from "../../../../components/Card/CardBody";
import CardHeader from "../../../../components/Card/CardHeader";
import IconBox from "../../../../components/Icons/IconBox";

import { FaPencilAlt } from "react-icons/fa";

const PaymentMethod = ({ title, mastercard, visa }) => {
  const textColor = useColorModeValue("gray.700", "white");
  const borderColor = useColorModeValue("#dee2e6", "gray.500");

  return (
    <Card p="16px" mt="24px">
      <CardHeader>
        <Flex justify="space-between" align="center" minHeight="60px" w="100%">
          <Text fontSize="lg" color={textColor} fontWeight="bold">
            {title}
          </Text>
          <Button size="md" bg={"#0648b3"} color="white" fontSize="sm">
            Add New Card
          </Button>
        </Flex>
      </CardHeader>
      <CardBody>
        <Flex
          direction={{ sm: "column", md: "row" }}
          align="center"
          w="100%"
          justify="center"
          py="1rem"
        >
          <Flex
            p="1rem"
            bg="transparent"
            borderRadius="15px"
            width="100%"
            border="1px solid"
            borderColor={borderColor}
            align="center"
            mb={{ sm: "24px", md: "0px" }}
            me={{ sm: "0px", md: "24px" }}
          >
            <IconBox me="10px" w="25px" h="22px">
              {mastercard.icon}
            </IconBox>
            <Text color="gray.400" fontSize="md" fontWeight="semibold">
              {mastercard.number}
            </Text>
            <Spacer />
            <Button
              p="0px"
              bg="transparent"
              w="16px"
              h="16px"
              variant="no-hover"
            >
              <Icon as={FaPencilAlt} />
            </Button>
          </Flex>
          <Flex
            p="16px"
            bg="transparent"
            borderRadius="15px"
            width="100%"
            border="1px solid"
            borderColor={borderColor}
            align="center"
          >
            <IconBox me="10px" w="25px" h="25px">
              {visa.icon}
            </IconBox>
            <Text color="gray.400" fontSize="md" fontWeight="semibold">
              {visa.number}
            </Text>
            <Spacer />
            <Button
              p="0px"
              bg="transparent"
              w="16px"
              h="16px"
              variant="no-hover"
            >
              <Icon as={FaPencilAlt} />
            </Button>
          </Flex>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default PaymentMethod;
