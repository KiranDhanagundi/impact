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
import * as actions from "../actions";
import { useDispatch } from "react-redux";

const EditResource = ({ isOpen, onClose, resource }) => {
  const [editedName, setEditedName] = useState("");
  const [editedDescription, setEditedDescription] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    setEditedName(resource?.name || "");
    setEditedDescription(resource?.description || "");
  }, [isOpen, resource]);

  const handleEditResource = () => {
    const editedResource = {
      name: editedName,
      description: editedDescription,
    };
    dispatch(actions.editResourceRequest(editedResource));
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
              disabled="true"
              value={editedName}
              onChange={(e) => setEditedName(e.target.value)}
            />
          </FormControl>
          <FormControl mt={2}>
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
            fontWeight="normal"
            size="sm"
            bg="#0648b3"
            color={"white"}
            onClick={handleEditResource}
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

export default EditResource;
