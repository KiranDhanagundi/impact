import {
  Box,
  Flex,
  Text,
  Button,
  Stack,
  Link,
  Icon,
  Grid,
  Tabs,
  Tab,
  TabPanel,
  TabPanels,
  TabList,
  Avatar,
  useDisclosure,
  Tooltip,
  useClipboard,
  IconButton,
  Divider,
} from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import UserProjects from "./UserProjects";
import EditProfile from "./EditProfile";
import { Link as ReactRouterLink } from "react-router-dom";
import { FaShareAlt } from "react-icons/fa";

const Profile = () => {
  const {
    isOpen: isEditModalOpen,
    onOpen: onEditModalOpen,
    onClose: onEditModalClose,
  } = useDisclosure();

  const profileInfo = {
    firstName: "Elon Musk",
    lastName: " Usa",
    fullName: "Elon Musk Usa",
    about:
      "Hi, I’m Elon Musk If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term.the answer is no. If two equally difficult paths, choose the one more painful in the short term",
    imageUrl: "https://bit.ly/sage-adebayo",
    email: "elonmusk@impact.com",
    mobile: "8095891156",
    location: "United States",
    socialMedia: {
      facebookUrl: "https://facebook",
      instagramUrl: "https://instagram",
      twitterUrl: "https://twitter",
    },
  };
  const products = [
    {
      title: "AI predictions: Top 13 AI trends for 2024",
      description:
        "Explore the future with our comprehensive guide to the top 13 AI trends anticipated for 2024.",
      imageUrl:
        "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*0DoUT3wzcxy89nm1tkd0qQ.png",
      author: "John Doe",
      dateTime: "Jan 1,2024",
      price: "2",
      avatar: "https://bit.ly/sage-adebayo",
      category: "Technology",
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
  const profileUrl = window.location.href;

  const { hasCopied, onCopy } = useClipboard(profileUrl);

  return (
    <Flex mt="10px" w="100%" minH="90vH" overflow="auto" direction="column">
      <Box
        borderWidth="1px"
        borderRadius="md"
        overflow="hidden"
        width="auto"
        boxShadow="md"
        p="2"
        bg="white"
      >
        <Stack
          direction={{ base: "column", sm: "column", md: "row", xl: "row" }}
          spacing="8"
          width="full"
        >
          <Flex direction="column">
            <Flex minW="200px" align="center" direction="column">
              <Avatar
                size="2xl"
                mb="10px"
                name={profileInfo.fullName}
                src="https://bit.ly/sage-adebayo"
              />
              <Text mb="5px" fontSize="md" fontWeight="bold" color="gray.900">
                {profileInfo.fullName}
              </Text>
            </Flex>
            <Flex justify="center" align="center" direction="row" mb="10px">
              <Button
                variant="outline"
                colorScheme="blue"
                W="70px"
                h="36px"
                fontSize="xs"
                mr="10px"
                onClick={onEditModalOpen}
              >
                Edit Profile
              </Button>
              <EditProfile
                profileInfo={profileInfo}
                isOpen={isEditModalOpen}
                onClose={onEditModalClose}
              />
              <Tooltip
                bg="white"
                color="gray.900"
                label={hasCopied ? "Copied!" : "Copy profile link"}
                hasArrow
              >
                <IconButton
                  icon={<FaShareAlt />}
                  aria-label="Share profile"
                  onClick={onCopy}
                  colorScheme={hasCopied ? "blue" : "gray"}
                />
              </Tooltip>
            </Flex>
          </Flex>
          <Stack spacing="0.5">
            <Box mb="10px" align={"start"} minH={"100px"}>
              <Text
                fontSize="md"
                color="gray.700"
                fontWeight="normal"
                me="10px"
              >
                About:{" "}
              </Text>
              <Text fontSize="md" color="gray.500" fontWeight="400">
                {profileInfo.about}
              </Text>
            </Box>
            <Divider />
            <Box align={"start"} H={"100px"}>
              <Flex mt="10px" align="center">
                <Text
                  fontSize="md"
                  color="gray.700"
                  fontWeight="normal"
                  me="10px"
                >
                  Email:{" "}
                </Text>
                <Text fontSize="md" color="gray.500" fontWeight="400">
                  {profileInfo.email}
                </Text>
              </Flex>
              <Flex align="center">
                <Text
                  fontSize="md"
                  color="gray.700"
                  fontWeight="normal"
                  me="10px"
                >
                  mobile:{" "}
                </Text>
                <Text fontSize="md" color="gray.500" fontWeight="400">
                  {profileInfo.mobile}
                </Text>
              </Flex>
              <Flex align="center">
                <Text
                  fontSize="md"
                  color="gray.700"
                  fontWeight="normal"
                  me="10px"
                >
                  Location:{" "}
                </Text>
                <Text fontSize="md" color="gray.500" fontWeight="400">
                  {profileInfo.location}
                </Text>
              </Flex>
              <Flex align="center">
                <Text
                  fontSize="md"
                  color="gray.700"
                  fontWeight="normal"
                  me="10px"
                >
                  Social Media:{" "}
                </Text>
                <Flex>
                  <Link
                    href="#"
                    color="blue.500"
                    fontSize="lg"
                    me="10px"
                    _hover={{ color: "blue.200" }}
                  >
                    <Icon as={FaFacebook} />
                  </Link>
                  <Link
                    href="#"
                    color="blue.500"
                    fontSize="lg"
                    me="10px"
                    _hover={{ color: "blue.200" }}
                  >
                    <Icon as={FaInstagram} />
                  </Link>
                  <Link
                    href="#"
                    color="blue.500"
                    fontSize="lg"
                    me="10px"
                    _hover={{ color: "blue.200" }}
                  >
                    <Icon as={FaTwitter} />
                  </Link>
                </Flex>
              </Flex>
            </Box>
          </Stack>
        </Stack>
      </Box>
      <Box>
        <Tabs align="start" size="md" variant="line">
          <TabList bg="gray.100">
            <Tab>Products</Tab>
            <Tab>Profile</Tab>
            <Tab>Dashboard</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Grid
                templateColumns={{ sm: "1fr", md: "1fr", xl: "1fr 1fr" }}
                templateRows={{
                  sm: "1fr 1fr 1fr auto",
                  md: "1fr 1fr",
                  xl: "1fr",
                }}
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
                >
                  <Flex
                    direction="column"
                    justifyContent="center"
                    align="center"
                  >
                    <Icon as={FaPlus} fontSize="md" mb="12px" />
                    <Link
                      fontSize="md"
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
            </TabPanel>
            <TabPanel>
              <p>Profile</p>
            </TabPanel>
            <TabPanel>
              <p>Dashboard</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Flex>
  );
};

export default Profile;
