import React, { useState, useEffect } from "react";
import {
  Box,
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

function EditProfile({ isOpen, onClose, profileInfo }) {
  const [showProfile, setShowProfile] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const handleClick = () => {
    setShowProfile(true);
  };

  const handleEditProfile = () => {
    setShowEditModal(true);
  };

  useEffect(() => {
    // You can use the profileInfo prop to update the state or perform any other actions
    // For example, setShowEditModal(true) to show the modal initially when profileInfo is available
  }, [profileInfo]);

  const handleCloseEditModal = () => {
    setShowEditModal(false);
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
                name={profileInfo.fullName}
                src="https://bit.ly/sage-adebayo"
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
                defaultValue={profileInfo.about}
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
                  defaultValue={profileInfo.fullName}
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
                  defaultValue={profileInfo.email}
                />
              </FormControl>
            </Flex>
            <Flex w="100%">
              <FormControl mr="10px">
                <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                  Mobile
                </FormLabel>
                <Input
                  type="tel"
                  borderRadius="md"
                  mb="5px"
                  fontSize="sm"
                  placeholder="Enter mobile..."
                  size="lg"
                  defaultValue={profileInfo.mobile}
                />
              </FormControl>
              <FormControl>
                <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                  Location
                </FormLabel>
                <Input
                  type="text"
                  borderRadius="md"
                  mb="5px"
                  fontSize="sm"
                  placeholder="Enter location..."
                  size="lg"
                  defaultValue={profileInfo.location}
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
                  defaultValue={profileInfo.socialMedia.facebookUrl}
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
                  defaultValue={profileInfo.socialMedia.instagramUrl}
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
                  defaultValue={profileInfo.socialMedia.twitterUrl}
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
                  defaultValue={profileInfo.socialMedia.twitterUrl}
                />
              </FormControl>
            </Flex>
          </VStack>
        </ModalBody>

        <ModalFooter>
          <Button mr={3} onClick={handleCloseEditModal}>
            Cancel
          </Button>
          <Button
            variant="outline"
            colorScheme="blue"
            minW="90px"
            h="36px"
            fontSize="xs"
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
