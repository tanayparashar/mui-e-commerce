import React from "react";
import { Box, Paper, useMediaQuery } from "@mui/material";

export default function Footer() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <>
      <Box
        component={"footer"}
        sx={{
          // position: "absolute",
          // left: "280px",
          // width: "auto",
          // right: 0,
          // bottom: 0,
          borderTop: "dashed 1px rgba(145, 158, 171, 0.2)",
          mt: 10,
        }}
      >
        <Box sx={{ p: 2 }}>© 2023. All rights reserved</Box>
      </Box>
    </>
  );
}
