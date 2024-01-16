import {
  Avatar,
  Box,
  Button,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FiLogOut } from "react-icons/fi";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
  return (
    <Text
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 8 }}
      display="block"
      {...rest}
    >
      <Link to={to}>{children}</Link>
    </Text>
  );
};

const CloseIcon = () => (
  <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <title>Close</title>
    <path d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z" />
  </svg>
);

const MenuIcon = () => (
  <svg width="24px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);

const Header = (props) => {
  const [show, setShow] = React.useState(false);
  const toggleMenu = () => setShow(!show);

  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:5000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          console.log(response);
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          setUser(resObject.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);

  console.log("user info", user);

  const signOut = (e) => {
    console.log("signed Out");
    sessionStorage.clear();
    setUser(null);
  };

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      shadow="md"
      w="100%"
      lineHeight="12px"
      minH="50px"
      mb={1}
      p={1}
      bg="white"
      color="gray.900"
      {...props}
    >
      <Flex ml="10px" align="center">
        <Box as="a" href={"/home"}>
          <Logo
            w="100px"
            color={["primary.500", "primary.500", "primary.500", "primary.500"]}
          />
        </Box>
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={toggleMenu}>
        {show ? <CloseIcon /> : <MenuIcon />}
      </Box>

      <Box
        display={{ base: show ? "block" : "none", md: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}
      >
        <Flex
          align="center"
          justify={["center", "space-between", "flex-end", "flex-end"]}
          direction={["column", "row", "row", "row"]}
          pt={[4, 4, 0, 0]}
        >
          <MenuItem mr="5px" to="/app/subscriptions">
            How It works |
          </MenuItem>
          <MenuItem mr="5px" to="/app/home">
            Explore
          </MenuItem>
          {!user ? (
            <MenuItem to="/auth/signin">
              <Button
                size="sm"
                borderRadius="md"
                color="white"
                bg="primary.500"
                _hover={{
                  bg: ["primary.500"],
                }}
              >
                Sign In
              </Button>
            </MenuItem>
          ) : (
            ""
          )}

          {/* {!user ? (
            <MenuItem to="/auth/signup">
              <Button
                size="sm"
                borderRadius="md"
                color={["primary.100", "primary.100", "white", "white"]}
                bg="primary.500"
                _hover={{
                  bg: ["primary.500"],
                }}
              >
                Sign Up
              </Button>
            </MenuItem>
          ) : (
            ""
          )} */}

          {user ? (
            <Menu mr="5px" isLast>
              <MenuButton
                as={Button}
                rounded="full"
                variant="button"
                cursor="pointer"
                minW={0}
              >
                <Flex color="white" align="center">
                  <Avatar size="sm" src="https://bit.ly/sage-adebayo" />
                  <Box color="black" mr="5px" ml="5px">
                    Elon Musk
                  </Box>
                </Flex>
              </MenuButton>
              <MenuList p="0px" color="black">
                <MenuItem p="2px">
                  <Link to="/auth/signin">
                    <IconButton
                      bg="none"
                      aria-label="Logout"
                      icon={<FiLogOut />}
                    />
                    Logout
                  </Link>
                </MenuItem>
              </MenuList>
            </Menu>
          ) : (
            ""
          )}
        </Flex>
      </Box>
    </Flex>
  );
};

export default Header;
