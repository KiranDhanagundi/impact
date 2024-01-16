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
} from "@chakra-ui/react";
import Card from "../../../../components/Card/Card";
import { FaPencilAlt, FaTrashAlt, FaPlus } from "react-icons/fa";
import { useState } from "react";
import AddResource from "./AddResource";
import EditResource from "./EditResource";

const resourcesData = [
  { id: 1, name: "Dashboard", description: "App Dashboard" },
  { id: 2, name: "Home1", description: "App Home" },
  { id: 3, name: "Settings", description: "App Settings" },
  { id: 4, name: "Access", description: "App Access" },
  { id: 5, name: "Subscription", description: "App Subscription" },
  { id: 6, name: "Payments", description: "App Payments" },
];
const itemsPerPage = 5;

const ResourceListTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedResource, setSelectedResourcs] = useState(null);

  const [resources, setResources] = useState(resourcesData);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isAddResourceModalOpen, setIsAddResourceModalOpen] = useState(false);
  const [isEditResourceModalOpen, setIsEditResourceModalOpen] = useState(false);
  const [editedResource, setEditedResource] = useState(null);

  const handleEdit = (resource) => {
    console.log("Edit resource with id", resource);
    setEditedResource(resource);
    setIsEditResourceModalOpen(true);
  };

  const handleDelete = (resource) => {
    console.log("you clicked delete", resource);
    setSelectedResourcs(resource);
    setIsDeleteModalOpen(resource);
  };
  const handleDeleteConfirmation = () => {
    console.log("Deleting role", selectedResource);
    setIsDeleteModalOpen(false);
  };

  const handleEditResource = (editedResource) => {
    // Update the resource in the resources array
    setResources((prevResources) =>
      prevResources.map((resource) =>
        resource.id === editedResource.id ? editedResource : resource
      )
    );
    setIsEditResourceModalOpen(false);
  };

  const handleAddResource = (resourceName, resourceDescription) => {
    // Add the new resource to the resources array
    const newResource = {
      id: resources.length + 1,
      name: resourceName,
      description: resourceDescription,
    };
    setResources([...resources, newResource]);
  };

  const indexOfLastResource = currentPage * itemsPerPage;
  const indexOfFirstResource = indexOfLastResource - itemsPerPage;
  const currentResources = resources.slice(
    indexOfFirstResource,
    indexOfLastResource
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Box mt="10px" overflowY="auto">
      <Card w="100%" p="22px">
        <Flex mb="5px">
          <Text color="#0648b3" fontWeight={"bold"}>
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
            w="auto"
            leftIcon={<FaPlus />}
            onClick={() => setIsAddResourceModalOpen(true)}
          >
            Resource
          </Button>
        </Flex>
        <Divider />
        <Table size="sm" variant="simple">
          <Thead>
            <Tr>
              <Th>S.No</Th>
              <Th>Resource Name</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {currentResources.map((resource, index) => (
              <Tr key={resource.id}>
                <Td>{index + 1 + indexOfFirstResource}</Td>
                <Td>{resource.name}</Td>
                <Td>
                  <Flex direction={{ sm: "row", md: "row" }} align="flex-start">
                    <Button
                      p="0px"
                      bg="transparent"
                      onClick={() => handleEdit(resource)}
                    >
                      <Flex color={"gray.900"} cursor="pointer" align="center">
                        <Icon as={FaPencilAlt} me="4px" />
                      </Flex>
                    </Button>
                    <Button
                      p="0px"
                      bg="transparent"
                      mb={{ sm: "10px", md: "0px" }}
                      me={{ md: "12px" }}
                      onClick={() => handleDelete(resource)}
                    >
                      <Flex
                        color="red.500"
                        cursor="pointer"
                        align="center"
                        p="12px"
                      >
                        <Icon as={FaTrashAlt} me="4px" />
                      </Flex>
                    </Button>
                  </Flex>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
        <Box mt={2}>
          {Array.from({
            length: Math.ceil(resources.length / itemsPerPage),
          }).map((_, index) => (
            <Button key={index} onClick={() => paginate(index + 1)} mx={1}>
              {index + 1}
            </Button>
          ))}
        </Box>
        <Modal
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
          isCentered={true}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader color={"#0648b3"}>Confirm Deletion</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              Are you sure you want to delete the role "{selectedResource?.name}
              "?
            </ModalBody>
            <ModalFooter>
              <Button
                size="sm"
                colorScheme="red"
                onClick={handleDeleteConfirmation}
              >
                Delete
              </Button>
              <Button
                size="sm"
                ml={3}
                onClick={() => setIsDeleteModalOpen(false)}
              >
                Cancel
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        <AddResource
          isOpen={isAddResourceModalOpen}
          onClose={() => setIsAddResourceModalOpen(false)}
          onAddResource={handleAddResource}
        />
        <EditResource
          isOpen={isEditResourceModalOpen}
          onClose={() => setIsEditResourceModalOpen(false)}
          onEditResource={handleEditResource}
          resource={editedResource}
        />
      </Card>
    </Box>
  );
};

export default ResourceListTable;
