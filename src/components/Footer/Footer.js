import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
  Flex,
} from "@chakra-ui/react";
import Logo from "../../pages/Public/components/Logo";

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      w="100%"
      maxW={{ xl: "1300px", lg: "960px" }}
    >
      <Box
        mb="0px"
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={2}
          direction={{ base: "column", md: "row" }}
          spacing={2}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Text>© 2023 Impact . All rights reserved</Text>
          <Flex h="20px" align="center">
            <Box as="a" href={"/app/public"}>
              <Logo w="100px" color="#0648b3" />
            </Box>
          </Flex>
          <Stack direction={"row"} spacing={4}>
            <Box as="a" href={"/app/public"}>
              Home
            </Box>
            <Box as="a" href={"/app/subscriptions"}>
              How It Works
            </Box>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
