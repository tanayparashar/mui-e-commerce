import React, { useState } from "react";
import {
  IconButton,
  Dialog,
  DialogTitle,
  DialogActions,
  Button,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function DeleteSingleCart() {
  const [open, setOpen] = useState(false);

  const handleDeleteClick = () => {
    setOpen(true);
  };

  const handleDialogClose = () => {
    setOpen(false);
  };

  const handleDeleteConfirm = () => {
    // Perform delete operation
    // ...
    setOpen(false);
  };

  return (
    <>
      <IconButton
        aria-label="delete"
        onClick={handleDeleteClick}
        color="error"
        size="small"
      >
        <DeleteIcon />
      </IconButton>

      <Dialog open={open} onClose={handleDialogClose}>
        <DialogTitle>Are you sure you want to delete this item?</DialogTitle>
        <DialogActions>
          <Button
            onClick={handleDeleteConfirm}
            variant="contained"
            color="error"
          >
            Yes
          </Button>
          <Button onClick={handleDialogClose} variant="contained">
            No
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default DeleteSingleCart;
