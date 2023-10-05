import React from "react";
import CustomCard from "./CustomCard";
import { Box, Grid, Paper } from "@mui/material";
import { Link } from "react-router-dom";

const Products = ({ result }) => {
  return (
    // <Grid item xs={6} sm={6} md={3} lg={12 / 5} xl={2}>
    // <Paper sx={{ p: 0.5 }}>
    <Box
      sx={{ textDecoration: "none", color: "inherit" }}
      component={Link}
      to={`/product`}
    >
      {result.map((product) => (
        <CustomCard
          key={product.id}
          img={product.img}
          title={product.title}
          rating={product.rating}
          reviews={product.reviews}
          prevPrice={product.prevPrice}
          newPrice={product.newPrice}
        />
      ))}
    </Box>
    // </Paper>
    // </Grid>
  );
};

export default Products;
