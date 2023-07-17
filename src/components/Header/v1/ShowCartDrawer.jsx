import React, { useState } from "react";
import { Box, Drawer, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import CartIcon from "../../Cart/CartIcon";
const NAV_WIDTH = 240; // Set the width of the nav drawer

function ShowCartDrawer() {
  const [openNav, setOpenNav] = useState(false);
  const toggleNav = () => {
    setOpenNav((prevOpen) => !prevOpen);
  };
  return (
    <>
      <CartIcon badgeCount={14} onClick={toggleNav} />
      <Drawer
        open={openNav}
        anchor="right"
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
          <Box component={Link} to="/addtocart" color="inherit">
            Go to cart page
          </Box>
        </Typography>
      </Drawer>
    </>
  );
}

export default ShowCartDrawer;
