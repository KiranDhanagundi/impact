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
} from "@chakra-ui/react";
import { useState } from "react";

const AddResource = ({ isOpen, onClose, onAddResource }) => {
  const [resourceName, setResourceName] = useState("");
  const [resourceDescription, setResourceDescription] = useState("");

  const handleAddResource = () => {
    // Add resource logic, and pass the resource name to the parent component
    onAddResource(resourceName, resourceDescription);
    // Reset the input field and close the modal
    setResourceName("");
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered={true}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader color="#0648b3">Add Resource</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel>Resource Name</FormLabel>
            <Input
              type="text"
              value={resourceName}
              onChange={(e) => setResourceName(e.target.value)}
            />
            <FormLabel>Resource Description</FormLabel>
            <Input
              type="text"
              value={resourceDescription}
              onChange={(e) => setResourceDescription(e.target.value)}
            />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button
            size="sm"
            bg="#0648b3"
            color={"white"}
            onClick={handleAddResource}
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

export default AddResource;
