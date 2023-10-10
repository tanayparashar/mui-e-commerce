import React, { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";

export default function ManageOrder() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [cancelDialogOpen, setCancelDialogOpen] = useState(false);
  const [cancellationReason, setCancellationReason] = useState("");

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (action) => {
    if (action === "Cancel Order") {
      setCancelDialogOpen(true);
    } else {
      console.log(`Clicked on ${action}`);
      handleMenuClose();
    }
  };

  const handleCancelDialogClose = () => {
    setCancelDialogOpen(false);
  };

  const handleCancelOrder = () => {
    // Handle the cancellation here, including the cancellation reason
    console.log("Order canceled with reason:", cancellationReason);
    setCancelDialogOpen(false);
    handleMenuClose();
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="three-dot-menu"
        aria-haspopup="true"
        onClick={handleMenuOpen}
        sx={{
          "&:hover": {
            backgroundColor: "#e0e0e0",
          },
        }}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="three-dot-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        sx={{ minWidth: "200px" }}
      >
        <MenuItem onClick={() => handleMenuItemClick("Cancel Order")}>
          Cancel Order
        </MenuItem>
        <MenuItem onClick={() => handleMenuItemClick("Option 2")}>
          Option 2
        </MenuItem>
        <MenuItem onClick={() => handleMenuItemClick("Option 3")}>
          Option 3
        </MenuItem>
      </Menu>

      {/* Cancellation Dialog */}
      <Dialog
        open={cancelDialogOpen}
        onClose={handleCancelDialogClose}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle>Cancel Order</DialogTitle>
        <DialogContent>
          <Typography color="info">
            Please give us information why you want to cancel
          </Typography>
          <TextField
            // label="Reason for Cancellation"
            minRows={3} // Specify the minimum number of rows
            maxRows={6} // Specify the maximum number of rows (optional)
            fullWidth
            multiline
            value={cancellationReason}
            onChange={(e) => setCancellationReason(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancelDialogClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleCancelOrder} color="secondary">
            Confirm Cancellation
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
