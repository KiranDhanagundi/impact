/*eslint-disable*/
import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  Flex,
  IconButton,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import IconBox from "../Icons/IconBox";
import { Separator } from "../Separator/Separator";
import { SideBarAds } from "../../utils/SideBarAds";

const AppSidebar = (props) => {
  const mainPanel = React.useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();
  let location = useLocation();

  const activeRoute = (routeName) => {
    return location.pathname === routeName ? "active" : "";
  };

  const createLinks = (routes) => {
    const activeBg = useColorModeValue("white", "gray.700");
    const inactiveBg = useColorModeValue("white", "gray.700");
    const activeColor = useColorModeValue("gray.700", "white");
    const inactiveColor = useColorModeValue("gray.400", "gray.400");

    return routes.map((prop, key) => {
      if (prop.redirect) {
        return null;
      }
      if (prop.category) {
        var st = {};
        st[prop["state"]] = !state[prop.state];
        return (
          <div key={prop.name}>
            <Text
              color={activeColor}
              fontWeight="bold"
              mb={{
                xl: "12px",
              }}
              mx="auto"
              ps={{
                sm: "10px",
                xl: "16px",
              }}
              py="8px"
            >
              {document.documentElement.dir === "rtl"
                ? prop.rtlName
                : prop.name}
            </Text>
            {createLinks(prop.views)}
          </div>
        );
      }
      return (
        <NavLink to={prop.layout + prop.path} key={prop.name}>
          {activeRoute(prop.layout + prop.path) === "active" ? (
            <Button
              boxSize="initial"
              justifyContent="flex-start"
              alignItems="center"
              bg={activeBg}
              mb={{
                xl: "12px",
              }}
              mx={{
                xl: "auto",
              }}
              ps={{
                sm: "10px",
                xl: "16px",
              }}
              py="8px"
              borderRadius="10px"
              _hover="none"
              w="100%"
              _active={{
                bg: "inherit",
                transform: "none",
                borderColor: "transparent",
              }}
              _focus={{
                boxShadow: "none",
              }}
            >
              <Flex>
                {typeof prop.icon === "string" ? (
                  <Icon>{prop.icon}</Icon>
                ) : (
                  <IconBox
                    bg="#0648b3"
                    color="white"
                    h="30px"
                    w="30px"
                    me="12px"
                  >
                    {prop.icon}
                  </IconBox>
                )}
                <Text color={activeColor} my="auto" fontSize="sm">
                  {document.documentElement.dir === "rtl"
                    ? prop.rtlName
                    : prop.name}
                </Text>
              </Flex>
            </Button>
          ) : (
            <Button
              boxSize="initial"
              justifyContent="flex-start"
              alignItems="center"
              bg="transparent"
              mb={{
                xl: "12px",
              }}
              mx={{
                xl: "auto",
              }}
              py="8px"
              ps={{
                sm: "10px",
                xl: "16px",
              }}
              borderRadius="10px"
              _hover="none"
              w="100%"
              _active={{
                bg: "inherit",
                transform: "none",
                borderColor: "transparent",
              }}
              _focus={{
                boxShadow: "none",
              }}
            >
              <Flex>
                {typeof prop.icon === "string" ? (
                  <Icon>{prop.icon}</Icon>
                ) : (
                  <IconBox
                    bg={inactiveBg}
                    color="#0648b3"
                    h="30px"
                    w="30px"
                    me="12px"
                  >
                    {prop.icon}
                  </IconBox>
                )}
                <Text color={inactiveColor} my="auto" fontSize="sm">
                  {document.documentElement.dir === "rtl"
                    ? prop.rtlName
                    : prop.name}
                </Text>
              </Flex>
            </Button>
          )}
        </NavLink>
      );
    });
  };

  const { logoText, routes, ...rest } = props;

  var links = <>{createLinks(routes)}</>;

  return (
    <Flex display="flex" ref={mainPanel} alignItems="center">
      <IconButton
        // disabled="true"
        color={"black"}
        bg="none"
        size="lg"
        aria-label="Menu"
        icon={<HamburgerIcon />}
        onClick={onOpen}
        mr="1px"
      />
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerContent mt="50px" w="220px" maxW="220px">
          <DrawerBody
            overflow={{ md: "hidden", sm: "auto" }}
            mt="10px"
            maxW="220px"
            pr="0px"
          >
            <Box
              maxW="100%"
              h="90vh"
              overflowY="auto"
              css={{
                "&::-webkit-scrollbar": {
                  width: "4px",
                },
                "&::-webkit-scrollbar-track": {
                  width: "2px",
                },
                "&::-webkit-scrollbar-thumb": {
                  background: "lightgray",
                  borderRadius: "24px",
                },
              }}
            >
              <Stack direction="column" mb="10px">
                <Box>{links}</Box>
              </Stack>
              <Separator></Separator>
              <SideBarAds></SideBarAds>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};
export default AppSidebar;
