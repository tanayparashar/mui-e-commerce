import React, { useState } from "react";
import { Box, Drawer, Typography, IconButton, Badge } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useTheme } from "@mui/material/styles";
// import { useThemeContext } from "../../../contexts/ThemeContext";

function UserSetting() {
  const [openNav, setOpenNav] = useState(false);
  // const { toggleTheme, themeMode } = useThemeContext();

  const toggleNav = () => {
    setOpenNav((prevOpen) => !prevOpen);
  };

  // const handleDarkModeClick = () => {
  //   if (themeMode === "light") {
  //     toggleTheme();
  //   }
  // };

  // const handleLightModeClick = () => {
  //   if (themeMode === "dark") {
  //     toggleTheme();
  //   }
  // };

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
          sx: { width: 340 },
        }}
      >
        <Box>
          <Typography>Settings</Typography>
          <Box>
            <IconButton onClick={() => {}}>
              <NightsStayIcon />
            </IconButton>
            <IconButton onClick={() => {}}>
              <LightModeIcon />
            </IconButton>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
}

export default UserSetting;
