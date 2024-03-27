import React, { useState, useEffect } from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Input,
  FormControl,
  FormLabel,
  Checkbox,
  Stack,
  Divider,
  Box,
  Spinner,
  HStack,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../actions";

const EditRole = ({ isOpen, onClose, data }) => {
  const dispatch = useDispatch();
  const [editedRoleName, setEditedRoleName] = useState("");
  const [editedRoleDescription, setEditedRoleDescription] = useState("");
  const [editedResources, setEditedResources] = useState([]);
  const resourcesList = useSelector((state) => state?.access?.resourceList);
  const isLoading = useSelector((state) => state?.access?.isLoading);
  const [currentPage, setCurrentPage] = useState(1);

  // Effect to update state when data changes
  useEffect(() => {
    if (data) {
      setEditedRoleName(data.roleName || "");
      setEditedRoleDescription(data.roleDescription || "");
      setEditedResources(data.resources || []);
    }
  }, [data]);

  // Function to handle updating the role
  const handleEditRole = () => {
    const updatedRole = {
      roleName: editedRoleName,
      roleDescription: editedRoleDescription,
      resources: editedResources,
    };
    dispatch(actions.editRoleRequest(updatedRole));
    setEditedRoleName("");
    setEditedRoleDescription("");
    setEditedResources([]);
    onClose();
  };

  const resourcesPerPage = 10;
  const indexOfLastResource = currentPage * resourcesPerPage;
  const indexOfFirstResource = indexOfLastResource - resourcesPerPage;
  const currentResources = resourcesList.slice(
    indexOfFirstResource,
    indexOfLastResource
  );
  const totalPages = Math.ceil(resourcesList.length / resourcesPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader color={"#0648b3"}>Edit Role</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel>Role Name</FormLabel>
            <Input
              id="rolename"
              disabled="true"
              type="text"
              value={editedRoleName}
              onChange={(e) => setEditedRoleName(e.target.value)}
            />
          </FormControl>
          <FormControl mt={2}>
            <FormLabel>Role Description</FormLabel>
            <Input
              type="text"
              id="roledescription"
              value={editedRoleDescription}
              onChange={(e) => setEditedRoleDescription(e.target.value)}
            />
          </FormControl>
          <FormControl mt={2}>
            <FormLabel>Permissions</FormLabel>
            <Divider mb="5px" />
            {isLoading ? (
              <Box textAlign="center">
                <Spinner color="blue.500" />
              </Box>
            ) : (
              <Box borderWidth="1px" p="2" borderRadius="md" minH="300px">
                <Stack spacing={1.5} minH="300px">
                  {currentResources &&
                    currentResources.map((resource) => (
                      <Checkbox
                        key={resource.name}
                        isChecked={editedResources.includes(resource.name)}
                        onChange={(e) => {
                          const { checked } = e.target;
                          if (checked) {
                            setEditedResources([
                              ...editedResources,
                              resource.name,
                            ]);
                          } else {
                            setEditedResources(
                              editedResources.filter(
                                (selected) => selected !== resource.name
                              )
                            );
                          }
                        }}
                        colorScheme="green"
                      >
                        {resource.name}
                      </Checkbox>
                    ))}
                </Stack>
                <Divider mt="10px" />
                {totalPages > 1 && (
                  <HStack mt={2}>
                    <Button
                      size="sm"
                      fontWeight="normal"
                      onClick={handlePrevPage}
                      disabled={currentPage === 1}
                    >
                      Previous
                    </Button>
                    <Button
                      size="sm"
                      fontWeight="normal"
                      onClick={handleNextPage}
                      disabled={currentPage === totalPages}
                    >
                      Next
                    </Button>
                  </HStack>
                )}
              </Box>
            )}
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button
            size="sm"
            color="white"
            fontWeight="normal"
            bg={"#0648b3"}
            onClick={handleEditRole}
          >
            Save
          </Button>
          <Button size="sm" fontWeight="normal" ml={3} onClick={onClose}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default EditRole;
