import React, { useState } from "react";
import {
  Box,
  Drawer,
  IconButton,
  Badge,
  Typography,
  Divider,
} from "@mui/material";

const NAV_WIDTH = 320; // Set the width of the nav drawer
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import NotificationTab from "./Notification/NotificationTab";

const notifications = [
  {
    id: 1,
    message: "You have a new message from John Doe.",
    timestamp: "2023-10-30 09:30 AM",
    isRead: false,
  },
  {
    id: 2,
    message: "Your order #12345 has been shipped.",
    timestamp: "2023-10-29 03:45 PM",
    isRead: true,
  },
  {
    id: 3,
    message: "A new event has been added to your calendar.",
    timestamp: "2023-10-28 11:15 AM",
    isRead: false,
  },
  {
    id: 4,
    message: "You have a meeting with the team at 2:00 PM.",
    timestamp: "2023-10-27 01:00 PM",
    isRead: true,
  },
];

console.log(notifications);

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
        <>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <IconButton
                onClick={() => setOpenNav(false)}
                aria-label="fingerprint"
                color="inherit"
                // sx={{ backgroundColor: theme.palette.grey[500_24], color: "white" }}
              >
                <ArrowBackIcon />
              </IconButton>
              <Typography>Notification</Typography>
            </Box>
            <IconButton
              aria-label="fingerprint"
              color="inherit"
              // onClick={handleMenuOpen}
              // sx={{ backgroundColor: theme.palette.grey[500_16] }}
            >
              <MoreHorizRoundedIcon fontSize="small" />
            </IconButton>
          </Box>

          <Divider />
          <NotificationTab />

          {/* {notifications.map((notice) => (
            <Box key={notice.id}>
              <Typography>{notice.message}</Typography>
              <Divider />
            </Box>
          ))} */}
        </>
      </Drawer>
    </Box>
  );
}

export default UserSetting;
