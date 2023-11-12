import React, { useState } from "react";
import {
  Box,
  Drawer,
  Typography,
  IconButton,
  Badge,
  Divider,
  Button,
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import LightModeIcon from "@mui/icons-material/LightMode";
import AlignHorizontalLeftIcon from "@mui/icons-material/AlignHorizontalLeft";
import AlignHorizontalRightIcon from "@mui/icons-material/AlignHorizontalRight";
import { useTheme } from "@mui/material/styles";
// import { useThemeContext } from "../../../contexts/ThemeContext";

function ReuseBtn({ onClick, icon, theme }) {
  return (
    <Button
      sx={{
        width: "50%",
        height: "100px",
        textAlign: "center",
        display: "grid",
        placeItems: "center",
        borderRadius: "none",
        boxShadow: theme.shadows[3],
        "&:hover": {
          boxShadow: theme.shadows[3], // Set the same or a different shadow for hover
        },
      }}
      onClick={onClick}
    >
      {icon}
    </Button>
  );
}

function UserSetting() {
  const [openNav, setOpenNav] = useState(false);
  const theme = useTheme();

  const toggleNav = () => {
    setOpenNav((prevOpen) => !prevOpen);
  };

  return (
    <Box sx={{ position: "relative" }}>
      <IconButton
        size="large"
        aria-label="show settings"
        color="inherit"
        onClick={toggleNav}
      >
        <Badge badgeContent={0} color="error">
          <SettingsIcon />
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
          sx: { width: 280 },
        }}
      >
        <Box sx={{ p: 1 }}>
          <Typography>Settings</Typography>
          <Divider />
          <Typography p={1}>Mode</Typography>

          <Box sx={{ p: 1, display: "flex", gap: 1 }}>
            <ReuseBtn
              onClick={() => {}}
              label="Night Mode"
              icon={<NightsStayIcon />}
              theme={theme}
            />

            <ReuseBtn
              onClick={() => {}}
              label="Light Mode"
              icon={<LightModeIcon />}
              theme={theme}
            />
          </Box>

          <Typography p={1}>Direction</Typography>
          <Box sx={{ p: 1, display: "flex", gap: 1 }}>
            <ReuseBtn
              onClick={() => {}}
              icon={<AlignHorizontalLeftIcon />}
              theme={theme}
            />

            <ReuseBtn
              onClick={() => {}}
              icon={<AlignHorizontalRightIcon />}
              theme={theme}
            />
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
}

export default UserSetting;
