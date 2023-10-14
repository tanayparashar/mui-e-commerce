import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import MenuDrawer from "../../Menu/v1/MenuDrawer";

export default function BottomHeader() {
  return (
    <Box sx={{ background: "#2427d6" }}>
      {/* <Marquee> */}
      <Box sx={{ display: "flex", gap: 3, mx: 3, alignItems: "center" }}>
        <MenuDrawer />
        <Box sx={{ color: "white" }} component={Link} to={"/today"}>
          Today's Deals
        </Box>
        <Box sx={{ color: "white" }} component={Link} to={"/today"}>
          Buy Again
        </Box>
        <Box sx={{ color: "white" }} component={Link} to={"/today"}>
          Customer Service
        </Box>
        <Box sx={{ color: "white" }} component={Link} to={"/today"}>
          Registry
        </Box>
        <Box sx={{ color: "white" }} component={Link} to={"/today"}>
          Gift Cards
        </Box>
        <Box sx={{ color: "white" }} component={Link} to={"/today"}>
          Sell
        </Box>
      </Box>
      {/* </Marquee> */}
    </Box>
  );
}
