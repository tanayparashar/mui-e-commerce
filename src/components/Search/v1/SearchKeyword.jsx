import React, { useState } from "react";
import {
  Popper,
  Paper,
  ClickAwayListener,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";

const SearchKeyword = ({ isOpen, onClose, keywords, anchorEl }) => {
  if (!isOpen) {
    return null; // Return null when the dropdown is closed
  }
  return (
    <Box
      sx={{
        position: "absolute",
        // top: "calc(100% + 8px)", // Position the dropdown below the search field
        left: 0, // Align the dropdown with the left side of the search field
        zIndex: 1, // Ensure the dropdown is above other elements
        width: "100%",
        borderTop: "2px solid #ccc",
        borderRadius: 1,
      }}
    >
      <ClickAwayListener onClickAway={onClose}>
        <Paper>
          <List>
            {keywords.map((keyword, index) => (
              <ListItem key={index} sx={{ display: "block" }}>
                <Box
                  component={Link}
                  to="/lol"
                  sx={{ textDecoration: "none", color: "inherit" }}
                >
                  <ListItemText primary={keyword} />
                </Box>
              </ListItem>
            ))}
          </List>
        </Paper>
      </ClickAwayListener>
    </Box>
  );
};

export default SearchKeyword;
