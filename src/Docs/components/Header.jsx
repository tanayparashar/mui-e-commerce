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
  useTheme,
} from "@mui/material";
import Logo from "../../components/Logo/Logo";

import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import Sidebar from "./Sidebar";
const NAV_WIDTH = 280;

function Header() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const theme = useTheme();

  const [openNav, setOpenNav] = useState(false);

  const toggleNav = () => {
    setOpenNav((prevOpen) => !prevOpen);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        p: 1,
        px: isMobile ? 4 : 2,
        background: theme.palette.common.white,
        // boxShadow: theme.shadows[4],
        position: "fixed",
        width: "100%",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 0,
        }}
      >
        {!isMobile && <Logo />}

        {isMobile && (
          <>
            <IconButton edge="start" color="inherit" onClick={toggleNav}>
              <MenuOpenIcon />
            </IconButton>

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
              <Box p={0}>
                <Box sx={{ p: 2 }}>
                  <Logo jc={"left"} />
                </Box>
                <Sidebar />
              </Box>
            </Drawer>
          </>
        )}
      </Box>
      <Box sx={{ gap: 2, display: "flex" }}>
        <Button variant="contained" size="small" color="secondary">
          Get Update
        </Button>
        <Button variant="contained" size="small" color="secondary">
          Buy Now
        </Button>
      </Box>
    </Box>
  );
}

export default Header;
