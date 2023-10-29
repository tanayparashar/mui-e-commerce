import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  Rating,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import LazyLoadImg from "../../../../components/Lazyload/LazyLoadImg";

const Products = ({ result }) => {
  return (
    <>
      {result.map((product) => (
        <Grid item xs={6} sm={6} md={3} lg={12 / 4} xl={2} key={product.id}>
          {/* Grid item xs={6} sm={6} md={3} lg={12 / 5} xl={2} */}
          <Card>
            <Box component={Link} to={"/product"}>
              <Box
                component={LazyLoadImg}
                image={{
                  alt: "Image alt text",
                  height: 150, // Replace with the desired height
                  width: 150, // Replace with the desired width
                  style: { objectFit: "cover" },
                  src: product.img, // Replace with the image URL
                }}
              />
            </Box>
            <CardContent sx={{ p: 0.8 }}>
              <Typography>{product.title}</Typography>
              <Box sx={{ mb: 1 }}>
                <Rating
                  readOnly
                  defaultValue={product.rating.rate}
                  precision={0.5}
                />
                <Typography variant="body2" color="text.secondary">
                  {product.reviews}
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary">
                <del>{product.prevPrice}</del> {product.newPrice}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </>
  );
};

export default Products;
