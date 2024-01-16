import React from "react";
import { Button, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import Card from "../../../../components/Card/Card";
import CardBody from "../../../../components/Card/CardBody";
import CardHeader from "../../../../components/Card/CardHeader";
import InvoicesRow from "../../../../components/Tables/InvoicesRow";

const Invoices = ({ title, data }) => {
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Card
      p="22px"
      my={{ sm: "24px", lg: "0px" }}
      ms={{ sm: "0px", lg: "24px" }}
    >
      <CardHeader>
        <Flex justify="space-between" align="center" mb="1rem" w="100%">
          <Text fontSize="lg" color={textColor} fontWeight="bold">
            {title}
          </Text>
          <Button size="md" bg="#0648b3" color="white" fontSize="sm">
            View All
          </Button>
        </Flex>
      </CardHeader>
      <CardBody>
        <Flex direction="column" w="100%">
          {data.map((row) => {
            return (
              <InvoicesRow
                date={row.date}
                code={row.code}
                price={row.price}
                logo={row.logo}
                format={row.format}
              />
            );
          })}
        </Flex>
      </CardBody>
    </Card>
  );
};

export default Invoices;
