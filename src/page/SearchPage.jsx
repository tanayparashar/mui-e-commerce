import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  CssBaseline,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/system";
import SearchBar from "../components/Search/v1/SearchBar";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SearchHistory from "../components/Search/v1/SearchHistory";
import InputBase from "@mui/material/InputBase";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const SearchPageContainer = styled("div")({
  width: "100%",
  display: "block",
  // background: "#ccc",
  height: "100vh",
});

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: theme.palette.common.white,
  width: "100%",
  borderRadius: "24px",
  backgroundColor: theme.palette.grey[500_32],
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(-0.4)})`,
    transition: theme.transitions.create("width"),
    "&::placeholder": {
      color: theme.palette.common.white, // Set the placeholder color to white
    },
  },
}));

function SearchPage() {
  const navigate = useNavigate();
  const theme = useTheme();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <>
      <SearchPageContainer>
        <CssBaseline />
        <Box
          sx={{ display: "flex", gap: 0.5, p: 1, bgcolor: "secondary.main" }}
        >
          <IconButton
            onClick={handleGoBack}
            aria-label="fingerprint"
            color="inherit"
            sx={{ backgroundColor: theme.palette.grey[500_24], color: "white" }}
          >
            <ArrowBackIcon />
          </IconButton>
          <StyledInputBase
            placeholder="Search online..."
            inputProps={{ "aria-label": "search" }}
          />
          <IconButton
            aria-label="fingerprint"
            color="inherit"
            sx={{ backgroundColor: theme.palette.grey[500_24], color: "white" }}
            // onClick={handleMenuOpen}
          >
            <MoreVertIcon />
          </IconButton>
        </Box>
        <SearchHistory />
      </SearchPageContainer>
    </>
  );
}

export default SearchPage;
