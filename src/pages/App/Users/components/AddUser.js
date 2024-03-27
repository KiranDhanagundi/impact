import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Modal,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Button,
  ModalHeader,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalFooter,
  Select,
} from "@chakra-ui/react";
import * as actions from "../actions";
import { fetchRolesRequest } from "../../AccessManagement/actions";

function AddUser({ isOpen, onClose }) {
  const dispatch = useDispatch();
  const rolesList = useSelector((state) => state?.access?.rolesList);
  const [roleList, setRoleList] = useState([]);

  useEffect(() => {
    dispatch(fetchRolesRequest());
  }, [dispatch]);

  useEffect(() => {
    if (Array.isArray(rolesList)) {
      setRoleList(rolesList);
    }
  }, [rolesList]);

  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    role: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "role") {
      // Find the selected role object from roleList
      const selectedRole = roleList.find((role) => role.roleName === value);
      setUserData((prevUserData) => ({
        ...prevUserData,
        [name]: selectedRole, // Update role to be the entire role object
      }));
    } else {
      // For other input fields, update as before
      setUserData((prevUserData) => ({
        ...prevUserData,
        [name]: value,
      }));
    }
  };

  // Function to handle adding a new user
  const handleAddUser = () => {
    dispatch(actions.addUserRequest(userData));
    setUserData({
      firstName: "",
      lastName: "",
      email: "",
      role: "",
    });

    onClose();
  };

  return (
    <>
      <Modal borderRadius="md" size="lg" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color="#0648b3">Add User</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>First name</FormLabel>
              <Input
                name="firstName"
                placeholder="First name"
                value={userData.firstName}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl mt={2}>
              <FormLabel>Last name</FormLabel>
              <Input
                name="lastName"
                placeholder="Last name"
                value={userData.lastName}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl mt={2}>
              <FormLabel>Email</FormLabel>
              <Input
                name="email"
                placeholder="Email"
                value={userData.email}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl mt={2}>
              <FormLabel>Role</FormLabel>
              <Select
                name="role"
                placeholder="Select role"
                value={userData.role ? userData.role.roleName : ""}
                onChange={handleInputChange}
              >
                {roleList.map((role) => (
                  <option key={role.roleName} value={role.roleName}>
                    {role.roleDescription}
                  </option>
                ))}
              </Select>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              fontWeight="normal"
              size="sm"
              bg="#0648b3"
              color="white"
              onClick={handleAddUser} // Call handleAddUser function on Save button click
            >
              Save
            </Button>
            <Button size="sm" fontWeight="normal" ml={3} onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default AddUser;
