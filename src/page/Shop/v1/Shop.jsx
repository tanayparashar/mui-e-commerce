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
import Sidebar from "./Sidebar";

import productData from "./data";
import ReuseableProductCarousel from "../../../components/Product/v1/ReuseableProductCarousel";
import useScrollToTopOnMount from "../../../hook/useScrollToTopOnMount";

const NAV_WIDTH = 240; // Set the width of the nav drawer

function Shop() {
  const [sortedData, setSortedData] = useState(productData);
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const [openNav, setOpenNav] = useState(false);
  const [viewMode, setViewMode] = useState(
    localStorage.getItem("viewMode") || "grid"
  );

  useScrollToTopOnMount();
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
          <ReuseableProductCarousel
            SectionTitle={"Shop under $20 🏪"}
            RouteLink={"/v2/shop"}
          />
        </Container>
      </Layout>
    </>
  );
}

export default Shop;
