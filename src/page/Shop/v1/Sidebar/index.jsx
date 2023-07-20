import React from "react";
import CustomMenu from "./CustomMenu";
import PriceRange from "./PriceRange";
import RatingView from "./RatingView";
import CustomRadioButtons from "./CustomRadioButtons";
import { Box } from "@mui/material";

export default function index() {
  return (
    <Box>
      <CustomMenu title={"Women Category"} />
      <PriceRange />
      <CustomRadioButtons />
      <RatingView />
    </Box>
  );
}
