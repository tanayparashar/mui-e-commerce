import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import { Outlet } from "react-router-dom";
import Layout from "../../../layout/GlobalLayout/Layout";
import {
  Box,
  Container,
  Drawer,
  Grid,
  IconButton,
  Toolbar,
  useMediaQuery,
} from "@mui/material";

import MenuOpenIcon from "@mui/icons-material/MenuOpen";

const NAV_WIDTH = 280;

export default function UserDashboardLayout() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const [openNav, setOpenNav] = useState(false);

  const toggleNav = () => {
    setOpenNav((prevOpen) => !prevOpen);
  };
  return (
    <Layout>
      <Container>
        <Grid container spacing={2} mt={5}>
          {!isMobile && (
            <Grid item xs={3} lg={3} md={3} sm={3}>
              <Sidebar />
            </Grid>
          )}

          <Grid item xs={12} md={9} sm={9} lg={9}>
            {isMobile && (
              <>
                <Toolbar sx={{ p: 0, ml: 2 }}>
                  <IconButton edge="start" color="inherit" onClick={toggleNav}>
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
                  <Box p={1}>
                    <Sidebar />
                  </Box>
                </Drawer>
              </>
            )}
            <Outlet />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}
