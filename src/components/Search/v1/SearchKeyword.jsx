import React, { useState } from "react";
import {
  Popper,
  Paper,
  ClickAwayListener,
  List,
  ListItem,
  ListItemText,
  Box,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import SearchSlider from "./SearchSlider";

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
        <Paper sx={{ p: 2 }}>
          <Box>
            <Typography variant="h6" fontWeight={"bold"} mb={1}>
              Trending Products
            </Typography>
            <SearchSlider />
          </Box>
          <Box>
            <Typography variant="h6" fontWeight={"bold"} mt={2}>
              Trending Search
            </Typography>
            <List sx={{ p: 0 }}>
              {keywords.map((keyword, index) => (
                <ListItem key={index} sx={{ display: "block", px: 0.4 }}>
                  <Box
                    component={Link}
                    to="/lol"
                    sx={{ textDecoration: "none", color: "inherit" }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <TrendingUpIcon />
                      <ListItemText primary={keyword} />
                    </Box>
                  </Box>
                </ListItem>
              ))}
            </List>
          </Box>
        </Paper>
      </ClickAwayListener>
    </Box>
  );
};

export default SearchKeyword;
