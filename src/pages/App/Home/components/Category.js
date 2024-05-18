import React from 'react';
import { Box, Image, Text, Link, Heading, Flex } from '@chakra-ui/react';

const Category = ({ name, imageSrc, route }) => (
  <Link to={route} _focus={{ boxShadow: 'none' }}>
    <Box
      borderWidth="1px"
      borderRadius="md"
      overflow="hidden"
      cursor="pointer"
      transition="transform 0.2s ease-in-out"
      _hover={{ transform: 'scale(1.05)' }}
      width={{ base: '120px', md: '150px' }} // Adjusted width for responsiveness
      
    >
      <Image src={imageSrc} alt={name} width="100%" height="80px" objectFit="cover" /> {/* Adjusted height of the image */}
      <Text fontWeight="bold" textAlign="center" p={2} fontSize="sm"> {/* Adjusted font size */}
        {name}
      </Text>
    </Box>
  </Link>
);

const Categories = () => {
  const categoryData = [
    { name: 'Fruits', imageSrc: "https://cdn.zeptonow.com/production///tr:w-300,ar-3-2,pr-true,f-auto,q-80/cms/product_variant/b5586d31-c6b3-46bd-a8f3-549950ed3e0a.jpeg", route: '/coria' },
    { name: 'Ghee', imageSrc: 'https://cdn.zeptonow.com/production///tr:w-300,ar-1-1,pr-true,f-auto,q-80/cms/product_variant/e4ab9979-e2b1-42ef-90eb-c0609de4d36c.jpeg', route: '/vanilla' },
    { name: 'Fruits', imageSrc: "https://cdn.zeptonow.com/production///tr:w-300,ar-3-2,pr-true,f-auto,q-80/cms/product_variant/b5586d31-c6b3-46bd-a8f3-549950ed3e0a.jpeg", route: '/coria' },
    { name: 'Ghee', imageSrc: 'https://cdn.zeptonow.com/production///tr:w-300,ar-1-1,pr-true,f-auto,q-80/cms/product_variant/e4ab9979-e2b1-42ef-90eb-c0609de4d36c.jpeg', route: '/vanilla' },
    { name: 'Fruits', imageSrc: "https://cdn.zeptonow.com/production///tr:w-300,ar-3-2,pr-true,f-auto,q-80/cms/product_variant/b5586d31-c6b3-46bd-a8f3-549950ed3e0a.jpeg", route: '/coria' },
    { name: 'Ghee', imageSrc: 'https://cdn.zeptonow.com/production///tr:w-300,ar-1-1,pr-true,f-auto,q-80/cms/product_variant/e4ab9979-e2b1-42ef-90eb-c0609de4d36c.jpeg', route: '/vanilla' }
  ];

  return (
    <Flex direction='column'>
      <Heading bg='gray.100' textAlign="center" py="2" fontSize="lg">Explore Categories</Heading> {/* Added padding for spacing */}
      <Flex flexWrap="wrap" justifyContent="space-around" p="20px"> {/* Added padding */}
        {categoryData.map((category, index) => (
          <Category key={index} {...category} />
        ))}
      </Flex>
    </Flex>
  );
};

export default Categories;
