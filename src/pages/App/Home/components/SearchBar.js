import React, { useState } from "react";
import {
  Input,
  InputGroup,
  IconButton,
  VStack,
  Box,
  InputLeftElement,
  Button,
  Wrap,
  WrapItem,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Divider,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
// import SwipeableViews from "react-swipeable-views";
import { ChevronDownIcon } from "@chakra-ui/icons";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Flex
      justify={{ base: "center", sm: "center", md: "start", xl: "center" }}
      align={"center"}
      mb='20px'
    >
      <VStack spacing={2} align="stretch"  w='100%'>
        <Box display="flex" alignItems="center">
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <IconButton
                borderRadius="md"
                aria-label="Search"
                background={"transparent"}
                icon={<FaSearch size='20px' />}
              />
            </InputLeftElement>
            <Input
              borderRadius="md"
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearchChange}
              h='50px'
            />
          </InputGroup>
        </Box>
      </VStack>
    </Flex>
  );
};

export default SearchBar;
