import React from "react";
import { Box, Paper, useMediaQuery } from "@mui/material";

export default function Footer() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <>
      <Box component={"footer"}>
        <Paper sx={{ p: 2 }}>Footer</Paper>
      </Box>
    </>
  );
}
