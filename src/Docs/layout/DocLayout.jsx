import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { Box, Grid, useMediaQuery } from "@mui/material";

export default function DocLayout() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));
  return (
    <>
      <Header />

      <Grid container>
        <Grid item xs={3} lg={3} md={3} sm={3}>
          <Box>{!isMobile && <Sidebar />}</Box>
        </Grid>

        <Grid item xs={12} md={9} sm={12} lg={9}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100vh",
            }}
          >
            <Box sx={{ pt: 16, px: 4 }}>
              <Outlet />
            </Box>
            <Footer />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
