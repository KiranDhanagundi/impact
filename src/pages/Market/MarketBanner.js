import React from "react";
import { Box, Image } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import marketbanner1 from "../../assets/img/marketbanner1.png"
import marketbanner5 from "../../assets/img/marketbanner5.png"
import marketbanner3 from "../../assets/img/marketbanner3.png"
import marketbanner4 from "../../assets/img/marketbanner4.png"

const banners = [
  {
    image: marketbanner1, alt: "",
  },
  {
    image: marketbanner5, alt: "",
  },
  {
    image: marketbanner3,alt: "",
  },
  {
    image: marketbanner4, alt: "",
  },
  
];

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Box position="relative" borderRadius='lg' mt='10px' width="100%" height={{base:"200px",md:'300px'} } overflow="hidden">
      <Slider {...settings}>
        {banners.map((banner, index) => (
          <Box key={index} position="relative" width="100%"  height={{base:"150px",md:'250px'} }>
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

export default Banner;
