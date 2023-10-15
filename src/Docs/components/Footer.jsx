import React from "react";
import { Box, Paper, useMediaQuery } from "@mui/material";

export default function Footer() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <>
      <Box
        component={"footer"}
        sx={{
          position: "absolute",
          bottom: 0,
          p: 2,
          background: "gray",
          width: isMobile ? "100%" : "80%",
          right: 0,
        }}
      >
        <Box>Footer</Box>
      </Box>
    </>
  );
}
