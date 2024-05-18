import React, { useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Text,
  useToast,
} from "@chakra-ui/react";

// Function to generate a random 6-digit OTP
const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000);
};

const ResetPassword = ({ showResetModal, setShowResetModal }) => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const toast = useToast();

  // Function to handle verifying email and sending OTP
  const handleVerifyEmail = () => {
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    // Generate random 6-digit OTP
    const generatedOTP = generateOTP();

    // Mock sending OTP via email using AWS SES (replace with your implementation)
    console.log(`Sending OTP ${generatedOTP} to ${email}...`);

    // Store the OTP and mark email as verified
    setOtp(generatedOTP);
    setIsEmailVerified(true);

    // Show success message
    toast({
      title: "Email Sent",
      description: "Verification email sent successfully.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  // Function to handle resetting password
  const handleResetPassword = () => {
    // Perform password reset logic here (e.g., call API to update password)
    console.log(`Resetting password for ${email} with new password: ${newPassword}`);

    // Show success message
    toast({
      title: "Password Reset",
      description: "Your password has been successfully reset.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });

    // Close the modal after password reset
      setEmail("")
      setOtp("")
      setIsEmailVerified(false)
    setShowResetModal(false);
  };

  return (
    <Modal isOpen={showResetModal} isCentered="true" onClose={() => setShowResetModal(false)}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Reset Password</ModalHeader>
        <ModalBody>
          {!isEmailVerified ? (
            <>
              <Text>
                Please enter your email address to reset your password.
              </Text>
              <FormControl mt="4">
                <FormLabel>Email Address</FormLabel>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
                          <Button
                              size="sm"
                mt="4"
                              colorScheme="green"
                              fontSize="sm"
                              boxShadow="sm"
                              fontWeight='normal'
                onClick={handleVerifyEmail}
              >
                Verify Email
              </Button>
            </>
          ) : (
            <>
              <Text>
                An email has been sent to <strong>{email}</strong>. Please check your inbox
                for the OTP to proceed with resetting your password.
              </Text>
              <FormControl mt="4">
                <FormLabel>Enter OTP</FormLabel>
                <Input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
              </FormControl>
              <FormControl mt="4">
                <FormLabel>New Password</FormLabel>
                <Input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </FormControl>
                              <Button
                                  size="sm"
                                  mt="4"
                                  fontSize="sm"
                colorScheme="green"
                                  boxShadow="sm"
                                  fontWeight='normal'
                                  
                onClick={handleResetPassword}
              >
                Reset Password
              </Button>
            </>
          )}
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="gray" fontWeight='normal' size="sm" fontSize="sm" boxShadow="sm" onClick={() => setShowResetModal(false)}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ResetPassword;
