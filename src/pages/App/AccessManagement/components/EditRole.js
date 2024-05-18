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
  const [editedResourcePermissions, setEditedResourcePermissions] = useState({});
  const resourcesList = useSelector((state) => state?.access?.resourceList);
  const isLoading = useSelector((state) => state?.access?.isLoading);
  const [currentPage, setCurrentPage] = useState(1);

  // Effect to update state when data changes
  useEffect(() => {
    if (data) {
      setEditedRoleName(data.roleName || "");
      setEditedRoleDescription(data.roleDescription || "");

      // Initialize editedResourcePermissions based on existing data
      const initialPermissions = {};
      if (data.permissions) {
        data.permissions.forEach((permission) => {
          initialPermissions[permission.resource] = {
            view: permission.view || false,
            create: permission.create || false,
            edit: permission.edit || false,
            delete: permission.delete || false,
          };
        });
      }
      setEditedResourcePermissions(initialPermissions);
    }
  }, [data]);

  // Function to handle updating resource permissions
  const handlePermissionChange = (resourceName, permission, isChecked) => {
    setEditedResourcePermissions((prevPermissions) => ({
      ...prevPermissions,
      [resourceName]: {
        ...prevPermissions[resourceName],
        [permission]: isChecked,
      },
    }));
  };

  const handleEditRole = () => {
    const updatedPermissions = Object.entries(editedResourcePermissions).map(
      ([resource, permissions]) => ({
        resource,
        ...permissions,
      })
    );

    const updatedRole = {
      roleName: editedRoleName,
      roleDescription: editedRoleDescription,
      permissions: updatedPermissions,
    };

    dispatch(actions.editRoleRequest(updatedRole));
    onClose();
  };

  const resourcesPerPage = 5;
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
                <Stack spacing={2}>
                  {resourcesList.map((resource) => (
                    <Stack key={resource.name} direction="row" alignItems="center">
                      <Checkbox
                        isChecked={editedResourcePermissions[resource.name]?.view || false}
                        onChange={(e) =>
                          handlePermissionChange(
                            resource.name,
                            "view",
                            e.target.checked
                          )
                        }
                        colorScheme="green"
                      >
                        View
                      </Checkbox>
                      <Checkbox
                        isChecked={editedResourcePermissions[resource.name]?.create || false}
                        onChange={(e) =>
                          handlePermissionChange(
                            resource.name,
                            "create",
                            e.target.checked
                          )
                        }
                        colorScheme="green"
                      >
                        Create
                      </Checkbox>
                      <Checkbox
                        isChecked={editedResourcePermissions[resource.name]?.edit || false}
                        onChange={(e) =>
                          handlePermissionChange(
                            resource.name,
                            "edit",
                            e.target.checked
                          )
                        }
                        colorScheme="green"
                      >
                        Edit
                      </Checkbox>
                      <Checkbox
                        isChecked={editedResourcePermissions[resource.name]?.delete || false}
                        onChange={(e) =>
                          handlePermissionChange(
                            resource.name,
                            "delete",
                            e.target.checked
                          )
                        }
                        colorScheme="green"
                      >
                        Delete
                      </Checkbox>
                      <Box>{resource.name}</Box>
                    </Stack>
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
