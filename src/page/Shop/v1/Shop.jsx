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
      "https://s.alicdn.com/@sc04/kf/U3e61f2f7c2044998946a55a6ed93efe4T.jpeg_480x480.jpg",
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
      "https://s.alicdn.com/@sc04/kf/Ab060a9795b554cfca101888d5417f2b7n.jpg_220x220.jpg",
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
      "https://s.alicdn.com/@sc04/kf/Ucd8d64697249428791933b0c67745d4aP.jpg_300x300.jpg",
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
      "https://s.alicdn.com/@sc04/kf/Ued246640dfab45a9964b6a05e89d9d52p.jpg_300x300.jpg",
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
      "https://s.alicdn.com/@sc04/kf/Ab99a7ee3eff64fa7b17a9c2bff3123af5.jpg_300x300.jpg",
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
      "https://s.alicdn.com/@sc04/kf/A6ef11c18a15644da8448925c74fae25e9.jpg_300x300.jpg",
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
      "https://s.alicdn.com/@sc04/kf/H39a694fe232b4cf6ac8b612edc786ebap.jpg_300x300.jpg",
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
      "https://s.alicdn.com/@sc04/kf/H9b0ab25b7432474bb8611fc5c7972223L.jpg_250x250xz.jpg",
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
      "https://s.alicdn.com/@sc04/kf/Abf188f0d6d324a22b797df810f2e238aD.jpg_480x480.jpg",
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
      "https://s.alicdn.com/@sc04/kf/U899fd99865174890b48999d443b2b494o.jpg_480x480.jpg",
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
      "https://s.alicdn.com/@sc04/kf/Ub297c0174ec24557a679aa5f1e975f5e0.jpg_300x300.jpg",
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
      "https://s.alicdn.com/@sc04/kf/U9945645e3e694637829203ec994d6ec4F.jpg_300x300.jpg",
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
