import {
  Box,
  Button,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Flex,
  Icon,
  Text,
  Divider,
  Spacer,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@chakra-ui/react";
import Card from "../../../../components/Card/Card";
import { FaPencilAlt, FaTrashAlt, FaPlus } from "react-icons/fa";
import { useState } from "react";
import AddResource from "./AddResource";
import EditResource from "./EditResource";
import { connect, useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import * as actions from "../actions";

const Resource = () => {
  const itemsPerPage = 10;
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedResource, setSelectedResource] = useState(null);
  const resourceList = useSelector((state) => state?.access?.resourceList);

  useEffect(() => {
    dispatch(actions.fetchResourceRequest());
  }, [dispatch]);

  const {
    isOpen: isEditModalOpen,
    onOpen: onEditModalOpen,
    onClose: onEditModalClose,
  } = useDisclosure();

  const [editedResource, setEditedResource] = useState(null);

  const {
    isOpen: isAddModalOpen,
    onOpen: onAddModalOpen,
    onClose: onAddModalClose,
  } = useDisclosure();

  const {
    isOpen: isDeleteModalOpen,
    onOpen: onDeleteModalOpen,
    onClose: onDeleteModalClose,
  } = useDisclosure();

  const handleDelete = (resource) => {
    setSelectedResource(resource); // Set selected resource for deletion
    onDeleteModalOpen(); // Open delete modal
  };

  const indexOfLastResource = currentPage * itemsPerPage;
  const indexOfFirstResource = indexOfLastResource - itemsPerPage;
  const currentResources = resourceList.slice(
    indexOfFirstResource,
    indexOfLastResource
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleEdit = (resource) => {
    setSelectedResource(resource);
    setEditedResource(resource);
    onEditModalOpen();
  };

  const handleDeleteConfirmation = () => {
    dispatch(actions.deleteResourceRequest(selectedResource));
    setSelectedResource(null);
    onDeleteModalClose();
  };

  return (
    <Box
      mt="10px"
      overflowY="auto"
      boxShadow="md"
      borderRadius="md"
      borderWidth="1px"
      minH="500px"
    >
      <Card w="100%" p={2}>
        <Flex mb="5px">
          <Text color="#0648b3" fontWeight="bold">
            Resources
          </Text>
          <Spacer />
          <Button
            borderRadius="md"
            bg="#0648b3"
            color="white"
            px={2}
            h={8}
            size="sm"
            fontWeight="normal"
            w="auto"
            // leftIcon={<FaPlus />}
            onClick={() => onAddModalOpen(true)}
          >
            Add Resource
          </Button>
        </Flex>
        <Divider />
        <Table size="sm" variant="simple">
          <Thead>
            <Tr>
              <Th>S.No</Th>
              <Th>Name</Th>
              <Th>description</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {currentResources.map((resource, index) => (
              <Tr key={resource.id}>
                <Td>{index + 1 + indexOfFirstResource}</Td>
                <Td>{resource.name}</Td>
                <Td>{resource.description}</Td>
                <Td>
                  <Flex direction="row">
                    <Button
                      p="0px"
                      bg="transparent"
                      onClick={() => handleEdit(resource)}
                    >
                      <Icon as={FaPencilAlt} />
                    </Button>
                    <Button
                      p="0px"
                      bg="transparent"
                      onClick={() => handleDelete(resource)}
                    >
                      <Icon color="red.500" as={FaTrashAlt} />
                    </Button>
                  </Flex>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
        <Box align="start" mt={1}>
          {Array.from({
            length: Math.ceil(resourceList.length / itemsPerPage),
          }).map((_, index) => (
            <Button
              size="sm"
              key={index}
              onClick={() => paginate(index + 1)}
              mx={1}
            >
              {index + 1}
            </Button>
          ))}
        </Box>
        <Modal
          isOpen={isDeleteModalOpen}
          onClose={onDeleteModalClose}
          isCentered
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader color="#0648b3">Confirm Deletion</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              Are you sure you want to delete the resource "
              {selectedResource?.name}
              "?
            </ModalBody>
            <ModalFooter>
              <Button
                size="sm"
                colorScheme="red"
                fontSize="xs"
                fontWeight="normal"
                onClick={handleDeleteConfirmation}
              >
                Delete
              </Button>
              <Button
                size="sm"
                fontSize="xs"
                fontWeight="normal"
                ml={3}
                onClick={onDeleteModalClose}
              >
                Cancel
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        <AddResource isOpen={isAddModalOpen} onClose={onAddModalClose} />
        <EditResource
          isOpen={isEditModalOpen}
          onClose={onEditModalClose}
          resource={editedResource}
        />
      </Card>
    </Box>
  );
};

export default Resource;
