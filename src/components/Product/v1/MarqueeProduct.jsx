import React from "react";
import {
  Box,
  Container,
  Grid,
  Paper,
  Rating,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

export const productData = [
  {
    id: 1,
    name: "Example Product",
    description: "This is an example product description.",
    price: 19.99,
    currency: "USD",
    image:
      "https://static-01.daraz.com.bd/p/560c95393155fbe1b02c1121282f6e30.jpg_188x188.jpg_.webp",
    category: "Electronics",
    brand: "Example Brand",
    rating: 4.5,
    reviews: 10,
    availability: true,
  },
  {
    id: 2,
    name: "Example Product",
    description: "This is an example product description.",
    price: 19.99,
    currency: "USD",
    image:
      "https://static-01.daraz.com.bd/p/16eb736f3743232014870ef14cc00f10.jpg_300x0q75.webp",
    category: "Electronics",
    brand: "Example Brand",
    rating: 4.5,
    reviews: 10,
    availability: true,
  },
  {
    id: 3,
    name: "Example Product",
    description: "This is an example product description.",
    price: 19.99,
    currency: "USD",
    image:
      "https://static-01.daraz.com.bd/p/011687c0633d6b336a0de47d6ecc1d0c.jpg_400x400q75-product.jpg_.webp",
    category: "Electronics",
    brand: "Example Brand",
    rating: 4.5,
    reviews: 10,
    availability: true,
  },
  {
    id: 4,
    name: "Example Product",
    description: "This is an example product description.",
    price: 19.99,
    currency: "USD",
    image:
      "https://static-01.daraz.com.bd/p/mdc/180c8b06034c543c8fd2798bbb9ea952.jpg_400x400q75-product.jpg_.webp",
    category: "Electronics",
    brand: "Example Brand",
    rating: 4.5,
    reviews: 10,
    availability: true,
  },
  {
    id: 5,
    name: "Example Product",
    description: "This is an example product description.",
    price: 19.99,
    currency: "USD",
    image:
      "https://static-01.daraz.com.bd/p/a79d44d8425b0208b936342d53b2c0a0.jpg_200x200q80-product.jpg_.webp",
    category: "Electronics",
    brand: "Example Brand",
    rating: 4.5,
    reviews: 10,
    availability: true,
  },
  {
    id: 6,
    name: "Example Product",
    description: "This is an example product description.",
    price: 19.99,
    currency: "USD",
    image:
      "https://static-01.daraz.com.bd/p/6a3bee1e84bb5054d0492fa53f859f80.jpg_400x400q75-product.jpg_.webp",
    category: "Electronics",
    brand: "Example Brand",
    rating: 4.5,
    reviews: 10,
    availability: true,
  },
];

function ProductMarquee({ SectionTitle }) {
  const theme = useTheme();

  return (
    <Paper sx={{ p: 1.5, my: 5 }}>
      <Typography variant="h6" mb={0.5}>
        {SectionTitle}
      </Typography>

      <Marquee>
        {productData.map((data) => (
          <Grid item xs={6} sm={6} md={3} lg={12 / 6} xl={2} key={data.id}>
            <Stack direction="row" spacing={2} sx={{ p: 0.5 }}>
              <Paper sx={{ p: 0.5 }}>
                <Box
                  sx={{ textDecoration: "none", color: "inherit" }}
                  component={Link}
                  to={`/product`}
                >
                  <Box
                    component="img"
                    sx={{
                      width: "200px",
                      borderRadius: theme.shape,
                    }}
                    src={data.image}
                    alt={data.name}
                  />
                  <Typography>{data.name}</Typography>
                  {/* <Typography>${data.price}</Typography> */}
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
            </Stack>
          </Grid>
        ))}
      </Marquee>
    </Paper>
  );
}

export default ProductMarquee;
