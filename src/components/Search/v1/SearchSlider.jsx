import React from "react";
import {
  Box,
  Button,
  Grid,
  Paper,
  Typography,
  colors,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";

export const products = [
  {
    id: 1,
    image:
      "https://s.alicdn.com/@sc04/kf/H1ae0ab3f3fbc4cb8be248fbe4299e58eD.jpg_480x480.jpg",
    price: "$10.99",
    title: "Product tile goes here",
  },
  {
    id: 2,
    image:
      "https://s.alicdn.com/@sc04/kf/H4cc1fa84e3a44c219d282987b59aa029v.jpeg_250x250xz.jpg",
    price: "$12.99",
    title: "Product tile goes here",
  },
  {
    id: 3,
    image:
      "https://s.alicdn.com/@sc04/kf/H0b91f507d7af4dc48c5f1707f9866d31r.jpeg_250x250xz.jpg",
    price: "$8.99",
    title: "Product tile goes here",
  },
  {
    id: 4,
    image:
      "https://s.alicdn.com/@sc04/kf/H2ec527e4af284463beb556225d422ec3c.jpeg_250x250xz.jpg",
    price: "$14.99",
    title: "Product tile goes here",
  },
  {
    id: 5,
    image:
      "https://s.alicdn.com/@sc04/kf/H3ecd4b2408a244eeb0a2d3321e586e10M.jpg_250x250xz.jpg",
    price: "$9.99",
    title: "Product tile goes here",
  },
];

import Carousel from "react-multi-carousel";
import LazyLoadImg from "../../Lazyload/LazyLoadImg";

function SearchSlider() {
  return (
    <Carousel
      additionalTransform={0}
      arrows
      autoPlaySpeed={3000}
      centerMode={false}
      className="slide-show"
      containerClass="container"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      partialVisible
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024,
          },
          items: 3,
          partialVisibilityGutter: 40,
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0,
          },
          items: 2,
          partialVisibilityGutter: 30,
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 0,
          },
          items: 1,
          partialVisibilityGutter: 30,
        },
      }}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay
      showDots={false}
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
      {/* <Paper> */}
      {products.map((singleItem) => (
        <Box key={singleItem.id}>
          <Box
            component={Link}
            to={"/lol"}
            sx={{
              display: "flex",
              border: "1px solid #ccc",
              flexDirection: "row",
              gap: 2,
              pt: 0.8,
              px: 1,
              color: "inherit",
              textDecoration: "none",
              mr: 1,
              borderRadius: 0.7,
            }}
          >
            <LazyLoadImg
              image={{
                alt: "Image alt text",
                height: 50, // Replace with the desired height
                width: 50, // Replace with the desired width
                src: singleItem.image,
                borderRadius: 50,
                style: {},
              }}
              style={{ borderRadius: "50px" }}
            />

            <Box>
              <Typography>{singleItem.title.substring(0, 12)}...</Typography>
              <Typography>{singleItem.price}</Typography>
            </Box>
          </Box>
        </Box>
      ))}
      {/* </Paper> */}
    </Carousel>
  );
}

export default SearchSlider;
