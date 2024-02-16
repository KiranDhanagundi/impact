import React, { useState, useEffect } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Text,
  Box,
  HStack,
  Divider,
  Stack,
  Spacer,
} from "@chakra-ui/react";
import axios from "axios";
import { FaFileDownload } from "react-icons/fa";

const PaymentDetails = ({ orderId, isOpen, onClose }) => {
  const [paymentDetails, setPaymentDetails] = useState(null);
  // const [setIsLoading] = useState(false);

  const timelineData = [
    {
      title: "Payment",
      amount: "$0.25 USD",
      status: "Succeeded",
      time: "Feb 6, 8:16 PM",
      notes: [],
      subtitle: "Payment",
    },
    {
      title: "Payment method",
      amount: "VISA .... 4242",
      status: "",
      time: "Feb 6, 2024, 8:16 PM",
      notes: [],
      subtitle: "Payment started",
    },
    {
      title: "Risk evaluation",
      amount: "3 Normal",
      status: "",
      time: "",
      notes: [
        {
          note:
            "Ⓒ 3D Secure was attempted for this payment, but the customer hasn't been verified by their bank. This payment may still be protected from being disputed for fraud.",
          time: "Feb 6, 2024, 8:16 PM",
        },
      ],
      subtitle: "",
    },
    {
      title: "Refund",
      amount: "",
      status: "",
      time: "Feb 6, 2024, 8:16 PM",
      notes: [
        {
          note:
            "3D Secure was completed, but the customer hasn't been verified because the bank does not support 3D Secure, has not set up 3D Secure for the card, or is experiencing an outage. The card network has provided proof of the attempt.",
          time: "",
        },
      ],
      subtitle: "3D Secure attempt acknowledged",
    },
  ];

  useEffect(() => {
    // Fetch payment details based on the order ID
    const fetchPaymentDetails = async () => {
      // setIsLoading(true); // Set loading state to true when fetching
      try {
        const response = await axios.get(
          `/stripe/api/paymentdetails/${orderId}`
        );
        setPaymentDetails(response.data);
      } catch (error) {
        console.error("Error fetching payment details:", error);
      } finally {
        // setIsLoading(false); // Set loading state to false when done fetching
      }
    };

    // Fetch payment details only when the modal is open and the orderId or isOpen prop changes
    if (isOpen && orderId) {
      fetchPaymentDetails();
    } else {
      // Clear payment details when the modal is closed or orderId is not provided
      setPaymentDetails(null);
    }
  }, [isOpen, orderId]);

  console.log("PaymentDetails", paymentDetails);
  return (
    <Modal w="auto" size="xl" isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <ModalHeader color="#0648b3">Payment Details</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box w="100%" maxW="600px" mx="auto">
            <HStack justifyContent="space-between" w="100%">
              <Spacer />
              <Button
                leftIcon={<FaFileDownload />}
                boxShadow="sm"
                variant="outline"
                color={"#0a48b3"}
                h="30px"
                fontSize="xs"
                ml="4px"
                mb="2px"
                p="8px"
                minW="53px"
                // onClick={handleEditClick}
              >
                Invoice
              </Button>
            </HStack>
            <Divider />
            <Stack spacing={4} mt={4}>
              {timelineData.map((item, index) => (
                <Box key={index}>
                  <HStack justifyContent="space-between" w="100%">
                    <Box>
                      <Text fontWeight="bold">{item.title}</Text>
                      <Text color="gray.500">{item.amount}</Text>
                      {item.status && (
                        <Text color="green.500">{item.status}</Text>
                      )}
                    </Box>
                    <Box>
                      <Text color="gray.500">{item.time}</Text>
                      {item.subtitle && (
                        <Text color="gray.500">{item.subtitle}</Text>
                      )}
                    </Box>
                  </HStack>
                  {item.notes.map((note, noteIndex) => (
                    <Box key={noteIndex}>
                      <Text color="gray.500">{note.note}</Text>
                      <Text color="gray.500" fontSize="sm">
                        {note.time}
                      </Text>
                    </Box>
                  ))}
                  {index < timelineData.length - 1 && <Divider />}
                </Box>
              ))}
            </Stack>
          </Box>
        </ModalBody>
        <ModalFooter>
          <Button minW="80px" h="36px" fontSize="sm" onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default PaymentDetails;
