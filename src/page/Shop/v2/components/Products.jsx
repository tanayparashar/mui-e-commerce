import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  Typography,
} from "@mui/material";

const Products = ({ result }) => {
  return (
    <>
      {result.map((product) => (
        <Grid item xs={6} sm={6} md={3} lg={12 / 4} xl={2} key={product.id}>
          <Card>
            <CardMedia
              component="img"
              alt={product.title}
              // height="auto"
              image={product.img}
              sx={{ width: 300, height: 150, objectFit: "contain", p: 1 }}
            />
            <CardContent>
              <Typography variant="h6" component="div">
                {product.title}
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                {/* <Rating readOnly defaultValue={rating} precision={0.5} /> */}
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
