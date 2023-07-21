import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

function CustomDialog({ open, onClose }) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>User created successfully.</DialogTitle>
      <DialogContent>
        Thank you for registration, Enjoy our service get your product and if
        you face any issue fill free to contact us
      </DialogContent>
      <DialogActions>
        <Button variant="contained" component={Link} to="/" onClick={onClose}>
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default CustomDialog;
