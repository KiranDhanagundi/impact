import {
  Box,
  Flex,
  Image,
  Text,
  Button,
  Spacer,
  Stack,
  Link,
  Icon,
  Grid,
  Heading,
} from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";
import CreateProject from "../../Notifications/components/Notification";

import { Link as ReactRouterLink } from "react-router-dom";

import UserProjects from "../../Profile/components/UserProjects";
import { Navigate } from "react-router";

const Products = ({}) => {
  const products = [
    {
      title: "AI predictions: Top 13 AI trends for 2024",
      description:
        "Explore the future with our comprehensive guide to the top 13 AI trends anticipated for 2024.",
      imageUrl:
        "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*0DoUT3wzcxy89nm1tkd0qQ.png",
      author: "John Doe",
      dateTime: "Jan 1,2024",
      // rating:"20"
      price: "5",
      avatar: "https://bit.ly/sage-adebayo",
      numberOfDownloads: "200",
    },
    {
      title: "UX/UI Design Trends Going Into 2024",
      description:
        "Description for Product UX/UI Design Trends Going Into 2024",
      imageUrl:
        "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*Nm1_iC89eUi3Eb0JeVqUPg.jpeg",
      author: "John Doe",
      dateTime: "Jan 1,2024",
      price: "1",
      avatar: "https://bit.ly/sage-adebayo",
      numberOfDownloads: "200",
    },
    {
      title:
        "The Making of Apple’s Emoji: How designing these tiny icons changed my life",
      description:
        "Description for ProductThe Making of Apple’s Emoji: How designing these tiny icons changed my life",
      imageUrl:
        "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*BniKIhT3c54sIEuPtzRQKw.jpeg",
      author: "John Doe",
      dateTime: "Jan 1,2024",
      price: "0",
      avatar: "https://bit.ly/sage-adebayo",
      numberOfDownloads: "200",
    },
    {
      title: "UX/UI Design Trends Going Into 2024",
      description:
        "Description for Product UX/UI Design Trends Going Into 2024",
      imageUrl:
        "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*Nm1_iC89eUi3Eb0JeVqUPg.jpeg",
      author: "John Doe",
      dateTime: "Jan 5,2024",
      price: "5",
      avatar: "https://bit.ly/sage-adebayo",
      numberOfDownloads: "200",
    },
    {
      title: "AI predictions: Top 13 AI trends for 2024",
      description:
        "Explore the future with our comprehensive guide to the top 13 AI trends anticipated for 2024.",
      imageUrl:
        "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*0DoUT3wzcxy89nm1tkd0qQ.png",
      author: "John Doe",
      dateTime: "Jan 1,2024",
      // rating:"20"
      price: "5",
      avatar: "https://bit.ly/sage-adebayo",
      numberOfDownloads: "200",
    },
  ];
  // const handleCreateNewProject = () => {
  //   Navigate("/app/notifications");
  // };
  // <Route path="/app / notifications" component={CreateProject} />;

  return (
    <Flex mt="10px" w="100%" minH="90vH" overflow="auto" direction="column">
      <Box align="start" mb="10px">
        <Heading as="h4" size="md">
          My Products
        </Heading>
      </Box>

      <Grid
        templateColumns={{ sm: "1fr", md: "1fr", xl: "1fr 1fr" }}
        templateRows={{ sm: "1fr 1fr 1fr auto", md: "1fr 1fr", xl: "1fr" }}
        gap="4px"
      >
        <Button
          p="0px"
          bg="transparent"
          color="gray.500"
          borderWidth="1px "
          borderRadius="md"
          h="170px"
          mb="2px"
          // onClick={handleCreateNewProject}
        >
          <Flex direction="column" justifyContent="center" align="center">
            <Icon as={FaPlus} fontSize="md" mb="12px" />
            <Link
              fontSize="md"
              // color="#0648b3"
              as={ReactRouterLink}
              ms="5px"
              fontWeight="normal"
              to="/app/newproduct"
            >
              Create a New Project
            </Link>
          </Flex>
        </Button>
        {products.map((product, index) => (
          <UserProjects key={index} product={product} />
        ))}
      </Grid>
    </Flex>
  );
};

export default Products;
