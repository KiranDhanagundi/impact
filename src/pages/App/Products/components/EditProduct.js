// import React, { useState } from "react";
// import {
//   Button,
//   FormControl,
//   FormLabel,
//   Input,
//   VStack,
//   HStack,
//   Image,
//   useToast,
//   Flex,
//   Grid,
//   Box,
//   Spacer,
//   Text,
//   Select,
// } from "@chakra-ui/react";
// import Card from "../../../../components/Card/Card";

// const EditProduct = () => {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [imageUrl, setImageUrl] = useState("");
//   const [category, setCategory] = useState("");
//   const [price, setPrice] = useState("");
//   const toast = useToast();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!title || !description || !imageUrl || !category || !price) {
//       toast({
//         title: "Error creating product.",
//         description: "Please fill in all the required fields.",
//         status: "error",
//         duration: 3000,
//         isClosable: true,
//       });
//       return;
//     }

//     const newProject = {
//       title,
//       imageUrl,
//       description,
//       category,
//       price,
//     };

//     console.log("New Project:", newProject);
//     toast({
//       title: "Product created successfully.",
//       status: "success",
//       duration: 3000,
//       isClosable: true,
//     });
//   };

//   return (
//     <Flex mt="10px" w="100%" minH="90vH" overflow="auto" direction="column">
//       <Grid
//         templateColumns={{ sm: "1fr", md: "1fr", xl: "1fr 1fr" }}
//         templateRows={{ sm: "1fr 1fr 1fr auto", md: "1fr 1fr", xl: "1fr" }}
//         gap="4px"
//       >
//         <Box
//           borderWidth="1px"
//           borderRadius="md"
//           overflow="hidden"
//           width="auto"
//           boxShadow="sm"
//           p="2"
//           bg="white"
//           m="2px"
//         >
//           <Text fontWeight={"bold"} color={"#0648b3"}>
//             Edit Product
//           </Text>
//           <VStack as="form" onSubmit={handleSubmit} w="100%" spacing="4">
//             <FormControl isRequired id="title">
//               <FormLabel>Product Title</FormLabel>
//               <Input
//                 type="text"
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//               />
//             </FormControl>
//             <FormControl isRequired id="imageUrl">
//               <FormLabel> Product Imags</FormLabel>
//               <Input
//                 type="file"
//                 value={imageUrl}
//                 onChange={(e) => setImageUrl(e.target.value)}
//               />
//             </FormControl>
//             <FormControl isRequired id="description">
//               <FormLabel>Description</FormLabel>
//               <Input
//                 type="text"
//                 value={description}
//                 onChange={(e) => setDescription(e.target.value)}
//               />
//             </FormControl>
//             <FormControl isRequired>
//               <FormLabel>Category</FormLabel>
//               <Select placeholder="Select...">
//                 <option>Technology</option>
//                 <option>Art</option>
//                 value={category}
//                 onChange={(e) => setCategory(e.target.value)}
//               </Select>
//             </FormControl>
//             <FormControl isRequired id="price">
//               <FormLabel>Price</FormLabel>
//               <Input
//                 type="text"
//                 value={price}
//                 onChange={(e) => setPrice(e.target.value)}
//               />
//             </FormControl>
//             <Flex>
//               <Button
//                 variant="outline"
//                 colorScheme="blue"
//                 minW="90px"
//                 h="36px"
//                 fontSize="xs"
//                 mr="100px"
//               >
//                 Prev
//               </Button>
//               <Spacer />
//               <Button
//                 variant="outline"
//                 colorScheme="blue"
//                 minW="90px"
//                 h="36px"
//                 fontSize="xs"
//                 type="submit"
//               >
//                 Next
//               </Button>
//             </Flex>
//           </VStack>
//         </Box>
//       </Grid>
//     </Flex>
//   );
// };

// export default EditProduct;

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
  VStack,
  HStack,
  Image,
  useToast,
  Flex,
  Grid,
  Box,
  Spacer,
  Text,
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

