import React from "react";
// import Carousel from "react-material-ui-carousel";
import { Paper, Box, Typography, Grid, Button } from "@mui/material";
import "./arrow.css";

import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { Link } from "react-router-dom";
const items = [
  {
    description: "Fixing CSS load order/style.chunk.css incorrect in Nextjs",
    headline: "New Designed Casual Shoes Bulk Shoes Men Sneakers",
    image:
      "https://s.alicdn.com/@sc04/kf/Ha49943145d404c1e803b6da67c7d61cf9.jpg_480x480.jpg",
  },
  {
    description: "Fixing CSS load order/style.chunk.css incorrect in Nextjs",
    headline: "w3js.com - web front-end studio",
    image:
      "https://s.alicdn.com/@sc04/kf/H7b1326101ed64c8484110eab46e965301.jpg_480x480.jpg",
  },
  {
    description: "React Carousel with Server Side Rendering Support – Part 2",
    headline: "w3js.com - web front-end studio",
    image:
      "https://s.alicdn.com/@sc04/kf/He7bc700fa4874b59b9a9bd25985338afx.jpeg_480x480.jpg",
  },
  {
    description: "React Carousel with Server Side Rendering Support – Part 1",
    headline: "w3js.com - web front-end studio",
    image:
      "https://s.alicdn.com/@sc04/kf/H6f3716bbb2724bbe824a3d163389b3dfG.jpg_480x480.jpg",
  },

  {
    description: "React Carousel with Server Side Rendering Support – Part 2",
    headline: "w3js.com - web front-end studio",
    image:
      "https://s.alicdn.com/@sc04/kf/UTB8FWWWExHEXKJk43Jeq6yeeXXan.jpg_250x250xz.jpg",
  },
];

function CustomCarousel() {
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
            Shop under $20
          </Typography>
          <Button variant="contained">View all</Button>
        </Box>
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className="long-slider"
          containerClass="container"
          // customLeftArrow={<ArrowCircleLeftIcon />}
          // customRightArrow={<ArrowCircleRightIcon />}
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
                    to="/go"
                    sx={{ textDecoration: "none", color: "inherit" }}
                  >
                    <Box
                      component="img"
                      src={item.image}
                      alt=""
                      sx={{ width: "100%", borderRadius: "5px" }}
                    />
                    <Typography variant="body2">
                      {item.headline.substring(0, 25)}...
                    </Typography>
                    {/* <Typography variant="caption">
                      {item.description}
                    </Typography> */}
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

export default CustomCarousel;
