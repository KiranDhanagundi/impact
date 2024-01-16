import React from "react";
import { Flex } from "@chakra-ui/react";

export default function IconBox(props) {
  const { children, ...rest } = props;
  const styles = {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "12px",
  };
  return (
    <Flex {...styles} {...rest}>
      {children}
    </Flex>
  );
}
