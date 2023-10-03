import React from "react";
import { Box, Grid } from "@mui/material";
import MiniSection from "./MiniSection";

function ViewMobileResponsive() {
  return (
    <Box sx={{ mt: 5 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <MiniSection SectionTitle={"New Product"} />
        <MiniSection SectionTitle={"New Product"} />
        <MiniSection SectionTitle={"New Product"} />
      </Grid>
    </Box>
  );
}

export default ViewMobileResponsive;
