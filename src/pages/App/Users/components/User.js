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
} from "@chakra-ui/react";
import Card from "../../../../components/Card/Card";
import AddUser from "./AddUser";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../actions";

const usersData = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    role: "SperAdmin",
    status: "Active",
    updatedDate: "1-1-2024",
  },
  {
    id: 2,
    name: "John Doe",
    email: "john@example.com",
    role: "Admin",
    status: "Active",
    updatedDate: "1-1-2024",
  },
  {
    id: 3,
    name: "John Doe",
    email: "john@example.com",
    role: "User",
    status: "Active",
    updatedDate: "1-1-2024",
  },
  {
    id: 4,
    name: "John Doe",
    email: "johnDoneabc@example.com",
    role: "SperAdmin",
    status: "Active",
    updatedDate: "1-1-2024",
  },
  {
    id: 5,
    name: "John Doe",
    email: "john@example.com",
    role: "SperAdmin",
    status: "Active",
    updatedDate: "1-1-2024",
  },
  {
    id: 6,
    name: "John Doe",
    email: "john@example.com",
    role: "SperAdmin",
    status: "Active",
    updatedDate: "1-1-2024",
  },
  {
    id: 7,
    name: "John Doe",
    email: "john@example.com",
    role: "SperAdmin",
    status: "Active",
    updatedDate: "1-1-2024",
  },
  {
    id: 8,
    name: "John Doe",
    email: "john@example.com",
    role: "SperAdmin",
    status: "Active",
    updatedDate: "1-1-2024",
  },
  {
    id: 9,
    name: "John Doe",
    email: "john@example.com",
    role: "SperAdmin",
    status: "Active",
    updatedDate: "1-1-2024",
  },
  {
    id: 10,
    name: "John Doe",
    email: "john@example.com",
    role: "SperAdmin",
    status: "Active",
    updatedDate: "1-1-2024",
  },
  {
    id: 11,
    name: "John Doe",
    email: "john@example.com",
    role: "SperAdmin",
    status: "Active",
    updatedDate: "1-1-2024",
  },
  {
    id: 12,
    name: "John Doe",
    email: "john@example.com",
    role: "SperAdmin",
    status: "Active",
    updatedDate: "1-1-2024",
  },
  {
    id: 13,
    name: "John Doe",
    email: "john@example.com",
    role: "SperAdmin",
    status: "Active",
    updatedDate: "1-1-2024",
  },
  {
    id: 14,
    name: "John Doe",
    email: "john@example.com",
    role: "SperAdmin",
    status: "Active",
    updatedDate: "1-1-2024",
  },
  {
    id: 15,
    name: "John Doe",
    email: "john@example.com",
    role: "SperAdmin",
    status: "Active",
    updatedDate: "1-1-2024",
  },
  {
    id: 16,
    name: "John Doe",
    email: "john@example.com",
    role: "SperAdmin",
    status: "Active",
    updatedDate: "1-1-2024",
  },
  {
    id: 17,
    name: "John Doe",
    email: "john@example.com",
    role: "SperAdmin",
    status: "Active",
    updatedDate: "1-1-2024",
  },
  {
    id: 18,
    name: "John Doe",
    email: "john@example.com",
    role: "SperAdmin",
    status: "Active",
    updatedDate: "1-1-2024",
  },
];

const UsersList = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(actions.fetchUserRequest());
  }, [dispatch]);

  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10; // Set the number of users per page
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedUser, setSelectedUser] = useState(null);

  // Calculate current users to display based on pagination
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = usersData.slice(indexOfFirstUser, indexOfLastUser);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Flex mt="10px" w="auto" minH="90vH" overflow="auto">
      <Card borderWidth={"1px"} w="auto">
        <Box w="auto">
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
            borderRadius="md"
            bg="#0648b3"
            color="white"
            px={2}
            h={8}
            mr="0px"
            size="sm"
            w="90px"
            onClick={onOpen}
          >
            Add User
          </Button>
        </Box>
        <AddUser isOpen={isOpen} onClose={onClose} />
        <Table variant="simple" size="sm">
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>Role</Th>
              <Th>Status</Th>
              <Th>Updated Date</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {currentUsers.map((user) => (
              <Tr key={user.id}>
                <Td>{user.id}</Td>
                <Td>{user.name}</Td>
                <Td>{user.email}</Td>
                <Td>{user.role}</Td>
                <Td>{user.status}</Td>
                <Td>{user.updatedDate}</Td>
                <Td>
                  <Flex
                    direction={{ sm: "column", md: "row" }}
                    align="flex-start"
                  >
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
        <Box mt={2}>
          {Array.from({
            length: Math.ceil(usersData.length / usersPerPage),
          }).map((_, index) => (
            <Button key={index} onClick={() => paginate(index + 1)} mx={1}>
              {index + 1}
            </Button>
          ))}
        </Box>
      </Card>
    </Flex>
  );
};

export default UsersList;
