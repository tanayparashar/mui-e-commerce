import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import WarningIcon from "@mui/icons-material/Warning";

function DeleteWholeCart() {
  const [open, setOpen] = useState(false);

  const handleDeleteClick = () => {
    setOpen(true);
  };

  const handleDialogClose = () => {
    setOpen(false);
  };

  const handleDeleteConfirm = () => {
    // Perform delete operation for the whole cart
    // ...
    setOpen(false);
  };

  return (
    <>
      <Button
        variant="contained"
        startIcon={<DeleteIcon />}
        onClick={handleDeleteClick}
      >
        Delete All
      </Button>

      <Dialog open={open} onClose={handleDialogClose}>
        <Box>
          <DialogTitle sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <WarningIcon sx={{ color: "error.main", fontSize: 40 }} />
            Warning!
          </DialogTitle>
          <DialogContent>
            Are you sure you want to delete the whole cart? This action cannot
            be undone.
          </DialogContent>
        </Box>
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

export default DeleteWholeCart;
