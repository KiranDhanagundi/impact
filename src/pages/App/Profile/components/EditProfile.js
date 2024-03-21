import React, { useEffect } from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  FormControl,
  FormLabel,
  VStack,
  Avatar,
  Flex,
  Divider,
  Textarea,
} from "@chakra-ui/react";

function EditProfile({ isOpen, onClose, profileData }) {
  useEffect(() => {}, [profileData]);

  const handleCloseEditModal = () => {
    onClose();
  };

  return (
    <Modal w="auto" size="xl" isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader color="#0648b3">Edit Profile</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack spacing="1px">
            <Flex>
              <Avatar
                size="2xl"
                align="center"
                mb="10px"
                name={profileData?.name}
                src={profileData?.profileImage}
              />
            </Flex>
            <Divider mb="10px" />
            <FormControl mr="10px">
              <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                About
              </FormLabel>
              <Textarea
                type="text"
                borderRadius="md"
                mb="5px"
                fontSize="sm"
                placeholder="Enter name..."
                size="lg"
                defaultValue={profileData?.about}
              />
            </FormControl>
            <FormControl>
              <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                Profile Image
              </FormLabel>
              <Input
                borderRadius="md"
                mb="5px"
                fontSize="sm"
                placeholder="upload image..."
                size="lg"
                type="file"
              />
            </FormControl>
            <Flex w="100%">
              <FormControl mr="10px">
                <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                  Name
                </FormLabel>
                <Input
                  type="text"
                  borderRadius="md"
                  mb="5px"
                  fontSize="sm"
                  placeholder="Enter name..."
                  size="lg"
                  defaultValue={profileData?.name}
                />
              </FormControl>
              <FormControl>
                <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                  Email
                </FormLabel>
                <Input
                  type="email"
                  borderRadius="md"
                  mb="5px"
                  fontSize="sm"
                  placeholder="Enter email..."
                  size="lg"
                  defaultValue={profileData?.email}
                />
              </FormControl>
            </Flex>
            <Flex w="100%">
              <FormControl>
                <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                  Address
                </FormLabel>
                <Input
                  type="text"
                  borderRadius="md"
                  mb="5px"
                  fontSize="sm"
                  placeholder="Enter address..."
                  size="lg"
                  defaultValue={profileData?.address}
                />
              </FormControl>
            </Flex>
            <Flex w="100%">
              <FormControl mr="10px">
                <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                  Facebook Url
                </FormLabel>
                <Input
                  type="url"
                  borderRadius="md"
                  mb="5px"
                  fontSize="sm"
                  placeholder="Enter url..."
                  size="lg"
                  defaultValue={profileData?.facebookUrl}
                />
              </FormControl>
              <FormControl>
                <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                  Instagram Url
                </FormLabel>
                <Input
                  type="url"
                  borderRadius="md"
                  mb="5px"
                  fontSize="sm"
                  placeholder="Enter url..."
                  size="lg"
                  defaultValue={profileData?.instagramUrl}
                />
              </FormControl>
            </Flex>
            <Flex w="100%">
              <FormControl mr="10px">
                <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                  Twitter Url
                </FormLabel>
                <Input
                  type="url"
                  borderRadius="md"
                  mb="5px"
                  fontSize="sm"
                  placeholder="Enter url..."
                  size="lg"
                  defaultValue={profileData?.twitterUrl}
                />
              </FormControl>
              <FormControl>
                <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                  Github Url
                </FormLabel>
                <Input
                  type="url"
                  borderRadius="md"
                  mb="5px"
                  fontSize="sm"
                  placeholder="Enter url..."
                  size="lg"
                  defaultValue={profileData?.githubUrl}
                />
              </FormControl>
            </Flex>
          </VStack>
        </ModalBody>
        <ModalFooter>
          <Button fontSize="sm" h="36px" mr={3} onClick={handleCloseEditModal}>
            Cancel
          </Button>
          <Button
            variant="outline"
            colorScheme="blue"
            minW="80px"
            h="36px"
            fontSize="sm"
            onClick={handleCloseEditModal}
          >
            Save
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default EditProfile;
