import React, { useRef } from "react";
import { Paper, Box, Typography, Grid, Button } from "@mui/material";

import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";
import LazyLoadImg from "../../Lazyload/LazyLoadImg";
const items = [
  {
    id: 1,
    description: "Fixing CSS load order/style.chunk.css incorrect in Nextjs",
    headline: "New Designed Casual Shoes Bulk Shoes Men Sneakers",
    image:
      "https://s.alicdn.com/@sc04/kf/Ha49943145d404c1e803b6da67c7d61cf9.jpg_480x480.jpg",
  },
  {
    id: 2,

    description: "Fixing CSS load order/style.chunk.css incorrect in Nextjs",
    headline: "w3js.com - web front-end studio",
    image:
      "https://s.alicdn.com/@sc04/kf/H7b1326101ed64c8484110eab46e965301.jpg_480x480.jpg",
  },
  {
    id: 3,

    description: "React Carousel with Server Side Rendering Support – Part 2",
    headline: "w3js.com - web front-end studio",
    image:
      "https://s.alicdn.com/@sc04/kf/He7bc700fa4874b59b9a9bd25985338afx.jpeg_480x480.jpg",
  },
  {
    id: 4,

    description: "React Carousel with Server Side Rendering Support – Part 1",
    headline: "w3js.com - web front-end studio",
    image:
      "https://s.alicdn.com/@sc04/kf/H6f3716bbb2724bbe824a3d163389b3dfG.jpg_480x480.jpg",
  },

  {
    id: 5,

    description: "React Carousel with Server Side Rendering Support – Part 2",
    headline: "w3js.com - web front-end studio",
    image:
      "https://s.alicdn.com/@sc04/kf/UTB8FWWWExHEXKJk43Jeq6yeeXXan.jpg_250x250xz.jpg",
  },
  {
    id: 6,

    description: "React Carousel with Server Side Rendering Support – Part 2",
    headline: "w3js.com - web front-end studio",
    image:
      "https://static-01.daraz.com.bd/p/733b5b814c1780aa022677e206dfe2f9.jpg_400x400q75-product.jpg_.webp",
  },
];

function ReuseableProductCarousel({ SectionTitle, RouteLink }) {
  return (
    <Paper elevation={10}>
      <Box sx={{ mt: 5, p: 1 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: 2,
          }}
        >
          <Typography variant="h6" px={1}>
            {SectionTitle}
          </Typography>
          <Button
            variant="contained"
            component={Link}
            to={`${RouteLink}`}
            sx={{ textDecoration: "none", color: "inherit" }}
          >
            View all
          </Button>
        </Box>
        <Carousel
          additionalTransform={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className="long-slider"
          containerClass="container"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
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
              items: 5,
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
          {items.map((item, index) => (
            <Grid key={index} item>
              <Paper sx={{ m: 0.5 }}>
                <Box sx={{ p: 1 }}>
                  <Box
                    component={Link}
                    to={`/product`}
                    sx={{ textDecoration: "none", color: "inherit" }}
                  >
                    <Box
                      component={LazyLoadImg}
                      image={{
                        alt: "Image alt text",
                        // height: 300, // Replace with the desired height
                        // width: 300, // Replace with the desired width
                        style: { objectFit: "cover" },
                        src: item.image, // Replace with the image URL
                      }}
                    />
                    {/* <Box
                      component="img"
                      src={item.image}
                      alt=""
                      sx={{ width: "100%", borderRadius: "5px" }}
                    /> */}
                    <Typography variant="body2">
                      {item.headline.substring(0, 25)}...
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Carousel>
      </Box>
    </Paper>
  );
}

export default ReuseableProductCarousel;
