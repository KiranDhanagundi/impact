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
  Input,
  Icon,
  Divider,
  Text,
  Badge,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  IconButton,
} from "@chakra-ui/react";
import Card from "../../../../components/Card/Card";
import { FaSort, FaEllipsisV } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import PaymentDetails from "./PaymentDetails";

const SellOrders = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const Pages = 20; // Set the number of users per page
  const [allTransactions, SetAllTransactions] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOrderId, setSelectedOrderId] = useState(null); // Store the selected order ID
  const [isPaymentDetailsOpen, setIsPaymentDetailsOpen] = useState(false);

  // Calculate current users to display based on pagination
  const indexOfLastUser = currentPage * Pages;
  const indexOfFirstUser = indexOfLastUser - Pages;
  const currentUsers = allTransactions?.data
    ?.filter((transaction) => {
      if (searchTerm === "") {
        return true; // Include all transactions if searchTerm is empty
      } else {
        return (
          transaction.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
          transaction.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (transaction.status &&
            transaction.status.toLowerCase().includes(searchTerm.toLowerCase()))
        );
      }
    })
    ?.slice(indexOfFirstUser, indexOfLastUser);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    // fetch Transactions on page load
    fetch("/v1/treasury/transactions", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => SetAllTransactions(data.transactions));
  }, []);

  function formatUnixTimestamps(date) {
    const createdDate = new Date(date * 1000); // Convert Unix timestamp to milliseconds
    const formattedDate = createdDate.toLocaleDateString("en-US", {
      timeZone: "UTC",
    }); // Format date
    return formattedDate; // Update the transaction object with the formatted date
  }

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleOpenPaymentDetails = (orderId) => {
    setSelectedOrderId(orderId);
    setIsPaymentDetailsOpen(true);
  };

  // Function to handle closing of PaymentDetails modal
  const handleClosePaymentDetails = () => {
    setIsPaymentDetailsOpen(false);
  };

  return (
    <Flex mt="10px" w="100%" minH="90vH" overflow="auto">
      {allTransactions ? (
        <Card p="2" w="100%" boxShadow="md" borderRadius="md" borderWidth="1px">
          <Flex
            w="auto"
            mb="5px"
            justifyContent="space-between"
            alignItems="center"
          >
            <Input
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearchChange}
              borderRadius="md"
              size="sm"
              mr="10px"
            />
          </Flex>
          <Divider />
          <Table variant="simple" size="sm">
            <Thead>
              <Tr>
                <Th>
                  <Flex alignItems="center">
                    ID
                    <Icon as={FaSort} ml="5px" />
                  </Flex>
                </Th>
                <Th>
                  <Flex alignItems="center">
                    Amount
                    <Icon as={FaSort} ml="5px" />
                  </Flex>
                </Th>
                <Th>
                  <Flex alignItems="center">
                    Payment Method
                    <Icon as={FaSort} ml="5px" />
                  </Flex>
                </Th>
                <Th>
                  <Flex alignItems="center">
                    Email
                    <Icon as={FaSort} ml="5px" />
                  </Flex>
                </Th>
                <Th>
                  <Flex alignItems="center">
                    Status <Icon as={FaSort} ml="5px" />
                  </Flex>
                </Th>
                <Th>
                  <Flex alignItems="center">
                    Updated Date <Icon as={FaSort} ml="5px" />
                  </Flex>
                </Th>
                <Th>
                  <Flex alignItems="center">Actions</Flex>
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {currentUsers?.map((item) => (
                <Tr key={item.id}>
                  <Td>{item.id}</Td>
                  <Td>${item.amount_received}</Td>
                  <Td>{item.payment_method_types[0]}</Td>
                  <Td>{item.email}</Td>
                  <Td>
                    {item.status && (
                      <Badge mr="10px" colorScheme="green">
                        {item.status}{" "}
                      </Badge>
                    )}
                  </Td>
                  <Td>{formatUnixTimestamps(item.created)}</Td>
                  <Td>
                    <Popover>
                      <PopoverTrigger>
                        <IconButton
                          icon={<FaEllipsisV />}
                          variant="ghost"
                          colorScheme="gray"
                          size="xs"
                        />
                      </PopoverTrigger>
                      <PopoverContent w="150px">
                        <PopoverArrow />
                        <PopoverBody>
                          <Button
                            size="xs"
                            variant="outline"
                            onClick={() => handleOpenPaymentDetails(item.id)}
                          >
                            Payment Details
                          </Button>
                        </PopoverBody>
                      </PopoverContent>
                    </Popover>
                  </Td>
                  <PaymentDetails
                    orderId={selectedOrderId} // Pass the selected order ID to the PaymentDetails component
                    isOpen={isPaymentDetailsOpen} // Pass isOpen state to determine if the modal should be open
                    onClose={handleClosePaymentDetails} // Pass onClose function to handle modal close
                  />
                </Tr>
              ))}
            </Tbody>
          </Table>
          <Box align="start" mt={1}>
            {Array.from({
              length: Math.ceil(allTransactions?.data?.length / Pages),
            }).map((_, index) => (
              <Button key={index} onClick={() => paginate(index + 1)} mx={1}>
                {index + 1}
              </Button>
            ))}
          </Box>
          <Text mt="5px">
            Results {Math.ceil(allTransactions?.data?.length)}
          </Text>
        </Card>
      ) : (
        <Text align="center">No data found</Text>
      )}
    </Flex>
  );
};
export default SellOrders;
