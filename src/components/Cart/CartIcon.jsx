import React from "react";
import { Badge, Button, IconButton } from "@mui/material";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";

const CartIcon = ({ badgeCount, cartId, onClick }) => {
  return (
    <>
      <IconButton
        size="large"
        edge="end"
        aria-controls={cartId}
        aria-haspopup="true"
        onClick={onClick}
        color="inherit"
        aria-label="show 4 new mails"
      >
        <Badge badgeContent={badgeCount} color="error">
          <ShoppingCartSharpIcon />
        </Badge>
      </IconButton>
    </>
  );
};

export default CartIcon;
