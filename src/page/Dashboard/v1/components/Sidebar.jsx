import * as React from "react";
import Box from "@mui/material/Box";
import { useMediaQuery, useTheme } from "@mui/material";
import MenuList from "./MenuList";

const List = [
  { name: "Introduction", path: "/introduction" },
  { name: "Setup", path: "/setup" },
  { name: "Car & Vehicle Electronics", path: "/car-vehicle-electronics" },
  { name: "Cell Phones & Accessories", path: "/cell-phones-accessories" },
  { name: "Computers & Accessories", path: "/computers-accessories" },
];

export default function Sidebar() {
  // const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const theme = useTheme();

  return (
    <Box sx={{ position: "absolute" }}>
      <Box
        sx={{
          position: "fixed",
          overflowY: "scroll",
          height: "100vh",
          width: "280px", // Set the width of the sidebar
          background: theme.palette.grey[50],
          // boxShadow: theme.shadows[4],
          top: "66px",
          p: 1,
          pl: 2,
          pb: 10,

          "&:hover::-webkit-scrollbar": {
            display: "block",
          },
          "&::-webkit-scrollbar": {
            display: "none",
            width: "0.512rem",
          },
          "&::-webkit-scrollbar-track": {
            boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
            webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: theme.palette.grey[500_24],
            height: "4px",
            borderRadius: "8px",
          },
        }}
      >
        <MenuList title={"Getting Started"} isOpenOrNot={true} lists={List} />
        <MenuList title={"Theme Ui"} isOpenOrNot={true} lists={List} />
        <MenuList title={"Development"} isOpenOrNot={true} lists={List} />
        <MenuList title={"Support"} isOpenOrNot={true} lists={List} />
      </Box>
    </Box>
  );
}
