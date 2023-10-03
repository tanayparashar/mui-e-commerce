import React from "react";
import { Box, Grid } from "@mui/material";
import DealWithSingleImg from "./DealWithSingleImg";
import DealWithFourImg from "./DealWithFourImg";

const items = [
  {
    image:
      "https://s.alicdn.com/@sc04/kf/Hd927703e6d4941aba4652c6cad1a5ce0M.jpg_480x480.jpg",
  },
  {
    image:
      "https://s.alicdn.com/@sc04/kf/Ha49943145d404c1e803b6da67c7d61cf9.jpg_480x480.jpg",
  },
  {
    image:
      "https://s.alicdn.com/@sc04/kf/He7bc700fa4874b59b9a9bd25985338afx.jpeg_480x480.jpg",
  },
  {
    image:
      "https://s.alicdn.com/@sc04/kf/H6f3716bbb2724bbe824a3d163389b3dfG.jpg_480x480.jpg",
  },
];

function ViewProductWithDeal() {
  return (
    <Box sx={{ mt: 5 }}>
      <Grid container spacing={2}>
        <DealWithFourImg
          items={items}
          SectionTitle={`Shop deals in Fashion`}
          RouteLink={"see"}
          BtnText={"See more"}
          ProductTitle={"Shop under $20"}
        />
        <DealWithFourImg
          items={items}
          SectionTitle={`Shop deals in Fashion`}
          RouteLink={"see"}
          BtnText={"See more"}
          ProductTitle={"Shop under $20"}
        />
        <DealWithFourImg
          items={items}
          SectionTitle={`Shop deals in Fashion`}
          RouteLink={"see"}
          BtnText={"See more"}
          ProductTitle={"Shop under $20"}
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

export default ViewProductWithDeal;
