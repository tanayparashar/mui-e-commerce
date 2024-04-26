import React, { useRef } from "react";
import { Box, Paper, Rating, Stack, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import LazyLoadImg from "../../../../components/Lazyload/LazyLoadImg";

function ShowFlatProduct({ productData }) {
  const theme = useTheme();

  return (
    <Stack spacing={2}>
      {productData.map((data) => (
        <Paper key={data.id} sx={{ p: 0.5 }} elevation={3}>
          <Box
            sx={{
              textDecoration: "none",
              color: "inherit",
              display: "flex",
              alignItems: "center",
              gap: 3,
            }}
            component={Link}
            to={`/product`}
          >
            {/* <Box
              component="img"
              sx={{
                width: "150px",
                height: "150px",
                borderRadius: theme.shape,
                objectFit: "cover",
              }}
              src={data.image}
              alt={data.name}
            /> */}

            <Box
              component={LazyLoadImg}
              image={{
                alt: "Image alt text",
                height: 150, // Replace with the desired height
                width: 150, // Replace with the desired width
                style: { objectFit: "cover" },
                src: data.image, // Replace with the image URL
              }}
            />
            <Box>
              <Typography>{data.category}</Typography>
              <Typography>{data.name}</Typography>
              <Stack spacing={1}>
                <Rating
                  name="half-rating-read"
                  defaultValue={data.rating}
                  precision={0.5}
                  readOnly
                />
              </Stack>
              <Typography>{data.description}</Typography>
              <Typography fontWeight="bold">${data.price}</Typography>
            </Box>
          </Box>
        </Paper>
      ))}
    </Stack>
  );
}

export default ShowFlatProduct;
