import React from 'react';
import { Box, Image, Button, SimpleGrid, useColorModeValue, Heading, Flex, Center, Divider } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
import securityprovider from '../../../assets/img/securityprovider.png';
import marketplace from '../../../assets/img/marketplace.png';

const OurProduct = () => {
  const history = useHistory();

    const handleExploreClick = (product) => {
        if (product.id === 1) {
            history.push('/app/home');
        } else {
            history.push('/app/iam/home');
        }
  };

  const products = [
    {
      id: 1,
      image: marketplace,
      alt: 'Market Place',
    },
    {
      id: 2,
      image: securityprovider,
      alt: 'IAM Security Provider',
    }
  ];

  return (
    <Flex direction="column"  align="center" justify="center" minH="30vh" p={4} mb='4px' bg="gray.50">
          <Heading  as="h2" size="xl" color={'#0648b3'} mb={1} >Our Products</Heading>
          <Divider mb={4}/>
      <Center w="100%">
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5} maxW="1200px" w="100%">
          {products.map((product) => (
            <Box
              key={product.id}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              boxShadow="lg"
              bg="white"
              w="100%"
              maxW="400px"
              mx="auto"
            >
              <Image src={product.image} alt={product.alt} w="100%" h='80%'  objectFit="cover" />
              <Box textAlign="center" justifyContent={'center'}>
                <Button
                  borderTopRadius="0px"
                  fontWeight="normal"
                  bg="#0648b3"
                  color="white"
                  size="md"
                  w="100%"
                  h='50px'
                  onClick={()=>handleExploreClick(product)}
                >
                  Explore - {product.alt}
                </Button>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Center>
    </Flex>
  );
};

export default OurProduct;
