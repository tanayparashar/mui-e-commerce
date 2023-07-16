import { Box } from "@mui/material";
import React from "react";
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";
// import { LazyLoadImage } from "react-lazy-load-image-component";

const imgData = [
  {
    id: 1,
    image: "https://onlineaid.netlify.app/public/images/slider/slider2.jpg",
    bigTitle: "Give some title",
    subTitle: "Give some subtitle",
    buttonText: "Shop Now",
  },
  {
    id: 2,
    image:
      "https://i.ibb.co/q9shsrw/240-F-229742070-UOUl-BZt-Od-QBz-YDa-Ph-Dy-H9hbpftb-K9in-T.png",
    bigTitle: "Give some title",
    subTitle: "Give some subtitle",
    buttonText: "Shop Now",
  },
  {
    id: 3,
    image:
      "https://i.ibb.co/t2hjQFd/240-F-156896021-y-CTTXnn-YBXto4q-X3c0-Mu-HYa-Q8-KENwu2l.png",
    bigTitle: "Give some title",
    subTitle: "Give some subtitle",
    buttonText: "Shop Now",
  },
];

const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024,
    },
    items: 1,
  },
  mobile: {
    breakpoint: {
      max: 464,
      min: 0,
    },
    items: 1,
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 464,
    },
    items: 1,
  },
};

function SliderImg() {
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
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={responsive}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay
      showDots={false}
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
      {imgData.map((img) => (
        <Box component={Link} to="/shop" key={img.id}>
          <Box
            component={"img"}
            src={img.image}
            alt="Image data"
            effect="blur"
            style={{
              display: "block",
              height: "90vh",
              margin: "auto",
              width: "100%",
              objectFit: "cover",
            }}
          />
        </Box>
      ))}
    </Carousel>
  );
}

export default SliderImg;
