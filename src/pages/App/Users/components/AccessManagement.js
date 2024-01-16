import {
  Box,
  Button,
  Checkbox,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import EditRoleModal from "./EditUser"; // Create/Edit role modal component

const rolesData = [
  {
    id: 1,
    name: "Admin",
    permissions: ["createUser", "editUser", "deleteUser"],
  },
  { id: 2, name: "Editor", permissions: ["editUser"] },
  // Add more role data as needed
];

const permissionsList = [
  "createUser",
  "editUser",
  "deleteUser",
  "viewDashboard",
]; // Define your permissions

const AccessManagement = () => {
  const [selectedRole, setSelectedRole] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Function to handle checkbox changes
  const handleCheckboxChange = (permission) => {
    const updatedPermissions = selectedRole.permissions.includes(permission)
      ? selectedRole.permissions.filter((p) => p !== permission)
      : [...selectedRole.permissions, permission];

    setSelectedRole({ ...selectedRole, permissions: updatedPermissions });
  };

  return (
    <Box>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Name</Th>
            <Th>Permissions</Th>
            <Th>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {rolesData.map((role) => (
            <Tr key={role.id}>
              <Td>{role.id}</Td>
              <Td>{role.name}</Td>
              <Td>
                {permissionsList.map((permission) => (
                  <Checkbox
                    key={permission}
                    isChecked={role.permissions.includes(permission)}
                    onChange={() => handleCheckboxChange(permission)}
                    mr={2}
                  >
                    {permission}
                  </Checkbox>
                ))}
              </Td>
              <Td>
                <Button
                  size="sm"
                  rounded="md"
                  bg="#0648b3"
                  color="white"
                  _hover={{
                    bg: ["primary.500"],
                  }}
                  onClick={() => {
                    setSelectedRole(role);
                    onOpen();
                  }}
                  mr={2}
                >
                  Edit
                </Button>
                <Button size="sm" colorScheme="red">
                  Delete
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>

      {/* Edit Role Modal */}
      <EditRoleModal isOpen={isOpen} onClose={onClose} role={selectedRole} />
    </Box>
  );
};

export default AccessManagement;
