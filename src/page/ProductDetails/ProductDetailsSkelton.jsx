import React from "react";

import { Box, Container, Grid, Skeleton } from "@mui/material";

function ProductDetailsSkelton() {
  return (
    <Box>
      <Skeleton height={70} width={"100%"} variant="rectangular" />

      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={7} mt={5}>
            <Skeleton
              animation="wave"
              height={"70vh"}
              width="100%"
              variant="rectangular"
            />
            <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
              <Skeleton animation="wave" height={100} width="20%" />
              <Skeleton animation="wave" height={100} width="20%" />
              <Skeleton animation="wave" height={100} width="20%" />
            </Box>
          </Grid>
          <Grid item xs={12} md={5} mt={5}>
            <Skeleton animation="wave" height={30} width="30%" />
            <Skeleton animation="wave" height={40} width="50%" />
            <Skeleton animation="wave" height={20} width="70%" />
            <Skeleton animation="wave" height={70} width="20%" />
            <Skeleton animation="wave" height={20} width="100%" />
            <Skeleton animation="wave" height={20} width="100%" />
            <Skeleton animation="wave" height={20} width="10%" />
            <Skeleton animation="wave" height={100} width="100%" />
            <Skeleton animation="wave" height={50} width="40%" />
            <Skeleton animation="wave" height={100} width="100%" />
            <Skeleton animation="wave" height={30} width="80%" />
            <Skeleton animation="wave" height={30} width="80%" />
            <Box sx={{ display: "flex", gap: 2 }}>
              <Skeleton animation="wave" height={80} width="100%" />
              <Skeleton animation="wave" height={80} width="100%" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ProductDetailsSkelton;
