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
} from "@mui/material";

const Sidebar = ({
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
}) => {
  const categories = [
    "sneakers",
    "flats",
    "heels",
    "sandals",
    "others", // Add other category options as needed
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h6">Search</Typography>
      <TextField
        fullWidth
        variant="outlined"
        label="Search Products"
        value={query}
        onChange={(e) => onInputChange(e)}
      />

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

      <Typography variant="h6">Price Range</Typography>
      <Slider
        value={priceRange}
        onChange={(_, newValue) => onPriceChange(newValue)}
        valueLabelDisplay="auto"
        valueLabelFormat={(value) => `$${value}`}
        min={0}
        max={300} // Set the maximum price range value as needed
        step={10}
      />
      <Typography variant="body2">
        Price Range: ${priceRange[0]} - ${priceRange[1]}
      </Typography>

      <Typography variant="h6">Color</Typography>
      <FormControl component="fieldset">
        <FormGroup>
          {availableColors.map((color) => (
            <div key={color} style={{ display: "flex", alignItems: "center" }}>
              <Box
                sx={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  marginRight: "8px",
                  backgroundColor: color,
                  border:
                    selectedColor === color ? "2px solid primary.main" : "none",
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

      <Typography variant="h6">Rating</Typography>
      <Rating
        name="rating-filter"
        value={parseFloat(selectedRating)} // Convert selectedRating to a number
        precision={0.5} // You can adjust precision as needed
        onChange={(event, newValue) => onRatingChange(newValue)} // Include the rating change handler
      />

      {/* <Typography variant="h6">Brands</Typography>
      <FormControl component="fieldset">
        <FormGroup>
          {availableBrands.map((brand) => (
            <FormControlLabel
              key={brand}
              control={
                <Checkbox
                  checked={selectedBrands.includes(brand)}
                  onChange={() => onBrandChange(brand)}
                />
              }
              label={brand}
            />
          ))}
        </FormGroup>
      </FormControl> */}
    </Box>
  );
};

export default Sidebar;
