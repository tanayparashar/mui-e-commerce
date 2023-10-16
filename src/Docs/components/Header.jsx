import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  Paper,
  Toolbar,
  useMediaQuery,
} from "@mui/material";
import Logo from "../../components/Logo/Logo";
import styled from "@emotion/styled";

import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import Sidebar from "./Sidebar";
const NAV_WIDTH = 280;

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: theme.palette.secondary.main,
  // [theme.breakpoints.down("sm")]: {
  //   flexDirection: "column",
  //   justifyContent: "center",
  // },
}));

function Header(props) {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const [openNav, setOpenNav] = useState(false);

  const toggleNav = () => {
    setOpenNav((prevOpen) => !prevOpen);
  };

  return (
    <Box sx={{ display: "flex", mb: 10 }}>
      <AppBar component="nav">
        <StyledToolbar>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              p: 1.5,
            }}
          >
            {!isMobile && <Logo />}

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
                    <Logo jc={"left"} />
                    <Sidebar />
                  </Box>
                </Drawer>
              </>
            )}
          </Box>
          <Box>
            <Button variant="contained">Get Update</Button>
            <Button variant="contained">Buy Now</Button>
          </Box>
        </StyledToolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
