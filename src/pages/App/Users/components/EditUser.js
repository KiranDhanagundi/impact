import React, { useState, useEffect } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
  Input,
  Button,
  Select,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../actions";
import { fetchRolesRequest } from "../../AccessManagement/actions";

const EditUser = ({ isOpen, onClose, user }) => {
  console.log("edit data", user);
  const dispatch = useDispatch();

  const [userData, setUserData] = useState({
    id: user?.id || "",
    name: user?.name || "",
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    email: user?.email || "",
    role: user?.role || "",
    domain: user?.domain || "",
    subscriptionType: user?.subscriptionType || "",
    status: user?.status || "",
    createdDate: user?.createdDate || "",
    updatedDate: user?.updatedDate || "",
    password: user?.password || "",
    access: user?.access || "",
    about: user?.about || "",
  });
  const rolesList = useSelector((state) => state?.access?.rolesList);
  const [roleList, setRoleList] = useState([]);

  useEffect(() => {
    dispatch(fetchRolesRequest());
  }, [dispatch]);

  useEffect(() => {
    if (user) {
      setUserData({
        id: user?.id || "",
        name: user?.name || "",
        firstName: user?.firstName || "",
        lastName: user?.lastName || "",
        email: user?.email || "",
        role: user?.role || "",
        domain: user?.domain || "",
        subscriptionType: user?.subscriptionType || "",
        status: user?.status || "",
        createdDate: user?.createdDate || "",
        updatedDate: user.updatedDate || "",
        password: user?.password || "",
        access: user?.access || "",
        about: user?.about || "",
      });
    }
  }, [user]);

  useEffect(() => {
    if (Array.isArray(rolesList)) {
      setRoleList(rolesList);
    }
  }, [rolesList]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // If the input name is 'role', find the selected role object
    if (name === "role") {
      const selectedRole = roleList.find((role) => role.roleName === value);
      // Update the user data with the selected role object
      setUserData((prevState) => ({
        ...prevState,
        [name]: selectedRole, // Store the entire role object
      }));
    } else {
      // For other input fields, update as usual
      setUserData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleEditSubmit = () => {
    dispatch(actions.editUserRequest(userData));
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader color="#0648b3">Edit User</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel>First Name</FormLabel>
            <Input
              name="firstName"
              placeholder=" First name"
              value={userData.firstName}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl mt={2}>
            <FormLabel>Last Name</FormLabel>
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
              disabled="true"
              placeholder="Email"
              value={userData.email}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl mt={2}>
            <FormLabel>Role</FormLabel>
            <Select
              name="role"
              placeholder="Select Role"
              value={
                userData.role.roleName ? userData.role.roleName : userData.role
              }
              onChange={handleInputChange}
            >
              {roleList.map((role) => (
                <option key={role.roleName} value={role.roleName}>
                  {role.roleDescription}
                </option>
              ))}
            </Select>
          </FormControl>
          <FormControl mt={2}>
            <FormLabel>Domain</FormLabel>
            <Input
              disabled="true"
              name="domain"
              placeholder="Domain"
              value={userData.domain}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl mt={2}>
            <FormLabel>Subscription Type</FormLabel>
            <Input
              disabled="true"
              name="subscriptionType"
              placeholder="Subscription Type"
              value={userData.subscriptionType}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl mt={2}>
            <FormLabel>Status</FormLabel>
            <Select
              name="status"
              placeholder="Select Status"
              value={userData.status}
              onChange={handleInputChange}
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </Select>
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button
            fontWeight="normal"
            size="sm"
            bg="#0648b3"
            color="white"
            onClick={handleEditSubmit}
          >
            Save
          </Button>
          <Button fontWeight="normal" size="sm" ml={3} onClick={onClose}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default EditUser;
