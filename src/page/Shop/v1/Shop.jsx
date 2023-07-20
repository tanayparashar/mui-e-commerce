import React, { useRef, useState, useEffect } from "react";
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
} from "@mui/material";
import Layout from "../../../layout/GlobalLayout/Layout";
import { Helmet } from "react-helmet-async";

import ViewModuleIcon from "@mui/icons-material/ViewModule";
import ViewListIcon from "@mui/icons-material/ViewList";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

import SortingSelect from "./SortingSelect";
import ShopPagination from "./ShopPagination";
import ShowGridProduct from "./View/ShowGridProduct";
import ShowFlatProduct from "./View/ShowFlatProduct";
import ReuseableCarousel from "./../../../components/ReusableProduct/ReuseableCarousel";
import Sidebar from "./Sidebar";

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
            {!isMobile && (
              <Grid item md={3} mt={5}>
                <Sidebar />
              </Grid>
            )}
            <Grid item md={9} mt={5}>
              <Paper>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mb: 3,
                    py: 1,
                    px: 1,
                  }}
                >
                  <Stack direction="row" spacing={1} alignItems="center">
                    {isMobile && (
                      <>
                        <Toolbar sx={{ p: 0, ml: 2 }}>
                          <IconButton
                            edge="start"
                            color="inherit"
                            onClick={toggleNav}
                          >
                            <MenuOpenIcon />
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
                          <Box sx={{ p: 2 }}>
                            <Sidebar />
                          </Box>
                        </Drawer>
                      </>
                    )}
                    <IconButton
                      onClick={handleViewModeChange}
                      color={viewMode === "grid" ? "primary" : "default"}
                    >
                      {viewMode === "grid" ? (
                        <ViewModuleIcon />
                      ) : (
                        <ViewListIcon color="primary" />
                      )}
                    </IconButton>
                  </Stack>

                  {/* Rendering the SortingSelect component */}
                  <SortingSelect
                    productData={productData}
                    onSort={handleSortingChange}
                  />
                </Box>
              </Paper>

              {viewMode === "grid" ? ( // Conditional rendering based on viewMode
                <Grid container spacing={2}>
                  <ShowGridProduct productData={productData} />
                </Grid>
              ) : (
                <ShowFlatProduct productData={productData} />
              )}

              {/* Pagination  */}
              <ShopPagination />
            </Grid>
          </Grid>
          <ReuseableCarousel sectionTitle={"Shop under $20 🏪"} />
        </Container>
      </Layout>
    </>
  );
}

export default Shop;
