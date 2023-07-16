import React, { useRef, useState, useEffect, useMemo } from "react";
import {
  Box,
  Container,
  Drawer,
  Grid,
  IconButton,
  Paper,
  Rating,
  Stack,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Layout from "../../../layout/GlobalLayout/Layout";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import ViewModuleIcon from "@mui/icons-material/ViewModule";
import ViewListIcon from "@mui/icons-material/ViewList";

import SortingSelect from "./SortingSelect";
import ShopPagination from "./ShopPagination";

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

  {
    id: 7,
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
    id: 8,
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
    id: 9,
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
    id: 10,
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

const NAV_WIDTH = 240; // Set the width of the nav drawer

function Shop() {
  const [sortedData, setSortedData] = useState(productData);
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const [openNav, setOpenNav] = useState(false);
  const [viewMode, setViewMode] = useState(
    localStorage.getItem("viewMode") || "grid"
  );
  const productRef = useRef();
  const theme = useTheme();

  const handleProductClick = () => {
    productRef.current.scrollTo(0, 0); // Scroll to the top before navigating
  };

  useEffect(() => {
    localStorage.setItem("viewMode", viewMode);
  }, [viewMode]);

  const handleViewModeChange = () => {
    setViewMode((prevMode) => (prevMode === "grid" ? "flat" : "grid"));
  };

  const handleSortingChange = (sortedData) => {
    setSortedData(sortedData);
  };

  const toggleNav = () => {
    setOpenNav((prevOpen) => !prevOpen);
  };
  return (
    <>
      <Helmet>
        <title>Shop | 🖼️ page</title>
        <meta name="description" content="Your page description" />
      </Helmet>
      <Layout>
        <Container>
          <Grid container spacing={2}>
            <Grid item md={3} mt={5}>
              {isMobile && (
                <>
                  <Toolbar>
                    <IconButton
                      edge="start"
                      color="inherit"
                      onClick={toggleNav}
                    >
                      <MenuIcon /> Filter
                    </IconButton>
                  </Toolbar>
                  <Drawer
                    open={openNav}
                    onClose={() => setOpenNav(false)}
                    ModalProps={{
                      keepMounted: true,
                    }}
                    PaperProps={{
                      sx: { width: NAV_WIDTH },
                    }}
                  >
                    {/* Drawer Content Here */}
                    <Typography variant="h6" component="div" sx={{ p: 2 }}>
                      Drawer Content
                    </Typography>
                  </Drawer>
                </>
              )}
              {!isMobile && <Box>Hi</Box>}
            </Grid>
            <Grid item md={9} mt={5}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  my: 3,
                }}
              >
                <Stack direction="row" spacing={1} alignItems="center">
                  <IconButton
                    onClick={handleViewModeChange}
                    color={viewMode === "grid" ? "primary" : "default"}
                  >
                    {viewMode === "grid" ? (
                      <ViewModuleIcon />
                    ) : (
                      <ViewListIcon />
                    )}
                  </IconButton>
                </Stack>

                {/* Rendering the SortingSelect component */}
                <SortingSelect
                  productData={productData}
                  onSort={handleSortingChange}
                />
              </Box>

              {viewMode === "grid" ? ( // Conditional rendering based on viewMode
                <Grid container spacing={2}>
                  {productData.map((data) => (
                    <Grid
                      item
                      xs={6}
                      sm={6}
                      md={3}
                      lg={12 / 5}
                      xl={2}
                      key={data.id}
                    >
                      <Paper sx={{ p: 0.5 }}>
                        <Box
                          sx={{ textDecoration: "none", color: "inherit" }}
                          component={Link}
                          to={`/product-details/${data.id}`}
                          onClick={handleProductClick}
                        >
                          <Box
                            component="img"
                            sx={{ width: "100%", borderRadius: theme.shape }}
                            src={data.image}
                            alt={data.name}
                          />
                          <Typography>{data.name}</Typography>
                          <Typography fontWeight="bold">
                            ${data.price}
                          </Typography>
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
              ) : (
                <Stack spacing={2}>
                  {productData.map((data) => (
                    <Paper key={data.id} sx={{ p: 0.5 }}>
                      <Box
                        sx={{
                          textDecoration: "none",
                          color: "inherit",
                          display: "flex",
                          alignItems: "center",
                          gap: 3,
                        }}
                        component={Link}
                        to={`/product-details/${data.id}`}
                        onClick={handleProductClick}
                      >
                        <Box
                          component="img"
                          sx={{
                            width: "150px",
                            height: "150px",
                            borderRadius: theme.shape,
                            objectFit: "cover",
                          }}
                          src={data.image}
                          alt={data.name}
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
                          <Typography fontWeight="bold">
                            ${data.price}
                          </Typography>
                        </Box>
                      </Box>
                    </Paper>
                  ))}
                </Stack>
              )}
              <Box>
                <ShopPagination />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Layout>
    </>
  );
}

export default Shop;
