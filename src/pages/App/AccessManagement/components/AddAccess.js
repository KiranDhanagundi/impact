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
  VStack,
  CheckboxGroup,
  Divider,
} from "@chakra-ui/react";
import { useState } from "react";

const AddRole = ({ isOpen, onClose, onAddRole }) => {
  const [roleName, setRoleName] = useState("");
  const [roleDescription, setRoleDescription] = useState("");
  const [selectedPermissions, setSelectedPermissions] = useState({});

  const permissionsList = {
    Dashboard: ["view", "edit", "delete", "update", "Add"],
    Settings: ["view", "edit", "delete", "update", "Add"],
  };

  const handleAddRole = () => {
    // Perform the add role logic and pass the values to the parent component
    onAddRole({
      name: roleName,
      description: roleDescription,
      permissions: selectedPermissions,
    });
    // Reset the input fields and close the modal
    setRoleName("");
    setRoleDescription("");
    setSelectedPermissions([]);
    onClose();
  };

  const handleCheckboxChange = (resource, permission) => {
    setSelectedPermissions((prevSelected) => {
      const resourcePermissions = prevSelected[resource] || [];
      const updatedPermissions = resourcePermissions.includes(permission)
        ? resourcePermissions.filter((p) => p !== permission)
        : [...resourcePermissions, permission];

      return { ...prevSelected, [resource]: updatedPermissions };
    });
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
              type="text"
              value={roleName}
              onChange={(e) => setRoleName(e.target.value)}
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Role Description</FormLabel>
            <Input
              type="text"
              value={roleDescription}
              onChange={(e) => setRoleDescription(e.target.value)}
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Permissions</FormLabel>
            <Divider mb="5px"></Divider>
            <VStack align="start">
              {Object.entries(permissionsList).map(
                ([resource, permissions]) => (
                  <HStack key={resource} spacing={4}>
                    <strong>{resource}</strong>
                    <CheckboxGroup colorScheme="blue">
                      {permissions.map((permission) => (
                        <Checkbox
                          key={permission}
                          isChecked={selectedPermissions[resource]?.includes(
                            permission
                          )}
                          onChange={() =>
                            handleCheckboxChange(resource, permission)
                          }
                        >
                          {permission}
                        </Checkbox>
                      ))}
                    </CheckboxGroup>
                  </HStack>
                )
              )}
            </VStack>
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button
            size="sm"
            color="white"
            bg={"#0648b3"}
            onClick={handleAddRole}
          >
            Save
          </Button>
          <Button size="sm" ml={3} onClick={onClose}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AddRole;
