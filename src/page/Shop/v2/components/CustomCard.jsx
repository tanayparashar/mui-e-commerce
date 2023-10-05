import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Rating,
  Grid,
  Paper,
} from "@mui/material";
import { Link } from "react-router-dom";

const CustomCard = ({
  id,
  img,
  title,
  rating,
  reviews,
  prevPrice,
  newPrice,
}) => {
  return (
    <Card sx={{ display: "flex", flexDirection: "column", gap: 2, m: 1 }}>
      <CardMedia
        component="img"
        alt={title}
        // height="auto"
        image={img}
        sx={{ width: 300, height: 150, objectFit: "contain", p: 1 }}
      />
      <CardContent>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
          {/* <Rating readOnly defaultValue={rating} precision={0.5} /> */}
          <Typography variant="body2" color="text.secondary">
            {reviews}
          </Typography>
        </Box>
        <Typography variant="body2" color="text.secondary">
          <del>{prevPrice}</del> {newPrice}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CustomCard;
