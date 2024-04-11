import {
  Box,
  Button,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
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
  useDisclosure,
  Spinner,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import Card from "../../../../components/Card/Card";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import AddRole from "./AddRole";
import EditRole from "./EditRole";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../actions";

const Role = () => {
  const [selectedRole, setSelectedRole] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isAddRoleModalOpen, setIsAddRoleModalOpen] = useState(false);
  const dispatch = useDispatch();
  const rolesList = useSelector((state) => state?.access?.rolesList);
  const [roleList, setRoleList] = useState([]);
  useEffect(() => {
    dispatch(actions.fetchRolesRequest());
  }, [dispatch]);

  useEffect(() => {
    if (Array.isArray(rolesList)) {
      setRoleList(rolesList);
    }
  }, [rolesList]);

  const {
    isOpen: isEditModalOpen,
    onOpen: onEditModalOpen,
    onClose: onEditModalClose,
  } = useDisclosure();

  const handleEdit = (role) => {
    setSelectedRole(role);
    onEditModalOpen();
  };

  const handleAdd = () => {
    setIsAddRoleModalOpen(true);
  };

  const handleDelete = (role) => {
    setSelectedRole(role);
    setIsDeleteModalOpen(true);
  };

  const handleDeleteConfirmation = () => {
    dispatch(actions.deleteRoleRequest(selectedRole));
    setIsDeleteModalOpen(false);
  };

  const indexOfLastRole = currentPage * itemsPerPage;
  const indexOfFirstRole = indexOfLastRole - itemsPerPage;
  const currentRoles = roleList?.slice(indexOfFirstRole, indexOfLastRole);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Box
      overflowY="auto"
      boxShadow="md"
      borderRadius="md"
      borderWidth="1px"
      minH="500px"
    >
      <Card w="100%" p={2}>
        <Flex mb="5px">
          <Text color="#0648b3" fontWeight={"bold"}>
            Roles
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
            fontWeight="normal"
            onClick={() => handleAdd()}
            // leftIcon={<FaPlus />}
          >
            Add Role
          </Button>
        </Flex>
        <Divider />
        <Table size="sm" variant="simple">
          <Thead>
            <Tr>
              <Th>S.No</Th>
              <Th>Role</Th>
              <Th>Description</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          {roleList && roleList.length > 0 ? (
            <Tbody>
              {currentRoles.map((role, index) => (
                <Tr key={role.rolename}>
                  <Td>{indexOfFirstRole + index + 1}</Td>
                  <Td>{role.roleName}</Td>
                  <Td>{role.roleDescription}</Td>
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
          ) : (
            <Flex
              alignItems="center"
              justifyContent="center"
              minHeight="50vh"
              ml="600px"
            >
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="#0648b3"
                size="xl"
              />
            </Flex>
          )}
        </Table>
        <Box align="start" mt={1}>
          {Array.from({
            length: Math.ceil(rolesList.length / itemsPerPage),
          }).map((_, index) => (
            <Button
              size="sm"
              key={index}
              onClick={() => paginate(index + 1)}
              mx={1}
            >
              {index + 1}
            </Button>
          ))}
        </Box>
        <AddRole
          isOpen={isAddRoleModalOpen}
          onClose={() => setIsAddRoleModalOpen(false)}
        />
        <EditRole
          isOpen={isEditModalOpen}
          onClose={onEditModalClose}
          data={selectedRole}
        />
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
              Are you sure you want to delete the role "{selectedRole?.roleName}
              "?
            </ModalBody>
            <ModalFooter>
              <Button
                size="sm"
                colorScheme="red"
                fontWeight="normal"
                onClick={handleDeleteConfirmation}
              >
                Delete
              </Button>
              <Button
                size="sm"
                fontWeight="normal"
                ml={3}
                onClick={() => setIsDeleteModalOpen(false)}
              >
                Cancel
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Card>
    </Box>
  );
};

export default Role;
