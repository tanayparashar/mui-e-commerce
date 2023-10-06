import React from "react";
import {
  Typography,
  TextField,
  MenuItem,
  RadioGroup,
  FormGroup,
  FormControl,
  FormControlLabel,
  Radio,
  Slider,
  Checkbox,
  Rating,
  Box,
  Paper,
  Button,
  InputBase,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    // marginLeft: theme.spacing(1),
    width: "100%",
    // backgroundColor: "red",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 1),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const Sidebar = ({
  handleReset,
  onCategoryChange,
  selectedCategory,
  onInputChange,
  query,
  onPriceChange,
  priceRange,
  onRatingChange, // Include the rating change handler
  selectedRating, // Include the selected rating value
  onColorChange,
  selectedColor,
  availableColors,
  colorCounts, // Add colorCounts prop

  onBrandChange,
  selectedBrand,
  availableBrands,
  brandCounts, // Add colorCounts prop
}) => {
  const categories = [
    "sneakers",
    "flats",
    "heels",
    "sandals",
    "others", // Add other category options as needed
  ];

  return (
    <Box sx={{ p: 1 }}>
      <Button variant="outlined" onClick={handleReset}>
        Reset Filters
      </Button>

      <Paper elevation={3}>
        <Box mt={3} py={1}>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              value={query}
              onChange={(e) => onInputChange(e)}
            />
          </Search>
        </Box>
      </Paper>

      {/* <Typography variant="h6">Categories</Typography>
      <TextField
        select
        fullWidth
        variant="outlined"
        label="Select Category"
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
      >
        <MenuItem value="">All</MenuItem>
        {categories.map((category) => (
          <MenuItem key={category} value={category}>
            {category}
          </MenuItem>
        ))}
      </TextField> */}

      <Paper elevation={3}>
        <Box p={2} mt={2}>
          <Typography variant="h6">Categories</Typography>
          <RadioGroup
            aria-label="Category"
            name="category"
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
          >
            <FormControlLabel value="" control={<Radio />} label="All" />
            {categories.map((category) => (
              <FormControlLabel
                key={category}
                value={category}
                control={<Radio />}
                label={category}
              />
            ))}
          </RadioGroup>
        </Box>
      </Paper>

      <Paper elevation={3}>
        <Box mt={2} p={2}>
          <Typography variant="h6">Price Range</Typography>
          <Box px={1.5}>
            <Slider
              value={priceRange}
              onChange={(_, newValue) => onPriceChange(newValue)}
              valueLabelDisplay="auto"
              valueLabelFormat={(value) => `$${value}`}
              min={0}
              max={300} // Set the maximum price range value as needed
              step={10}
            />
          </Box>
          <Typography variant="body2">
            Price Range: ${priceRange[0]} - ${priceRange[1]}
          </Typography>
        </Box>
      </Paper>

      <Paper elevation={3}>
        <Box p={2} mt={2}>
          <Typography variant="h6">Color</Typography>
          <FormControl component="fieldset">
            <FormGroup>
              {availableColors.map((color) => (
                <div
                  key={color}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <Box
                    sx={{
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      marginRight: "8px",
                      backgroundColor: color,
                      border:
                        selectedColor === color
                          ? "2px solid primary.main"
                          : "none",
                      boxShadow:
                        selectedColor === color
                          ? "0 0 5px rgba(0, 0, 0, 0.5)"
                          : "0 0 5px rgba(0, 0, 0, 0.5)", // Add boxShadow
                    }}
                  ></Box>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={selectedColor === color}
                        onChange={() => onColorChange(color)}
                      />
                    }
                    label={color}
                  />
                  <Box sx={{ fontSize: 12 }}>({colorCounts[color] || 0})</Box>{" "}
                  {/* Display the count for the current color */}
                </div>
              ))}
            </FormGroup>
          </FormControl>
        </Box>
      </Paper>

      <Paper elevation={3}>
        <Box p={2} mt={2}>
          <Typography variant="h6">Brand</Typography>
          <FormControl component="fieldset">
            <FormGroup>
              {availableBrands.map((company) => (
                <div
                  key={company}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={selectedBrand === company}
                        onChange={() => onBrandChange(company)}
                      />
                    }
                    label={company}
                  />
                  <Box sx={{ fontSize: 12 }}>({brandCounts[company] || 0})</Box>
                </div>
              ))}
            </FormGroup>
          </FormControl>
        </Box>
      </Paper>

      <Paper elevation={3}>
        <Box p={2} mt={2}>
          <Typography variant="h6">Rating</Typography>
          <Rating
            name="rating-filter"
            value={parseFloat(selectedRating)} // Convert selectedRating to a number
            precision={0.5} // You can adjust precision as needed
            onChange={(event, newValue) => onRatingChange(newValue)} // Include the rating change handler
          />
        </Box>
      </Paper>
    </Box>
  );
};

export default Sidebar;
