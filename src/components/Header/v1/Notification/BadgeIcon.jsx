import React from "react";
import { Badge, Button, IconButton } from "@mui/material";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";

const BadgeIcon = ({ badgeCount, cartId, children }) => {
  return (
    <>
      <Badge badgeContent={badgeCount} color="error">
        {children}
      </Badge>
    </>
  );
};

export default BadgeIcon;
