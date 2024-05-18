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
  HStack,
  Divider,
  Stack,
  Box,
  Text,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../actions";

const AddRole = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();

  const [roleName, setRoleName] = useState("");
  const [roleDescription, setRoleDescription] = useState("");
  const [resourcePermissions, setResourcePermissions] = useState({});
  const resourceList = useSelector((state) => state?.access?.resourceList);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(actions.fetchResourceRequest());
  }, [dispatch]);

  const resourcesPerPage = 10;
  const indexOfLastResource = currentPage * resourcesPerPage;
  const indexOfFirstResource = indexOfLastResource - resourcesPerPage;
  const currentResources = resourceList.slice(
    indexOfFirstResource,
    indexOfLastResource
  );

  const totalPages = Math.ceil(resourceList.length / resourcesPerPage);

  const handleAddRole = () => {
    const payload = {
      roleName: roleName,
      roleDescription: roleDescription,
      resourcePermissions: resourcePermissions,
    };
    dispatch(actions.addRoleRequest(payload));
    setRoleName("");
    setRoleDescription("");
    setResourcePermissions({});
    onClose();
  };

  const handlePermissionChange = (resourceName, permission, isChecked) => {
    setResourcePermissions((prevPermissions) => ({
      ...prevPermissions,
      [resourceName]: {
        ...prevPermissions[resourceName],
        [permission]: isChecked,
      },
    }));
  };

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
    <Modal size="xl" isOpen={isOpen} onClose={onClose} isCentered={true}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader color={"#0648b3"}>Add Role</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel>Role Name</FormLabel>
            <Input
              required
              type="text"
              value={roleName}
              onChange={(e) => setRoleName(e.target.value)}
            />
          </FormControl>
          <FormControl mt={2}>
            <FormLabel>Role Description</FormLabel>
            <Input
              type="text"
              value={roleDescription}
              onChange={(e) => setRoleDescription(e.target.value)}
            />
          </FormControl>
          <FormControl mt={2}>
            <FormLabel>Permissions</FormLabel>
            <Divider mb="5px" />
            <Box borderWidth="1px" p="2" borderRadius="md" minH="300px">
              <Stack spacing={2}>
                {currentResources.map((resource) => (
                  <HStack key={resource.name} alignItems="center">
                    <Text fontWeight="bold" >{resource.name}</Text>
                    <Divider/>
                    <Checkbox
                      isChecked={resourcePermissions[resource.name]?.view || false}
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
                      isChecked={resourcePermissions[resource.name]?.create || false}
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
                       colorScheme="green"
                      isChecked={resourcePermissions[resource.name]?.edit || false}
                      onChange={(e) =>
                        handlePermissionChange(
                          resource.name,
                          "edit",
                          e.target.checked
                        )
                      }
                    >
                      Edit
                    </Checkbox>
                    <Checkbox
                       colorScheme="green"
                      isChecked={resourcePermissions[resource.name]?.delete || false}
                      onChange={(e) =>
                        handlePermissionChange(
                          resource.name,
                          "delete",
                          e.target.checked
                        )
                      }
                    >
                      Delete
                    </Checkbox>
                  </HStack>
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
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button
            size="sm"
            color="white"
            fontWeight="normal"
            bg={"#0648b3"}
            onClick={handleAddRole}
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

export default AddRole;
