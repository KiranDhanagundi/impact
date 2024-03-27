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
import * as actions from "../actions";
import { useDispatch } from "react-redux";

const AddResource = ({ isOpen, onClose }) => {
  const [resourceName, setResourceName] = useState("");
  const [resourceDescription, setResourceDescription] = useState("");
  const dispatch = useDispatch();

  const handleAddResource = () => {
    const newResource = {
      name: resourceName,
      description: resourceDescription,
    };
    dispatch(actions.addResourceRequest(newResource));
    setResourceName("");
    setResourceDescription("");
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
            <FormLabel mt={2}>Resource Description</FormLabel>
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
            fontWeight="normal"
            bg="#0648b3"
            color={"white"}
            onClick={handleAddResource}
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

export default AddResource;
