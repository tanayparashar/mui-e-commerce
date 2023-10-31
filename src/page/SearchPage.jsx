import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, IconButton, useMediaQuery, useTheme } from "@mui/material";
import { styled } from "@mui/system";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SearchHistory from "../components/Search/v1/SearchHistory";
import InputBase from "@mui/material/InputBase";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const SearchPageContainer = styled("div")({
  width: "100%",
  display: "block",
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
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <>
      <SearchPageContainer>
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
        {!isMobile ? (
          <p style={{ textAlign: "center" }}>
            This page only for mobile device please go mobile device and view
            the UI
          </p>
        ) : (
          <SearchHistory />
        )}
        {/* <SearchHistory /> */}
      </SearchPageContainer>
    </>
  );
}

export default SearchPage;
