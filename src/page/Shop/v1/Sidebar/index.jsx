import React from "react";
import CustomMenu from "./CustomMenu";
import PriceRange from "./PriceRange";
import RatingView from "./RatingView";
import CustomRadioButtons from "./CustomRadioButtons";
import { Box } from "@mui/material";

const WomanShoppingList = [
  { name: "Clothing", path: "/clothing" },
  { name: "Shoes", path: "/shoes" },
  { name: "Jewelry", path: "/jewelry" },
  { name: "Watches", path: "/watches" },
  { name: "Handbags", path: "/handbags" },
  { name: "Accessories", path: "/accessories" },
  { name: "Bras", path: "/bras" },
  { name: "Lingerie Sets' Fashion", path: "/lingerie" },
  { name: "Panties", path: "/panties" },
];

const ElectronicsLists = [
  { name: "Accessories & Supplies", path: "/accessories-supplies" },
  { name: "Camera & Photo", path: "/camera-photo" },
  { name: "Car & Vehicle Electronics", path: "/car-vehicle-electronics" },
  { name: "Cell Phones & Accessories", path: "/cell-phones-accessories" },
  { name: "Computers & Accessories", path: "/computers-accessories" },
  { name: "GPS & Navigation", path: "/gps-navigation" },
  { name: "Headphones", path: "/headphones" },
  { name: "Home Audio", path: "/home-audio" },
  { name: "Office Electronics", path: "/office-electronics" },
  { name: "Portable Audio & Video", path: "/portable-audio-video" },
  { name: "Security & Surveillance", path: "/security-surveillance" },
  { name: "Service Plans", path: "/service-plans" },
  { name: "Television & Video", path: "/television-video" },
  {
    name: "Video Game Consoles & Accessories",
    path: "/video-game-consoles-accessories",
  },
  { name: "Video Projectors", path: "/video-projectors" },
  { name: "Wearable Technology", path: "/wearable-technology" },
  { name: "eBook Readers & Accessories", path: "/ebook-readers-accessories" },
];

export default function index() {
  return (
    <Box>
      <CustomMenu
        title={"Electronics Category"}
        isOpenOrNot={false}
        lists={ElectronicsLists}
      />
      <CustomMenu
        title={"Women Category"}
        isOpenOrNot={true}
        lists={WomanShoppingList}
      />
      <PriceRange />
      <CustomRadioButtons />
      <RatingView />
    </Box>
  );
}
