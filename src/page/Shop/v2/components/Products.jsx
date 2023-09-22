import React from "react";
import CustomCard from "./CustomCard"; // Import your product card component here
import { Grid } from "@mui/material";

const Products = ({ result }) => {
  return (
    <Grid container spacing={1}>
      {result.map((product) => (
        <Grid key={product.id} item xs={6} sm={6} md={3} lg={12 / 5} xl={2}>
          <CustomCard
            key={product.id}
            img={product.img}
            title={product.title}
            rating={product.rating}
            reviews={product.reviews}
            prevPrice={product.prevPrice}
            newPrice={product.newPrice}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Products;
