import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { Box, Grid, useMediaQuery } from "@mui/material";

export default function DocLayout() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <>
      <Header />

      <Grid container spacing={2}>
        {!isMobile && (
          <Grid item xs={3} lg={3} md={3} sm={3}>
            <Sidebar />
          </Grid>
        )}

        <Grid item xs={12} md={9} sm={9} lg={9}>
          <Outlet />
          <Box>
            <Footer />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
