import {
  Box,
  Button,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
  Flex,
  Input,
  Icon,
  Divider,
  Heading,
} from "@chakra-ui/react";
import Card from "../../../../components/Card/Card";
import AddUser from "./AddUser";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../actions";

const UsersList = () => {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state?.users?.userData);

  useEffect(() => {
    dispatch(actions.fetchUserRequest());
  }, [dispatch]);

  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10; // Set the number of users per page
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const [selectedUser, setSelectedUser] = useState(null);

  // Calculate current users to display based on pagination
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = userList.slice(indexOfFirstUser, indexOfLastUser);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Flex w="100%" minH="90vH" overflow="auto" direction="column">
      <Box w="100%">
        <Heading align="left" as="h4" size="md" mb="10px">
          Users
        </Heading>
      </Box>
      <Card p="2" w="100%" boxShadow="md" borderRadius="md" borderWidth="1px">
        <Box align="start" w="100%" direction="row">
          <Input
            w="200px"
            p={2}
            mr="10px"
            type="text"
            placeholder="Name..."
            // value={searchText}
            // onChange={handleSearchChange}
          />
          <Input
            w="200px"
            p={2}
            mr="10px"
            type="text"
            placeholder="Email..."
            // value={searchText}
            // onChange={handleSearchChange}
          />
          <Input
            w="200px"
            p={2}
            mr="10px"
            type="text"
            placeholder="Role..."
            // value={searchText}
            // onChange={handleSearchChange}
          />
          <Input
            w="200px"
            p={2}
            mr="10px"
            type="text"
            placeholder="Status.."
            // value={searchText}
            // onChange={handleSearchChange}
          />
          <Input
            w="200px"
            p={2}
            mr="10px"
            type="text"
            placeholder="Date.."
            // value={searchText}
            // onChange={handleSearchChange}
          />
          <Button
            fontWeight="normal"
            borderRadius="md"
            bg="#0648b3"
            color="white"
            size="sm"
            onClick={onOpen}
          >
            Add User
          </Button>
        </Box>
        <AddUser isOpen={isOpen} onClose={onClose} />
        <Divider mt="5px" />
        <Table mt="5px" variant="simple" size="sm">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>Role</Th>
              <Th>Domain</Th>
              <Th>Plan Type</Th>
              <Th>Status</Th>
              <Th>Updated Date</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {currentUsers.map((user) => (
              <Tr key={user?.id}>
                <Td>{user?.name}</Td>
                <Td>{user?.email}</Td>
                <Td>{user?.role}</Td>
                <Td>{user?.domain}</Td>
                <Td>{user?.subscriptionType}</Td>
                <Td>{user?.status}</Td>
                <Td>{user?.updatedDate}</Td>
                <Td>
                  <Flex direction={{ sm: "column", md: "row" }} align="center">
                    <Button p="0px" bg="transparent">
                      <Flex color={"gray.900"} cursor="pointer" align="center">
                        <Icon as={FaPencilAlt} me="4px" />
                      </Flex>
                    </Button>
                    <Button
                      p="0px"
                      bg="transparent"
                      mb={{ sm: "10px", md: "0px" }}
                      me={{ md: "12px" }}
                    >
                      <Flex
                        color="red.500"
                        cursor="pointer"
                        align="center"
                        p="12px"
                      >
                        <Icon as={FaTrashAlt} me="4px" />
                      </Flex>
                    </Button>
                  </Flex>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
        <Box align="start" mt={1}>
          {Array.from({
            length: Math.ceil(userList.length / usersPerPage),
          }).map((_, index) => (
            <Button
              colorScheme="gray"
              borderRadius="full"
              key={index}
              onClick={() => paginate(index + 1)}
              mx={1}
            >
              {index + 1}
            </Button>
          ))}
        </Box>
      </Card>
    </Flex>
  );
};

export default UsersList;
