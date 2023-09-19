import React, { useState } from "react";
import RecommendedBtn from "./RecommendedBtn";
import { Grid, Typography } from "@mui/material";

const Recommended = ({ handleClick }) => {
  const [activeValue, setActiveValue] = useState(""); // Initialize with an empty string

  // const handleButtonClick = (e, value) => {
  //   setActiveValue(value); // Update the active value when a button is clicked
  //   handleClick(e.target); // Call the parent handler
  // };

  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <RecommendedBtn
            onClickHandler={handleClick}
            value=""
            title="All Products"
            active={activeValue === "All Products"}
          />
          <RecommendedBtn
            onClickHandler={handleClick}
            value="Nike"
            title="Nike"
            active={activeValue === "Nike"}
          />
          <RecommendedBtn
            onClickHandler={handleClick}
            value="Adidas"
            title="Adidas"
            active={activeValue === "Adidas"}
          />
          <RecommendedBtn
            onClickHandler={handleClick}
            value="Puma"
            title="Puma"
            active={activeValue === "Puma"}
          />
          <RecommendedBtn
            onClickHandler={handleClick}
            value="Vans"
            title="Vans"
            active={activeValue === "Vans"}
          />
        </div>
      </div>
    </>
  );
};

export default Recommended;
