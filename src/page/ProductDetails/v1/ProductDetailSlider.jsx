import React from "react";
import { Carousel } from "react-responsive-carousel";
const image = [
  "https://s.alicdn.com/@sc04/kf/Hce3fdcf1bb6a4dc8bec012d8e0a256caI.jpeg_220x220.jpg",
  "https://s.alicdn.com/@sc04/kf/Hc1dfc66335684787b2b1307802052707A.jpg_220x220.jpg",
  "https://s.alicdn.com/@sc04/kf/H6f3716bbb2724bbe824a3d163389b3dfG.jpg_480x480.jpg",
  "https://s.alicdn.com/@sc04/kf/H9369fc43014d488db0089467c9591e57K.jpg_480x480.jpg",
];

const ProductDetailSlider = () => {
  const onChange = (index, item) => {
    // Handle slide change event
    console.log("Slide changed to:", index);
  };

  const onClickItem = (index, item) => {
    // Handle click on slide event
    console.log("Clicked on slide:", index);
  };

  const onClickThumb = (index, item) => {
    // Handle click on thumbnail event
    console.log("Clicked on thumbnail:", index);
  };

  return (
    <Carousel
      showArrows={true}
      onChange={onChange}
      onClickItem={onClickItem}
      onClickThumb={onClickThumb}
    >
      {image.map((img, index) => (
        <div key={index}>
          <img style={{ borderRadius: "5px" }} src={img} alt="Slide " />
        </div>
      ))}
    </Carousel>
  );
};

export default ProductDetailSlider;
