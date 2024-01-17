import React from "react";
import { Flex, Grid } from "@chakra-ui/react";
import Card from "../../../../components/Card/Card";
import CardBody from "../../../../components/Card/CardBody";

import ProductCard from "./ProjectCard";
import SearchBar from "./SearchBar";

const products = [
  {
    title: "AI predictions: Top 13 AI trends for 2024",
    description:
      "Explore the future with our comprehensive guide to the top 13 AI trends anticipated for 2024.",
    imageUrl:
      "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*0DoUT3wzcxy89nm1tkd0qQ.png",
    author: "John Doe",
    dateTime: "Jan 1,2024",
    price: "5",
    avatar: "https://bit.ly/sage-adebayo",
    numberOfDownloads: "500",
  },
  {
    title: "UX/UI Design Trends Going Into 2024",
    description: "Description for Product UX/UI Design Trends Going Into 2024",
    imageUrl:
      "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*Nm1_iC89eUi3Eb0JeVqUPg.jpeg",
    author: "John Doe",
    dateTime: "Jan 1,2024",
    price: "1",
    avatar: "https://bit.ly/sage-adebayo",
    numberOfDownloads: "100",
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
    numberOfDownloads: "100",
  },
  {
    title: "UX/UI Design Trends Going Into 2024",
    description: "Description for Product UX/UI Design Trends Going Into 2024",
    imageUrl:
      "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*Nm1_iC89eUi3Eb0JeVqUPg.jpeg",
    author: "John Doe",
    dateTime: "Jan 5,2024",
    price: "5",
    avatar: "https://bit.ly/sage-adebayo",
    numberOfDownloads: "100",
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
    numberOfDownloads: "100",
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
    price: "5",
    avatar: "https://bit.ly/sage-adebayo",
    numberOfDownloads: "100",
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
    price: "100",
    avatar: "https://bit.ly/sage-adebayo",
    numberOfDownloads: "100",
  },
  {
    title: "UX/UI Design Trends Going Into 2024",
    description: "Description for Product UX/UI Design Trends Going Into 2024",
    imageUrl:
      "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*Nm1_iC89eUi3Eb0JeVqUPg.jpeg",
    author: "John Doe",
    dateTime: "Jan 1,2024",
    price: "5",
    avatar: "https://bit.ly/sage-adebayo",
    numberOfDownloads: "100",
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
    price: "5",
    avatar: "https://bit.ly/sage-adebayo",
    numberOfDownloads: "100",
  },
  {
    title: "UX/UI Design Trends Going Into 2024",
    description: "Description for Product UX/UI Design Trends Going Into 2024",
    imageUrl:
      "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*Nm1_iC89eUi3Eb0JeVqUPg.jpeg",
    author: "John Doe",
    dateTime: "Jan 1,2024",
    price: "5",
    avatar: "https://bit.ly/sage-adebayo",
    numberOfDownloads: "100",
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
    numberOfDownloads: "100",
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
    price: "200",
    avatar: "https://bit.ly/sage-adebayo",
    numberOfDownloads: "100",
  },
  // Add more product objects as needed
];

const Home = () => {
  return (
    <Flex w="100%" minH="90vH" overflow="auto">
      <Card mt="10px" p="5px" bg="none">
        <SearchBar />
        <CardBody px="5px">
          <Grid
            templateColumns={{ sm: "1fr", md: "1fr", xl: "1fr 1fr" }}
            templateRows={{ sm: "1fr 1fr 1fr auto", md: "1fr 1fr", xl: "1fr" }}
            gap="4px"
          >
            {products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </Grid>
        </CardBody>
      </Card>
    </Flex>
  );
};

export default Home;
