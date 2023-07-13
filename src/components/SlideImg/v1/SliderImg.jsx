import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
      responsive={{
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
      <img
        src="https://onlineaid.netlify.app/public/images/slider/slider2.jpg"
        style={{
          display: "block",
          height: "90vh",
          margin: "auto",
          width: "100%",
          objectFit: "cover",
        }}
      />
      <img
        src="https://i.ibb.co/q9shsrw/240-F-229742070-UOUl-BZt-Od-QBz-YDa-Ph-Dy-H9hbpftb-K9in-T.png"
        style={{
          display: "block",
          height: "90vh",
          margin: "auto",
          width: "100%",
          objectFit: "cover",
        }}
      />
      <img
        src="https://i.ibb.co/t2hjQFd/240-F-156896021-y-CTTXnn-YBXto4q-X3c0-Mu-HYa-Q8-KENwu2l.png"
        style={{
          display: "block",
          height: "90vh",
          margin: "auto",
          width: "100%",
          objectFit: "cover",
        }}
        alt="Your Image"
      />
    </Carousel>
  );
}

export default SliderImg;
