import React from "react";

const Order = () => {
  return <div>Order</div>;
};

export default Order;

// import React, { useState } from "react";
// import {
//   Box,
//   Button,
//   Input,
//   Text,
//   VStack,
//   Heading,
//   Stepper,
//   Step,
//   StepperLabel,
//   StepperButton,
//   StepConnector,
//   StepContent,
// } from "@chakra-ui/react";

// const AddProductForm = () => {
//   const [productName, setProductName] = useState("");
//   const [productImage, setProductImage] = useState("");
//   const [productDescription, setProductDescription] = useState("");
//   const [productPrice, setProductPrice] = useState("");

//   const steps = [
//     {
//       title: "Product Name",
//       component: (
//         <Input
//           value={productName}
//           onChange={(e) => setProductName(e.target.value)}
//           placeholder="Enter product name"
//         />
//       ),
//     },
//     {
//       title: "Product Image",
//       component: (
//         <Input
//           value={productImage}
//           onChange={(e) => setProductImage(e.target.value)}
//           placeholder="Enter product image URL"
//         />
//       ),
//     },
//     {
//       title: "Product Description",
//       component: (
//         <Input
//           value={productDescription}
//           onChange={(e) => setProductDescription(e.target.value)}
//           placeholder="Enter product description"
//         />
//       ),
//     },
//     {
//       title: "Product Price",
//       component: (
//         <Input
//           value={productPrice}
//           onChange={(e) => setProductPrice(e.target.value)}
//           placeholder="Enter product price"
//         />
//       ),
//     },
//   ];

//   const [activeStep, setActiveStep] = useState(0);

//   const handleNext = () => {
//     // Perform any necessary validation before moving to the next step
//     // For simplicity, let's assume all fields are required

//     // Move to the next step
//     setActiveStep((prevStep) => prevStep + 1);
//   };

//   const handleFinish = () => {
//     // Handle submission of the product data
//     // You can send the data to the server or perform any other necessary actions
//     console.log("Product Name:", productName);
//     console.log("Product Image:", productImage);
//     console.log("Product Description:", productDescription);
//     console.log("Product Price:", productPrice);
//   };

//   return (
//     <Box p={5} borderWidth="1px" borderRadius="md">
//       <Heading mb={4}>Add New Product</Heading>
//       <Stepper activeStep={activeStep} colorScheme="blue">
//         {steps.map((step, index) => (
//           <Step key={index} isComplete={index < activeStep}>
//             <StepperButton onClick={() => setActiveStep(index)}>
//               <StepperLabel>{step.title}</StepperLabel>
//             </StepperButton>
//             {index < steps.length - 1 && <StepConnector />}
//             <StepContent>
//               <VStack spacing={4} align="stretch">
//                 {step.component}
//                 <Button
//                   colorScheme="blue"
//                   onClick={
//                     index === steps.length - 1 ? handleFinish : handleNext
//                   }
//                   isDisabled={!step.component || index < activeStep}
//                 >
//                   {index === steps.length - 1 ? "Finish" : "Next"}
//                 </Button>
//               </VStack>
//             </StepContent>
//           </Step>
//         ))}
//       </Stepper>
//     </Box>
//   );
// };

// export default AddProductForm;
