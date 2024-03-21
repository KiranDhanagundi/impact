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
  Heading,
} from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import UserProjects from "./UserProjects";
import EditProfile from "./EditProfile";
import { Link as ReactRouterLink } from "react-router-dom";
import { FaShareAlt } from "react-icons/fa";
import { useEffect } from "react";
import { useSelector, connect } from "react-redux";
import * as actions from "../../Products/actions";

const Profile = ({ productList, fetchProducts }) => {
  const profileData = useSelector((state) => state?.auth?.userDetails);

  const {
    isOpen: isEditModalOpen,
    onOpen: onEditModalOpen,
    onClose: onEditModalClose,
  } = useDisclosure();

  const profileUrl = window.location.href;

  const { hasCopied, onCopy } = useClipboard(profileUrl);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  let productsLists = {};

  // Check if productList and its properties are defined
  if (productList && productList.products && productList.prices) {
    // Map over productList.products and combine prices
    productsLists = {
      products: productList.products.map((product) => {
        return {
          ...product,
          prices: productList.prices.filter(
            (price) => price.product === product.id
          ),
        };
      }),
    };
  }

  return (
    <Flex w="100%" minH="90vH" overflow="auto" direction="column">
      <Box align="start" mb="10px">
        <Heading as="h4" size="md">
          Profile
        </Heading>
      </Box>
      <Box
        borderWidth="1px"
        borderTopRadius="md"
        overflow="hidden"
        width="auto"
        boxShadow="xl"
        p="2"
        borderColor="lightgray"
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
                name={profileData?.name}
                src={profileData?.profileImage}
              />
              <Text mb="10px" fontSize="md" fontWeight="bold" color="gray.900">
                {profileData?.name}
              </Text>
            </Flex>
            <Flex justify="center" align="center" direction="row" mb="10px">
              <Button
                variant="outline"
                color={"#0a48b3"}
                W="70px"
                h="36px"
                fontSize="xs"
                mr="10px"
                onClick={onEditModalOpen}
              >
                Edit Profile
              </Button>
              <EditProfile
                profileData={profileData}
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
                  h="36px"
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
                About Me:{" "}
              </Text>
              <Text fontSize="md" color="gray.500" fontWeight="400">
                {profileData?.about}
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
                  {profileData?.email}
                </Text>
              </Flex>
              <Flex align="center">
                <Text
                  fontSize="md"
                  color="gray.700"
                  fontWeight="normal"
                  me="10px"
                >
                  Address:{" "}
                </Text>
                <Text fontSize="md" color="gray.500" fontWeight="400">
                  {profileData?.address}
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
            <TabPanel p="0px" mt="10px">
              <Grid
                templateColumns={{
                  sm: "1fr",
                  md: "1fr 1fr",
                  xl: "1fr 1fr 1fr",
                }}
                templateRows={{
                  sm: "1fr 1fr 1fr auto",
                  md: "1fr 1fr",
                  xl: "1fr",
                }}
                gap="8px"
              >
                <Button
                  p="0px"
                  bg="transparent"
                  color="gray.500"
                  borderWidth="1px "
                  borderRadius="xl"
                  borderColor="lightgray"
                  h="170px"
                  mb="2px"
                  boxShadow="md"
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
                {productsLists &&
                productsLists.products &&
                productsLists.products.length > 0 ? (
                  productsLists.products.map((product, index) => (
                    <UserProjects key={index} product={product} />
                  ))
                ) : (
                  <Text align="center">No data found</Text>
                )}
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

const mapStateToProps = (state) => ({
  productList: state.product.userProductList,
});

const mapDispatchToProps = {
  fetchProducts: actions.fetchUerProductsRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
