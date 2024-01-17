import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  Textarea,
  FormControl,
  FormLabel,
  // VStack,
  // HStack,
  Image,
  // useToast,
  Flex,
  // Grid,
  // Box,
  Spacer,
  // Text,
  Select,
} from "@chakra-ui/react";

const EditProductModal = ({ isOpen, onClose, product, onSave }) => {
  const [editedProduct, setEditedProduct] = useState(product);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSave = () => {
    onSave(editedProduct);
    onClose();
  };

  return (
    <Modal size="4xl" isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader color={"#0648b3"}>Edit Product</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl mb="4">
            <FormLabel>Title</FormLabel>
            <Input
              type="text"
              name="title"
              value={editedProduct.title}
              onChange={handleInputChange}
              placeholder="Enter product title"
            />
          </FormControl>
          <FormControl isRequired id="imageUrl">
            <FormLabel> Product Imags</FormLabel>
            <Image
              src={editedProduct.imageUrl}
              alt={editedProduct.title}
              boxSize={{ base: "200px", md: "100", sm: "80px" }}
              objectFit="cover"
              borderRadius="sm"
              minW={{ base: "150px", md: "100px", sm: "80px" }}
              minH={{ base: "150px", md: "100px", sm: "80px" }}
              mr="1px"
            />

            <Input
              type="file"
              // value={editedProduct.imageUrl}
              // onChange={(e) => setImageUrl(e.target.value)}
            />
          </FormControl>
          <FormControl mb="4">
            <FormLabel>Description</FormLabel>
            <Textarea
              name="description"
              value={editedProduct.description}
              onChange={handleInputChange}
              placeholder="Enter product description"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Category</FormLabel>
            <Select placeholder="Select...">
              <option>Technology</option>
              <option>Art</option>
              value={editedProduct.category}
              {/* onChange={(e) => setCategory(e.target.value)} */}
            </Select>
          </FormControl>
          <FormControl mb="4">
            <FormLabel>Price</FormLabel>
            <Input
              type="number"
              name="price"
              value={editedProduct.price}
              onChange={handleInputChange}
              placeholder="Enter product price"
            />
          </FormControl>
          <Flex>
            <Button
              variant="outline"
              colorScheme="blue"
              minW="90px"
              h="36px"
              fontSize="xs"
              mr="100px"
            >
              Prev
            </Button>
            <Spacer />
            <Button
              variant="outline"
              colorScheme="blue"
              minW="90px"
              h="36px"
              fontSize="xs"
              type="submit"
            >
              Next
            </Button>
          </Flex>
          {/* </VStack> */}
        </ModalBody>

        <ModalFooter>
          <Button variant="outline" mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button colorScheme="blue" onClick={handleSave}>
            Save
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default EditProductModal;
