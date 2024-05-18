import React from "react";
import { Box, Image } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import iamBanner1 from "../../assets/img/iambanner1.png"
import iamBanner2 from "../../assets/img/iambanner2.png"
import iamBanner3 from "../../assets/img/iambanner3.png"

const banners = [
  {
    image: iamBanner1,
    alt: "",
  },
  {
      image: iamBanner2,
      alt: "",
    },
  {
      image: iamBanner3,
      alt: "",
  }
  
  
];

const IamBanner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Box position="relative" borderRadius='lg' mb='20px' width="100%" height="300px" bg='gray.100'overflow="hidden">
      <Slider {...settings}>
        {banners.map((banner, index) => (
          <Box key={index} position="relative" width="100%" height="250px">
            <Image
              src={banner.image}
              alt={banner.alt}
              objectFit="cover"
              width="100%"
              height="100%"
            />
            <Box
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              textAlign="center"
              color="white"
              fontSize="2xl"
            >
              {banner.alt}
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default IamBanner;
