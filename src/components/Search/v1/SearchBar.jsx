import React, { useRef, useState } from "react";
import { Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Search, SearchIconWrapper, StyledInputBase } from "./SearchStyles";
import SearchKeyword from "./SearchKeyword";

function SearchBar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const searchRef = useRef(null);
  const [anchorEl, setAnchorEl] = useState(null);

  // Static popular keywords data
  const popularKeywords = [
    "Keyword 1",
    "Keyword 2",
    "Keyword 3",
    "Keyword 4",
    "Keyword 5",
    "Keyword 6",
    "Keyword 7",
    "Keyword 8",
    "Keyword 9",
    "Keyword 10",
  ];

  const handleSearchFieldClick = (event) => {
    setIsDropdownOpen(!isDropdownOpen);
    setAnchorEl(event.currentTarget);
  };

  const handleDropdownClose = () => {
    setIsDropdownOpen(false);
    setAnchorEl(null);
  };
  return (
    <Box sx={{ display: "flex", position: "relative" }}>
      <Search onClick={handleSearchFieldClick} ref={searchRef}>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        />
        <SearchKeyword
          isOpen={isDropdownOpen}
          onClose={handleDropdownClose}
          keywords={popularKeywords}
          anchorEl={anchorEl}
          sx={{
            position: "absolute",
            top: "100%", // Position the dropdown below the search field
            left: "0", // Align the dropdown with the left side of the search field
            marginTop: "8px", // Add some spacing between the search field and the dropdown
          }}
        />
      </Search>
    </Box>
  );
}

export default SearchBar;
