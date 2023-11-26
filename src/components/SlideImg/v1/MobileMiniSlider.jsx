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
  },
  {
    id: 2,
    image:
      "https://s.alicdn.com/@sc04/kf/H4cc1fa84e3a44c219d282987b59aa029v.jpeg_250x250xz.jpg",
    price: "$12.99",
  },
  {
    id: 3,
    image:
      "https://s.alicdn.com/@sc04/kf/H0b91f507d7af4dc48c5f1707f9866d31r.jpeg_250x250xz.jpg",
    price: "$8.99",
  },
  {
    id: 4,
    image:
      "https://s.alicdn.com/@sc04/kf/H2ec527e4af284463beb556225d422ec3c.jpeg_250x250xz.jpg",
    price: "$14.99",
  },
  {
    id: 5,
    image:
      "https://s.alicdn.com/@sc04/kf/H3ecd4b2408a244eeb0a2d3321e586e10M.jpg_250x250xz.jpg",
    price: "$9.99",
  },
];

import Carousel from "react-multi-carousel";
import LazyLoadImg from "../../Lazyload/LazyLoadImg";

function SlideShow({ products }) {
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
          items: 2,
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
            min: 464,
          },
          items: 2,
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
      {products.map((singleItem) => (
        <Box
          className="control-min-img"
          key={singleItem.id}
          sx={{
            display: "flex",
            flexDirection: "column",
            // gap: "16px",
            justifyContent: "center",
            paddingRight: "10px",
            borderRadius: 1,
          }}
        >
          <Link to="/lol" style={{ textDecoration: "none", color: "inherit" }}>
            {/* <img
              src={singleItem.image}
              alt=""
              style={{
                display: "block",
                height: "150px",
                width: "95%",
                borderRadius: "4px",
                objectFit: "cover",
              }}
            /> */}
            <Box
              component={LazyLoadImg}
              image={{
                alt: "Image alt text",
                height: 150, // Replace with the desired height
                // width: 300, // Replace with the desired width
                style: {
                  display: "block",
                  height: "150px",
                  width: "95%",
                  objectFit: "cover",
                  borderRadius: 1,
                },
                src: singleItem.image, // Replace with the image URL
              }}
              style={{ borderRadius: "80px" }}
            />

            <Typography sx={{ textAlign: "center" }} component={"span"}>
              {singleItem.price}
            </Typography>
          </Link>
        </Box>
      ))}
    </Carousel>
  );
}

export default SlideShow;
