import React, { useState, useEffect } from "react";
import Products from "./components/Products";
import Sidebar from "./components/Sidebar";
import { Grid, Typography } from "@mui/material";
import products from "../../../../public/shop";

function Shop2() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [query, setQuery] = useState("");
  const [priceRange, setPriceRange] = useState([0, 300]); // Initial price range
  const [selectedColor, setSelectedColor] = useState(""); // Selected color
  const [selectedRating, setSelectedRating] = useState(null); // Updated to null
  const [colorCounts, setColorCounts] = useState({}); // Initialize colorCounts state

  // Calculate color counts
  useEffect(() => {
    const counts = {};
    products.forEach((product) => {
      const color = product.color;
      counts[color] = (counts[color] || 0) + 1;
    });
    setColorCounts(counts);
  }, []); // Empty dependency array to run the effect only once

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handlePriceChange = (newPriceRange) => {
    setPriceRange(newPriceRange);
  };

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleRatingChange = (newValue) => {
    setSelectedRating(newValue);
  };

  const filteredProducts = products.filter((product) => {
    const titleMatches = product.title
      .toLowerCase()
      .includes(query.toLowerCase());
    const categoryMatches =
      selectedCategory === "" || product.category === selectedCategory;
    const priceMatches =
      product.newPrice >= priceRange[0] && product.newPrice <= priceRange[1];
    const colorMatches =
      selectedColor === "" || product.color === selectedColor;
    const ratingMatches =
      selectedRating === null ||
      product.rating.rate >= parseFloat(selectedRating);

    return (
      titleMatches &&
      categoryMatches &&
      priceMatches &&
      colorMatches &&
      ratingMatches
    );
  });

  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <Sidebar
          onCategoryChange={handleCategoryChange}
          selectedCategory={selectedCategory}
          onInputChange={handleInputChange}
          query={query}
          onPriceChange={handlePriceChange}
          priceRange={priceRange}
          onColorChange={handleColorChange}
          onRatingChange={handleRatingChange} // Pass the rating change handler
          selectedRating={selectedRating} // Pass the selected rating value
          selectedColor={selectedColor}
          colorCounts={colorCounts} // Pass color counts
          availableColors={["white", "red", "green", "blue", "black"]} // Example colors
        />
      </Grid>
      <Grid item xs={9}>
        <Typography variant="h4">Shop</Typography>
        <Grid item xs={10}>
          {filteredProducts.length === 0 ? (
            <Typography variant="h6">No results found</Typography>
          ) : (
            <>
              {query && (
                <Typography variant="h6">
                  {filteredProducts.length} results found
                </Typography>
              )}
              <Products result={filteredProducts} />
            </>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Shop2;