// import React, { useState } from "react";
// import {
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalFooter,
//   ModalBody,
//   ModalCloseButton,
//   Button,
//   Input,
//   Textarea,
//   FormControl,
//   FormLabel,
//   VStack,
//   Image,
//   useToast,
//   Flex,
//   Spacer,
//   Tabs,
//   TabList,
//   TabPanels,
//   Tab,
//   TabPanel,
// } from "@chakra-ui/react";

// const EditProductModal = ({ isOpen, onClose, product, onSave }) => {
//   const [editedProduct, setEditedProduct] = useState(product);
//   const [activeTab, setActiveTab] = useState(0);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setEditedProduct((prevProduct) => ({
//       ...prevProduct,
//       [name]: value,
//     }));
//   };

//   const handleSave = () => {
//     onSave(editedProduct);
//     onClose();
//   };

//   return (
//     <Modal size="4xl" isOpen={isOpen} onClose={onClose}>
//       <ModalOverlay />
//       <ModalContent>
//         <ModalHeader>Edit Product</ModalHeader>
//         <ModalCloseButton />
//         <Tabs
//           align="center"
//           colorScheme="blue"
//           isLazy
//           index={activeTab}
//           onChange={(index) => setActiveTab(index)}
//         >
//           <TabList mb="4">
//             <Tab>Title</Tab>
//             <Tab>Images</Tab>
//             <Tab>Price</Tab>
//           </TabList>

//           <TabPanels>
//             <TabPanel>
//               <ModalBody>
//                 {/* Title Tab */}
//                 <FormControl mb="4">
//                   <FormLabel>Title</FormLabel>
//                   <Input
//                     type="text"
//                     name="title"
//                     value={editedProduct.title}
//                     onChange={handleInputChange}
//                     placeholder="Enter product title"
//                   />
//                 </FormControl>
//                 {/* Other title-related input fields */}
//               </ModalBody>
//             </TabPanel>
//             <TabPanel>
//               <ModalBody>
//                 {/* Images Tab */}
//                 <FormControl isRequired mb="4">
//                   <FormLabel>Product Images</FormLabel>
//                   <Image
//                     src={editedProduct.imageUrl}
//                     alt={editedProduct.title}
//                     boxSize={{ base: "200px", md: "100", sm: "80px" }}
//                     objectFit="cover"
//                     borderRadius="sm"
//                     minW={{ base: "150px", md: "100px", sm: "80px" }}
//                     minH={{ base: "150px", md: "100px", sm: "80px" }}
//                     mr="1px"
//                   />
//                   <Input
//                     type="file"
//                     // Implement file upload functionality
//                     // onChange={(e) => handleImageUpload(e)}
//                   />
//                 </FormControl>
//                 {/* Other image-related input fields */}
//               </ModalBody>
//             </TabPanel>
//             <TabPanel>
//               <ModalBody>
//                 {/* Price Tab */}
//                 <FormControl mb="4">
//                   <FormLabel>Price</FormLabel>
//                   <Input
//                     type="number"
//                     name="price"
//                     value={editedProduct.price}
//                     onChange={handleInputChange}
//                     placeholder="Enter product price"
//                   />
//                 </FormControl>
//                 {/* Other price-related input fields */}
//               </ModalBody>
//             </TabPanel>
//           </TabPanels>

//           <ModalFooter>
//             <Button variant="outline" mr={3} onClick={onClose}>
//               Cancel
//             </Button>
//             {activeTab < 2 && (
//               <Button
//                 colorScheme="blue"
//                 onClick={() => setActiveTab((prevTab) => prevTab + 1)}
//               >
//                 Next
//               </Button>
//             )}
//             {activeTab === 2 && (
//               <Button colorScheme="blue" onClick={handleSave}>
//                 Save
//               </Button>
//             )}
//           </ModalFooter>
//         </Tabs>
//       </ModalContent>
//     </Modal>
//   );
// };

// export default EditProductModal;
