import {
  Box,
  Grid,
  Paper,
  Rating,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import LazyLoadImg from "../../../../components/Lazyload/LazyLoadImg";

function ShowGridProduct({ productData }) {
  const theme = useTheme();

  return (
    <>
      {productData.map((data) => (
        <Grid item xs={6} sm={6} md={3} lg={12 / 5} xl={2} key={data.id}>
          <Paper sx={{ p: 0.5 }}>
            <Box
              sx={{ textDecoration: "none", color: "inherit" }}
              component={Link}
              to={`/product`}
            >
              {/* <Box
                component="img"
                sx={{ width: "100%", borderRadius: theme.shape }}
                src={data.image}
                alt={data.name}
              /> */}

              <Box
                component={LazyLoadImg}
                image={{
                  alt: "Image alt text",
                  // height: 300, // Replace with the desired height
                  // width: 300, // Replace with the desired width
                  style: { objectFit: "cover", width: "100%" },
                  src: data.image, // Replace with the image URL
                }}
              />

              <Typography>{data.name}</Typography>
              <Typography fontWeight="bold">${data.price}</Typography>
              <Stack spacing={1}>
                <Rating
                  name="half-rating-read"
                  defaultValue={data.rating}
                  precision={0.5}
                  readOnly
                />
              </Stack>
            </Box>
          </Paper>
        </Grid>
      ))}
    </>
  );
}

export default ShowGridProduct;
