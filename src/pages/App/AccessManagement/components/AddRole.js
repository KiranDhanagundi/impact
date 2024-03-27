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
  Checkbox,
  HStack,
  Divider,
  Stack,
  Box,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../actions";

const AddRole = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();

  const [roleName, setRoleName] = useState("");
  const [roleDescription, setRoleDescription] = useState("");
  const [selectedResources, setSelectedResources] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const resourceList = useSelector((state) => state?.access?.resourceList);

  useEffect(() => {
    dispatch(actions.fetchResourceRequest());
  }, [dispatch]);

  const resourcesPerPage = 10;
  const indexOfLastResource = currentPage * resourcesPerPage;
  const indexOfFirstResource = indexOfLastResource - resourcesPerPage;
  const currentResources = resourceList.slice(
    indexOfFirstResource,
    indexOfLastResource
  );

  const totalPages = Math.ceil(resourceList.length / resourcesPerPage);

  const handleAddRole = () => {
    console.log("selected res", selectedResources);
    const payload = {
      roleName: roleName,
      roleDescription: roleDescription,
      resources: selectedResources,
    };
    dispatch(actions.addRoleRequest(payload));
    setRoleName("");
    setRoleDescription("");
    setSelectedResources([]);
    onClose();
  };

  const handleCheckboxChange = (resourceName) => {
    if (selectedResources.includes(resourceName)) {
      setSelectedResources(
        selectedResources.filter((res) => res !== resourceName)
      );
    } else {
      setSelectedResources([...selectedResources, resourceName]);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <Modal size="xl" isOpen={isOpen} onClose={onClose} isCentered={true}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader color={"#0648b3"}>Add Role</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel>Role Name</FormLabel>
            <Input
              type="text"
              value={roleName}
              onChange={(e) => setRoleName(e.target.value)}
            />
          </FormControl>
          <FormControl mt={2}>
            <FormLabel>Role Description</FormLabel>
            <Input
              type="text"
              value={roleDescription}
              onChange={(e) => setRoleDescription(e.target.value)}
            />
          </FormControl>
          <FormControl mt={2}>
            <FormLabel>Permissions</FormLabel>
            <Divider mb="5px"></Divider>
            <Box borderWidth="1px" p="2" borderRadius="md" minH="300px">
              <Stack spacing={1.5} minH="300px">
                {currentResources.map((resource) => (
                  <Checkbox
                    key={resource.name}
                    value={resource.name}
                    isChecked={selectedResources.includes(resource.name)}
                    onChange={() => handleCheckboxChange(resource.name)}
                    colorScheme="green"
                  >
                    {resource.name}
                  </Checkbox>
                ))}
              </Stack>
              <Divider mt="10px" />
              {totalPages > 1 && (
                <HStack mt={2}>
                  <Button
                    size="sm"
                    fontWeight="normal"
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                  >
                    Previous
                  </Button>
                  <Button
                    size="sm"
                    fontWeight="normal"
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                  >
                    Next
                  </Button>
                </HStack>
              )}
            </Box>
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button
            size="sm"
            color="white"
            fontWeight="normal"
            bg={"#0648b3"}
            onClick={handleAddRole}
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

export default AddRole;
