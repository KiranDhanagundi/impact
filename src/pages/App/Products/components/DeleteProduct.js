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

const DeleteProduct = ({ isOpen, onClose, product, onConfirm }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered={true}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader color={"#0648b3"}>Confirm Deletion</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          Are you sure you want to Delete "{product?.name}"?
        </ModalBody>
        <ModalFooter>
          <Button
            fontWeight="normal"
            size="sm"
            colorScheme="red"
            onClick={onConfirm}
          >
            Delete
          </Button>
          <Button fontWeight="normal" size="sm" ml={3} onClick={onClose}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default DeleteProduct;
