import React from "react";
import {
  Modal,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Button,
  // useDisclosure,
  ModalHeader,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";

function AddUser({ isOpen, onClose }) {
  // const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  // const finalRef = React.useRef(null);

  return (
    <>
      <Modal borderRadious="md" size="lg" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color="#0648b3">Add User</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>First name</FormLabel>
              <Input ref={initialRef} placeholder="First name" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Last name</FormLabel>
              <Input placeholder="Last name" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Email</FormLabel>
              <Input placeholder="Email" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Phone</FormLabel>
              <Input placeholder="Phone" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Role</FormLabel>
              <Input placeholder="Role" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button size="sm" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button size="sm" rounded="md" bg="#0648b3" color="white">
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
export default AddUser;
