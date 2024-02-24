import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
} from "@chakra-ui/react";

const RemoveCartItems = ({ isOpen, onClose, product, onConfirm }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered={true}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader color={"#0648b3"}>Confirm Deletion</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          Are you sure you want to remove "{product?.product?.name}"?
        </ModalBody>
        <ModalFooter>
          <Button size="sm" colorScheme="red" onClick={onConfirm}>
            Remove
          </Button>
          <Button size="sm" ml={3} onClick={onClose}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default RemoveCartItems;
