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
  Icon,
  Text,
  Divider,
  Spacer,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import { useState } from "react";
import Card from "../../../../components/Card/Card";
import { FaPencilAlt, FaTrashAlt, FaPlus } from "react-icons/fa";
import Resource from "./Resource";
import AddRole from "./AddAccess";

const rolesData = [
  {
    id: 1,
    name: "SuperAdmin",
    permissions: ["createUser", "editUser", "deleteUser", "viewDashboard"],
  },
  { id: 2, name: "Admin", permissions: ["editUser"] },
  { id: 2, name: "PaidUser", permissions: ["editUser"] },
  { id: 2, name: "UnpaidUser", permissions: ["editUser"] },
];

const AccessManagement = () => {
  const [selectedRole, setSelectedRole] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isAddRoleModalOpen, setIsAddRoleModalOpen] = useState(false);
  const [rolesDatas, setRolesDatas] = useState(rolesData);

  const handleDelete = (role) => {
    console.log("you clicked delete", role);
    setSelectedRole(role);
    setIsDeleteModalOpen(true);
  };

  const handleDeleteConfirmation = () => {
    // Implement the actual delete logic here
    console.log("Deleting role", selectedRole);
    setIsDeleteModalOpen(false);
  };

  const handleEdit = (role) => {
    console.log("you clicked Edit", role);
  };

  const handleAdd = () => {
    setIsAddRoleModalOpen(true);
  };

  const handleAddRole = (newRole) => {
    // Implement the actual add role logic here
    console.log("Adding new role", newRole);
    // Update the roles array
    setRolesDatas([...rolesData, newRole]);
    setIsAddRoleModalOpen(false);
  };

  const indexOfLastRole = currentPage * itemsPerPage;
  const indexOfFirstRole = indexOfLastRole - itemsPerPage;
  const currentRoles = rolesData.slice(indexOfFirstRole, indexOfLastRole);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Flex w="100%" overflow="auto">
      <Box mt="10px">
        <Card w="100%">
          <Flex mb="5px">
            <Text color="#0648b3" fontWeight={"bold"}>
              Access
            </Text>
            <Spacer />
            <Button
              borderRadius="md"
              bg="#0648b3"
              color="white"
              px={2}
              h={8}
              size="sm"
              w="auto"
              onClick={() => handleAdd()}
              leftIcon={<FaPlus />}
            >
              Role
            </Button>
          </Flex>
          <Divider />
          <Table size="sm" variant="simple">
            <Thead>
              <Tr>
                <Th>S.No</Th>
                <Th>Role</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {currentRoles.map((role, index) => (
                <Tr key={role.id}>
                  <Td>{indexOfFirstRole + index + 1}</Td>
                  <Td>{role.name}</Td>

                  <Td>
                    <Flex
                      direction={{ sm: "row", md: "row" }}
                      align="flex-start"
                    >
                      <Button
                        p="0px"
                        bg="transparent"
                        onClick={() => handleEdit(role)}
                      >
                        <Flex
                          color={"gray.900"}
                          cursor="pointer"
                          align="center"
                        >
                          <Icon as={FaPencilAlt} me="4px" />
                        </Flex>
                      </Button>
                      <Button
                        p="0px"
                        bg="transparent"
                        mb={{ sm: "10px", md: "0px" }}
                        me={{ md: "12px" }}
                        onClick={() => handleDelete(role)}
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
              length: Math.ceil(rolesData.length / itemsPerPage),
            }).map((_, index) => (
              <Button key={index} onClick={() => paginate(index + 1)} mx={1}>
                {index + 1}
              </Button>
            ))}
          </Box>
          <AddRole
            isOpen={isAddRoleModalOpen}
            onClose={() => setIsAddRoleModalOpen(false)}
            onAddRole={handleAddRole}
          />
        </Card>
        <Resource></Resource>
      </Box>
      <Modal
        isCentered={true}
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color={"#0648b3"}>Confirm Deletion</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Are you sure you want to delete the role "{selectedRole?.name}"?
          </ModalBody>
          <ModalFooter>
            <Button
              size="sm"
              colorScheme="red"
              onClick={handleDeleteConfirmation}
            >
              Delete
            </Button>
            <Button
              size="sm"
              ml={3}
              onClick={() => setIsDeleteModalOpen(false)}
            >
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default AccessManagement;
