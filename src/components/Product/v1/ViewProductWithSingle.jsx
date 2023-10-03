import React from "react";
import { Box, Grid } from "@mui/material";
import DealWithSingleImg from "./DealWithSingleImg";
import DealWithFourImg from "./DealWithFourImg";

function ViewProductWithSingle() {
  return (
    <Box sx={{ mt: 5 }}>
      <Grid container spacing={2}>
        <DealWithSingleImg
          SectionTitle={`Shop deals in Fashion`}
          RouteLink={"see"}
          BtnText={"See more"}
        />
        <DealWithSingleImg
          SectionTitle={`Shop deals in Fashion`}
          RouteLink={"see"}
          BtnText={"See more"}
        />
        <DealWithSingleImg
          SectionTitle={`Shop deals in Fashion`}
          RouteLink={"see"}
          BtnText={"See more"}
        />
        <DealWithSingleImg
          SectionTitle={`Shop deals in Fashion`}
          RouteLink={"see"}
          BtnText={"See more"}
        />
      </Grid>
    </Box>
  );
}

export default ViewProductWithSingle;
