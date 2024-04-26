import React from "react";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const MenuIconButton = ({ onClick }) => {
  return (
    <IconButton
      edge="start"
      color="inherit"
      aria-label="menu"
      onClick={onClick}
    >
      <MenuIcon />
    </IconButton>
  );
};

export default MenuIconButton;
