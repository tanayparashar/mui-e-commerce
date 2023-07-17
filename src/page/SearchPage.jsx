import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, CssBaseline, IconButton, useMediaQuery } from "@mui/material";
import { styled } from "@mui/system";
import SearchBar from "../components/Search/v1/SearchBar";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SearchHistory from "../components/Search/v1/SearchHistory";

const SearchPageContainer = styled("div")({
  width: "100%",
  display: "block",
  background: "#cccc",
  height: "100vh",
});

function SearchPage() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <>
      <SearchPageContainer>
        <CssBaseline />
        <Box sx={{ display: "flex", justifyContent: "center", pt: 3 }}>
          <IconButton onClick={handleGoBack}>
            <ArrowBackIcon />
          </IconButton>
          <SearchBar />
        </Box>
        <SearchHistory />
      </SearchPageContainer>
    </>
  );
}

export default SearchPage;
