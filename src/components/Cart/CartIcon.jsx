import React from "react";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
import { Badge, Button, IconButton, Menu, MenuItem } from "@mui/material";

const CartIcon = ({ badgeCount, onClick, cartId }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

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
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        id={cartId}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={handleMenuClose}>My account</MenuItem>

        {/* To do  */}
        <MenuItem>
          <Button>Checkout</Button>
        </MenuItem>
      </Menu>
    </>
  );
};

export default CartIcon;
