import {
  Box,
  Button,
  Divider,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  // MenuItem,
  MenuList,
  Spacer,
  Text,
  Avatar,
} from "@chakra-ui/react";
import React from "react";
import { FiBell, FiLogOut, FiSettings, FiUser } from "react-icons/fi";
import { css } from "@emotion/react";

import {
  FaStore,
  FaList,
  FaCartPlus,
  FaRegListAlt,
  FaTools,
  FaBlog,
} from "react-icons/fa";

import {
  MdOutlineDashboard,
  MdOutlineSubscriptions,
  MdOutlinePayment,
} from "react-icons/md";
import { Link } from "react-router-dom";
import Logo from "../../pages/Public/components/Logo.js";
import { HamburgerIcon, SmallCloseIcon } from "@chakra-ui/icons";
// import routes from "../../routes.js";
// import AppSidebar from "./AppSidebar.js";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../pages/Auth/actions.js";

const AppNavbar = () => {
  const [show, setShow] = React.useState(false);
  const toggleMenu = () => setShow(!show);
  const dispatch = useDispatch();
  const user = useSelector((state) => state?.auth?.userDetails);

  const customScrollbar = css`
    ::-webkit-scrollbar {
      width: 4px; /* Set the width of the scrollbar */
    }
    ::-webkit-scrollbar-thumb {
      background-color: lightgray; /* Set the color of the scrollbar thumb */
      border-radius: 4px; /* Set the border radius of the scrollbar thumb */
    }
  `;

  const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
    return (
      <Text
        mb={{ base: isLast ? 0 : 8, sm: 0 }}
        mr={{ base: 0, sm: isLast ? 0 : 5 }}
        display="block"
        {...rest}
      >
        <Link to={to}>{children}</Link>
      </Text>
    );
  };

  const handleLogout = () => {
    dispatch(actions.clearUserDetails());
    window.location.href = "/home";
  };

  return (
    <Box position="fixed" w="100%">
      <Flex
        bg="white"
        as="nav"
        shadow="md"
        align="center"
        maxW={{ xl: "1300px" }}
        mx="auto"
        justify="space-between"
        lineHeight="12px"
        minH="50px"
      >
        {/* <AppSidebar routes={routes} /> */}
        <Flex ml="10px" align="center">
          <Box display={{ base: "block", md: "none" }} onClick={toggleMenu}>
            {show ? <SmallCloseIcon /> : <HamburgerIcon size="2lg" h="30px" />}
          </Box>
          <Box as="a" href={"/app/public"}>
            <Logo w="100px" ml="10px" color="#0648b3" />
          </Box>
        </Flex>
        <Spacer />
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
          </Flex>
        </Box>
        <Flex align="center">
          {user ? (
            <Link to="/app/notifications">
              <IconButton
                bg="none"
                color={"black"}
                aria-label="Notifications"
                icon={<FiBell />}
              />
            </Link>
          ) : (
            ""
          )}
          <Link to="/app/cart">
            <IconButton bg="none" aria-label="Cart" icon={<FaCartPlus />} />
          </Link>
          {!user ? (
            <MenuItem to="/app/signin">
              <Button
                fontWeight="normal"
                size="sm"
                borderRadius="md"
                color="white"
                bg="#0648b3"
              >
                Sign In
              </Button>
            </MenuItem>
          ) : (
            <Menu>
              <MenuButton
                as={Button}
                rounded="full"
                variant="button"
                cursor="pointer"
              >
                <Flex color="white" align="center">
                  <Avatar
                    size="sm"
                    name={user?.name}
                    src={user?.profileImage}
                  />
                  <Box color="gray.700" ml={2}>
                    {user?.name}
                  </Box>
                </Flex>
              </MenuButton>
              <MenuList
                p="0px"
                maxHeight="400px"
                overflowY="auto"
                css={customScrollbar}
              >
                <MenuItem _hover={{ bg: "gray.100" }}>
                  <Link to="/app/profile">
                    <IconButton
                      bg="none"
                      aria-label="Profile"
                      icon={<FiUser />}
                    />
                    Profile
                  </Link>
                </MenuItem>
                <MenuItem _hover={{ bg: "gray.100" }}>
                  <Link to="/app/products">
                    <IconButton
                      bg="none"
                      aria-label=" My Products"
                      icon={<FaStore />}
                    />
                    My Products
                  </Link>
                </MenuItem>
                <MenuItem _hover={{ bg: "gray.100" }}>
                  <Link to="/app/blogs">
                    <IconButton
                      bg="none"
                      aria-label="Blogs"
                      icon={<FaBlog />}
                    />
                    My Blogs
                  </Link>
                </MenuItem>
                <MenuItem _hover={{ bg: "gray.100" }}>
                  <Link to="/app/dashboard">
                    <IconButton
                      bg="none"
                      aria-label="Dashboard"
                      icon={<MdOutlineDashboard />}
                    />
                    Dashboard
                  </Link>
                </MenuItem>
                <MenuItem _hover={{ bg: "gray.100" }}>
                  <Link to="/app/cart">
                    <IconButton
                      bg="none"
                      aria-label="Cart"
                      icon={<FaCartPlus />}
                    />
                    Cart
                  </Link>
                </MenuItem>
                <Divider />
                <MenuItem _hover={{ bg: "gray.100" }}>
                  <Link to="/app/subscriptions">
                    <IconButton
                      bg="none"
                      aria-label="Subscription"
                      icon={<MdOutlineSubscriptions />}
                    />
                    Subscription
                  </Link>
                </MenuItem>
                <MenuItem _hover={{ bg: "gray.100" }}>
                  <Link to="/app/settings">
                    <IconButton
                      bg="none"
                      aria-label="Settings"
                      icon={<FiSettings />}
                    />
                    Settings
                  </Link>
                </MenuItem>
                <Divider />
                <MenuItem _hover={{ bg: "gray.100" }}>
                  <Link to="/app/orders">
                    <IconButton
                      bg="none"
                      aria-label="Orders"
                      icon={<FaRegListAlt />}
                    />
                    Orders
                  </Link>
                </MenuItem>
                <MenuItem _hover={{ bg: "gray.100" }}>
                  <Link to="/app/users">
                    <IconButton bg="none" aria-label="User" icon={<FaList />} />
                    Users
                  </Link>
                </MenuItem>
                <MenuItem _hover={{ bg: "gray.100" }}>
                  <Link to="/app/payments">
                    <IconButton
                      bg="none"
                      aria-label="Payments"
                      icon={<MdOutlinePayment />}
                    />
                    Payments
                  </Link>
                </MenuItem>
                <MenuItem _hover={{ bg: "gray.100" }}>
                  <Link to="/app/access">
                    <IconButton
                      bg="none"
                      aria-label="Access"
                      icon={<FaTools />}
                    />
                    Access
                  </Link>
                </MenuItem>
                <Divider />
                <MenuItem _hover={{ bg: "gray.100" }}>
                  <Link to="/home" onClick={handleLogout}>
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
          )}
        </Flex>
      </Flex>
    </Box>
  );
};

export default AppNavbar;
