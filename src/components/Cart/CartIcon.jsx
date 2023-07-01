import React from "react";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
import { Badge, IconButton } from "@mui/material";

function CartIcon() {
  return (
    <>
      <IconButton size="large" aria-label="show 4 new mails" color="inherit">
        <Badge badgeContent={4} color="error">
          <ShoppingCartSharpIcon />
        </Badge>
      </IconButton>
    </>
  );
}

export default CartIcon;
