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
import { useState, useEffect } from "react";

const EditResource = ({ isOpen, onClose, onEditResource, resource }) => {
  const [editedName, setEditedName] = useState("");
  const [editedDescription, setEditedDescription] = useState("");

  useEffect(() => {
    // Set initial values when the modal is opened
    setEditedName(resource?.name || "");
    setEditedDescription(resource?.description || "");
  }, [isOpen, resource]);

  const handleEditResource = () => {
    // Perform the edit resource logic and pass the edited values to the parent component
    onEditResource({
      id: resource.id,
      name: editedName,
      description: editedDescription,
    });
    // Reset the input fields and close the modal
    setEditedName("");
    setEditedDescription("");
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered={true}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader color={"#0648b3"}>Edit Resource</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel>Resource Name</FormLabel>
            <Input
              type="text"
              value={editedName}
              onChange={(e) => setEditedName(e.target.value)}
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Resource Description</FormLabel>
            <Input
              type="text"
              value={editedDescription}
              onChange={(e) => setEditedDescription(e.target.value)}
            />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button
            size="sm"
            bg="#0648b3"
            color={"white"}
            onClick={handleEditResource}
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

export default EditResource;
