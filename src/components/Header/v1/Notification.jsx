import React, { useState } from "react";
import { Box, Drawer, IconButton, Badge } from "@mui/material";

const NAV_WIDTH = 280; // Set the width of the nav drawer
import NotificationsIcon from "@mui/icons-material/Notifications";

function UserSetting() {
  const [openNav, setOpenNav] = useState(false);
  const toggleNav = () => {
    setOpenNav((prevOpen) => !prevOpen);
  };

  return (
    <Box sx={{ position: "relative" }}>
      <IconButton
        size="large"
        aria-label="show 4 new mails"
        color="inherit"
        onClick={toggleNav}
      >
        <Badge badgeContent={4} color="error">
          <NotificationsIcon />
        </Badge>
      </IconButton>

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
        <Box></Box>
      </Drawer>
    </Box>
  );
}

export default UserSetting;
