import React from "react";
import { Flex, Text, useColorModeValue } from "@chakra-ui/react";
import Card from "../../../../components/Card/Card";
import CardBody from "../../../../components/Card/CardBody";
import IconBox from "../../../../components/Icons/IconBox";
import { Separator } from "../../../../components/Separator/Separator";

const PaymentStatistics = ({ icon, title, description, amount }) => {
  const iconTeal = useColorModeValue("#0648b3", "#0648b3");
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Card p="16px" display="flex" align="center" justify="center">
      <CardBody>
        <Flex direction="column" align="center" w="100%" py="14px">
          <IconBox as="box" h={"60px"} w={"60px"} bg={iconTeal}>
            {icon}
          </IconBox>
          <Flex
            direction="column"
            m="14px"
            justify="center"
            textAlign="center"
            align="center"
            w="100%"
          >
            <Text fontSize="md" color={textColor} fontWeight="bold">
              {title}
            </Text>
            <Text
              mb="24px"
              fontSize="xs"
              color="gray.400"
              fontWeight="semibold"
            >
              {description}
            </Text>
            <Separator />
          </Flex>
          <Text fontSize="lg" color={textColor} fontWeight="bold">
            {`%${amount}`}
          </Text>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default PaymentStatistics;
