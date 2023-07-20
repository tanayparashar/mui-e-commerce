import React, { useRef } from "react";
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

export const productData = [
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
      "https://m.media-amazon.com/images/I/419duk9SwmL._AC_UF452,452_FMjpg_.jpg",
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

function ReusableProduct({ sectionTitle }) {
  const theme = useTheme();

  const productRef = useRef();

  const handleProductClick = () => {
    productRef.current.scrollTo(0, 0); // Scroll to the top before navigating
  };
  return (
    <Paper sx={{ p: 2, mt: 5 }} elevation={10}>
      <Box>
        <Typography variant="h6" mb={2}>
          {sectionTitle}
        </Typography>
        <Grid container spacing={1}>
          {productData.map((data) => (
            <Grid item xs={6} sm={6} md={3} lg={12 / 5} xl={2} key={data.id}>
              <Paper sx={{ p: 0.5 }}>
                <Box
                  sx={{ textDecoration: "none", color: "inherit" }}
                  component={Link}
                  to={`/product-details/${data.id}`}
                  onClick={handleProductClick}
                >
                  <Box
                    component="img"
                    sx={{
                      width: "100%",
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
            </Grid>
          ))}
        </Grid>
      </Box>
    </Paper>
  );
}

export default ReusableProduct;
