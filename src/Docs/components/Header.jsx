import React, { useState } from "react";
import {
  Box,
  Button,
  Drawer,
  IconButton,
  Paper,
  Toolbar,
  useMediaQuery,
} from "@mui/material";
import Logo from "../../components/Logo/Logo";

import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import Sidebar from "./Sidebar";
const NAV_WIDTH = 280;

export default function Header() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const [openNav, setOpenNav] = useState(false);

  const toggleNav = () => {
    setOpenNav((prevOpen) => !prevOpen);
  };
  return (
    <Paper>
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

        <Box>
          <Button>Get Update</Button>
          <Button>Buy Now</Button>
        </Box>
      </Box>
    </Paper>
  );
}
