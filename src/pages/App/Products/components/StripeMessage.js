import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

export const StripeMessage = () => {
  const [status, setStatus] = useState(null);
  const [customerEmail, setCustomerEmail] = useState("");
  const [isOpen] = useState(true);
  const history = useHistory();

  const handleNavigateToCart = () => {
    history.push("/app/cart");
  };

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const sessionId = urlParams.get("session_id");

    fetch(`/session-status?session_id=${sessionId}`)
      .then((res) => res.json())
      .then((data) => {
        setStatus(data.status);
        setCustomerEmail(data.customer_email);
      });
  }, []);

  if (status === "open") {
    return <Link to="/app/checkout" />;
  }

  if (status === "complete") {
    return (
      <Modal isOpen={isOpen} onClose={handleNavigateToCart} isCentered={true}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color="green">Success!</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>
              We appreciate your business! A confirmation email will be sent to{" "}
              {customerEmail}. If you have any questions, please email{" "}
              <a href="mailto:orders@example.com">customerservice@impact.com</a>
              .
            </p>
          </ModalBody>
          <ModalFooter>
            <Button
              fontWeight="normal"
              colorScheme="green"
              onClick={handleNavigateToCart}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
  }

  return null;
};
