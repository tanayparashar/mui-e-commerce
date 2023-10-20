import React, { useEffect, useRef } from "react";
import {
  Box,
  Grid,
  Paper,
  Rating,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import LazyLoadImg from "../../Lazyload/LazyLoadImg";

const productData = [
  {
    id: 1,
    name: "Example Product",
    description: "This is an example product description.",
    price: 19.99,
    currency: "USD",
    image:
      "https://static-01.daraz.com.bd/p/b994318f0b20d67ada83f6e620ea37a2.jpg_400x400q75-product.jpg_.webp",
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
      "https://static-01.daraz.com.bd/p/fd574b5a64d4494c8093d2d0cd5ac48f.jpg_400x400q75-product.jpg_.webp",
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
      "https://s.alicdn.com/@sc04/kf/Hdc1d83b424f449f2b7c058957513f11as.jpg_250x250xz.jpg",
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

  {
    id: 7,
    name: "Example Product",
    description: "This is an example product description.",
    price: 19.99,
    currency: "USD",
    image:
      "https://s.alicdn.com/@sc04/kf/Hd6e0d57852f14931a30c4de83fb26f8fb.jpg_250x250xz.jpg",
    category: "Electronics",
    brand: "Example Brand",
    rating: 4.5,
    reviews: 10,
    availability: true,
  },

  {
    id: 8,
    name: "Example Product",
    description: "This is an example product description.",
    price: 19.99,
    currency: "USD",
    image:
      "https://s.alicdn.com/@sc04/kf/Hd0053eba9fb943f5ada9614b244c9556h.jpg_250x250xz.jpg",
    category: "Electronics",
    brand: "Example Brand",
    rating: 4.5,
    reviews: 10,
    availability: true,
  },

  {
    id: 9,
    name: "Example Product",
    description: "This is an example product description.",
    price: 19.99,
    currency: "USD",
    image:
      "https://s.alicdn.com/@sc04/kf/H0b91f507d7af4dc48c5f1707f9866d31r.jpeg_250x250xz.jpg",
    category: "Electronics",
    brand: "Example Brand",
    rating: 4.5,
    reviews: 10,
    availability: true,
  },

  {
    id: 10,
    name: "Example Product",
    description: "This is an example product description.",
    price: 19.99,
    currency: "USD",
    image:
      "https://s.alicdn.com/@sc04/kf/H539c4abc9df94d38b6ba83a7473baee4s.jpg_250x250xz.jpg",
    category: "Electronics",
    brand: "Example Brand",
    rating: 4.5,
    reviews: 10,
    availability: true,
  },

  {
    id: 11,
    name: "Example Product",
    description: "This is an example product description.",
    price: 19.99,
    currency: "USD",
    image:
      "https://s.alicdn.com/@sc04/kf/H153bbd39e57e46c09e6445ae5ab55704w.jpg_480x480.jpg",
    category: "Electronics",
    brand: "Example Brand",
    rating: 4.5,
    reviews: 10,
    availability: true,
  },

  {
    id: 12,
    name: "Example Product",
    description: "This is an example product description.",
    price: 19.99,
    currency: "USD",
    image:
      "https://static-01.daraz.com.bd/p/581c57d9da4adde7be0660410bf054cb.jpg",
    category: "Electronics",
    brand: "Example Brand",
    rating: 4.5,
    reviews: 10,
    availability: true,
  },
];

function JustForYouSection({ SectionTitle, showRating = true }) {
  const theme = useTheme();

  return (
    <Paper sx={{ p: 2, mt: 5 }} elevation={10}>
      <Box>
        <Typography variant="h6" mb={2}>
          {SectionTitle}
        </Typography>
        <Grid container spacing={1}>
          {productData.map((data) => (
            <Grid item xs={6} sm={6} md={3} lg={12 / 6} xl={2} key={data.id}>
              <Paper sx={{ p: 0.5 }}>
                <Box
                  sx={{ textDecoration: "none", color: "inherit" }}
                  component={Link}
                  to={`/product`}
                >
                  <Box
                    component={LazyLoadImg}
                    image={{
                      alt: "Image alt text",
                      // height: 300, // Replace with the desired height
                      // width: 300, // Replace with the desired width
                      style: { objectFit: "cover" },
                      src: data.image, // Replace with the image URL
                    }}
                  />
                  {/* <Box
                    component="img"
                    sx={{
                      width: "100%",
                      borderRadius: theme.shape,
                    }}
                    src={data.image}
                    alt={data.name}
                  /> */}
                  <Typography>{data.name}</Typography>
                  <Typography fontWeight={"bold"}>${data.price}</Typography>
                  {showRating && (
                    <Stack spacing={1}>
                      <Rating
                        name="half-rating-read"
                        defaultValue={data.rating}
                        precision={0.5}
                        readOnly
                      />
                    </Stack>
                  )}
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Paper>
  );
}

export default JustForYouSection;
