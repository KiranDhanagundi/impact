import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import {
  FiBell,
  FiLogOut,
  FiMoon,
  FiSettings,
  FiSun,
  FiUser,
} from "react-icons/fi";

import {
  FaStore,
  FaList,
  FaCartPlus,
  FaRegListAlt,
  FaTools,
  FaHome,
} from "react-icons/fa";

import {
  MdOutlineDashboard,
  MdOutlineSubscriptions,
  MdOutlinePayment,
} from "react-icons/md";
import { Link } from "react-router-dom";
import Logo from "../../pages/Public/components/Logo.js";
import routes from "../../routes.js";
import AppSidebar from "./AppSidebar.js";

const AppNavbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      align="center"
      display="flex"
      position={"fixed"}
      bg="white"
      as="nav"
      justify="space-between"
      shadow="md"
      w={{
        base: "100%",
        // xl: "calc(100% - 610px)",
      }}
      lineHeight="12px"
      minH="50px"
    >
      <AppSidebar routes={routes} />
      <Flex align="center">
        <Box as="a" href={"/home"}>
          <Logo w="100px" ml="2px" color="#0648b3" />
        </Box>
      </Flex>
      <Spacer />
      <Link to="/app/notifications">
        <IconButton
          bg="none"
          color={"black"}
          aria-label="Notifications"
          icon={<FiBell />}
        />
      </Link>
      {/* <IconButton
        bg="none"
        color={"black"}
        aria-label="Toggle dark and light mode"
        icon={colorMode === "light" ? <FiMoon /> : <FiSun />}
        onClick={toggleColorMode}
      /> */}
      <Link to="/app/cart">
        <IconButton bg="" aria-label="Cart" icon={<FaCartPlus />} />
      </Link>
      <Menu mr="20px" minH="100px">
        <MenuButton
          as={Button}
          rounded="full"
          variant="button"
          cursor="pointer"
          minW={0}
        >
          <Flex color="white" align="center">
            <Avatar size="sm" src="https://bit.ly/sage-adebayo" />
            <Box color="gray.700" mr="10px" ml={2}>
              Elon Musk
            </Box>
          </Flex>
        </MenuButton>
        <MenuList p="0px" mr="20px">
          <MenuItem p="0px">
            <Link to="/app/profile">
              <IconButton bg="none" aria-label="Profile" icon={<FiUser />} />
              Profile
            </Link>
          </MenuItem>
          <MenuItem p="0px">
            <Link to="/app/products">
              <IconButton bg="none" aria-label="Products" icon={<FaStore />} />
              Products
            </Link>
          </MenuItem>
          <MenuItem p="0px">
            <Link to="/app/dashboard">
              <IconButton
                bg="none"
                aria-label="Dashboard"
                icon={<MdOutlineDashboard />}
              />
              Dashboard
            </Link>
          </MenuItem>
          <MenuItem p="0px">
            <Link to="/app/cart">
              <IconButton bg="none" aria-label="Cart" icon={<FaCartPlus />} />
              Cart
            </Link>
          </MenuItem>
          <Divider />
          <MenuItem p="0px">
            <Link to="/app/subscriptions">
              <IconButton
                bg="none"
                aria-label="Subscription"
                icon={<MdOutlineSubscriptions />}
              />
              Subsciption
            </Link>
          </MenuItem>
          <MenuItem p="0px">
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
          <MenuItem p="0px">
            <Link to="/app/orders">
              <IconButton
                bg="none"
                aria-label="Order"
                icon={<FaRegListAlt />}
              />
              Order
            </Link>
          </MenuItem>
          <MenuItem p="0px">
            <Link to="/app/users">
              <IconButton bg="none" aria-label="User" icon={<FaList />} />
              Users
            </Link>
          </MenuItem>
          <MenuItem p="0px">
            <Link to="/app/payments">
              <IconButton
                bg="none"
                aria-label="Payments"
                icon={<MdOutlinePayment />}
              />
              Payments
            </Link>
          </MenuItem>
          <MenuItem p="0px">
            <Link to="/app/access">
              <IconButton bg="none" aria-label="Access" icon={<FaTools />} />
              Access
            </Link>
          </MenuItem>
          <Divider />
          <MenuItem p="0px">
            <Link to="/home">
              <IconButton bg="none" aria-label="Logout" icon={<FiLogOut />} />
              Logout
            </Link>
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default AppNavbar;
