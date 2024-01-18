import { AddIcon, HamburgerIcon } from "@chakra-ui/icons";
import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Notification = () => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<HamburgerIcon />}
        variant="outline"
      />
      <MenuList>
        <MenuItem>
          <Link to="/app/orders">
            <IconButton bg="none" aria-label="Order" icon={<AddIcon />} />
            Order
          </Link>
        </MenuItem>
        <MenuItem icon={<AddIcon />}>New Window</MenuItem>
        <MenuItem icon={<AddIcon />}>Open Closed Tab</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default Notification;
