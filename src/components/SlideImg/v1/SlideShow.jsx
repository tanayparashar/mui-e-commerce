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

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function SlideShow({ products }) {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlaySpeed={3000}
      centerMode={false}
      className=""
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
          key={singleItem.id}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            justifyContent: "center",
          }}
        >
          <Link to="/lol" style={{ textDecoration: "none", color: "inherit" }}>
            <img
              src={singleItem.image}
              alt=""
              style={{
                display: "block",
                height: "100px",
                width: "95%",
                borderRadius: "4px",
              }}
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
