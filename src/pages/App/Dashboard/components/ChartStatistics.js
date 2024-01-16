import { Flex, Progress, Text, useColorModeValue } from "@chakra-ui/react";
import IconBox from "../../../../components/Icons/IconBox";
import React from "react";

const ChartStatistics = ({ title, amount, icon, percentage }) => {
  const iconTeal = useColorModeValue("#0648b3", "#0648b3");
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Flex direction="column">
      <Flex alignItems="center">
        <IconBox as="box" h={"30px"} w={"30px"} bg={iconTeal} me="6px">
          {icon}
        </IconBox>
        <Text fontSize="sm" color="gray.400" fontWeight="semibold">
          {title}
        </Text>
      </Flex>
      <Text fontSize="lg" color={textColor} fontWeight="bold" mb="6px" my="6px">
        {amount}
      </Text>
      <Progress color="#0648b3" borderRadius="md" h="5px" value={percentage} />
    </Flex>
  );
};

export default ChartStatistics;
