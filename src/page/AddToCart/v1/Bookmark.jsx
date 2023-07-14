import React, { useState } from "react";
import { Checkbox, Dialog, DialogTitle } from "@mui/material";

import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function Bookmark() {
  const [open, setOpen] = useState(false);

  const handleCheckboxChange = (event) => {
    setOpen(event.target.checked);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Checkbox
        {...label}
        icon={<BookmarkBorderIcon />}
        checkedIcon={<BookmarkIcon />}
        onChange={handleCheckboxChange}
      />

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>You have successfully bookmarked!</DialogTitle>
      </Dialog>
    </>
  );
}

export default Bookmark;
