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

  const categories = [
    "All",
    "Technology",
    "Art",
    "Books",
    "News",
    "Business",
    "Development",
    "Media",
    "Dev",
  ];

  return (
    <Flex
      justify={{ base: "center", sm: "center", md: "start", xl: "center" }}
      align={"center"}
    >
      <VStack spacing={2} align="stretch" ml="5px" mb="10px">
        <Box display="flex" alignItems="center">
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <IconButton
                borderRadius="md"
                aria-label="Search"
                background={"transparent"}
                icon={<FaSearch />}
              />
            </InputLeftElement>
            <Input
              borderRadius="md"
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearchChange}
              mr="10px"
            />
          </InputGroup>
        </Box>
        <Flex>
          <Menu p="0px">
            <MenuButton
              as={Button}
              size="sm"
              rightIcon={<ChevronDownIcon />}
              mr="10px"
            >
              Sort
            </MenuButton>
            <MenuList>
              <MenuItem>Price: Low to High</MenuItem>
              <Divider />
              <MenuItem>Price: High to Low</MenuItem>
              <Divider />
            </MenuList>
          </Menu>
          <Box
            Direction="row"
            display="flex"
            alignItems="center"
            overflow="hidden"
          >
            {/* <SwipeableViews enableMouseEvents> */}
            <Wrap spacing={2}>
              {categories.map((category, index) => (
                <WrapItem key={index}>
                  <Button size="sm" colorScheme="gray">
                    {category}
                  </Button>
                </WrapItem>
              ))}
            </Wrap>
            {/* </SwipeableViews> */}
          </Box>
        </Flex>
      </VStack>
    </Flex>
  );
};

export default SearchBar;
