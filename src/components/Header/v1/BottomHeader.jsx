import { Box, useMediaQuery } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import MenuDrawer from "../../Menu/v1/MenuDrawer";

const menuItems = [
  { text: "Today's Deals", link: "/shop" },
  { text: "Buy Again", link: "/buy-again" },
  { text: "Customer Service", link: "/faqs" },
  { text: "Registry", link: "/register" },
  { text: "Gift Cards", link: "/gift-cards" },
  { text: "Shop", link: "/v2/shop" },
];

export default function BottomHeader() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  // Calculate the total width of menu items
  const totalWidth = menuItems.length * 150; // You can adjust the width as needed

  return (
    <Box
      sx={{
        background: "#2427d6",
        overflowX: totalWidth > window.innerWidth ? "scroll" : "hidden",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: 3,
          mx: 3,
          alignItems: "center",
          // Set the width to the total width
          width: `${totalWidth}px`,
          py: isMobile ? 0.8 : 0,
        }}
      >
        {isMobile ? null : <MenuDrawer />}
        {menuItems.map((menuItem, index) => (
          <Box
            key={index}
            component={Link}
            to={menuItem.link}
            sx={{
              color: "white",
              textDecoration: "none",
              whiteSpace: "pre",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            {menuItem.text}
          </Box>
        ))}
      </Box>
    </Box>
  );
}
