import React, { useState, useEffect } from "react";
import Products from "./components/Products";
import Sidebar from "./components/Sidebar";
import { Button, Grid, Typography } from "@mui/material";
import products from "../../../../public/shop";

function Shop2() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [query, setQuery] = useState("");
  const [priceRange, setPriceRange] = useState([0, 300]); // Initial price range
  const [selectedRating, setSelectedRating] = useState(null); // Updated to null

  const [selectedColor, setSelectedColor] = useState(""); // Selected color
  const [colorCounts, setColorCounts] = useState({}); // Initialize colorCounts state
  const [selectedBrand, setSelectedBrand] = useState(""); // Selected color
  const [brandCounts, setBrandCounts] = useState({}); // Initialize colorCounts state

  // Calculate color counts
  useEffect(() => {
    const counts = {};
    products.forEach((product) => {
      const color = product.color;
      counts[color] = (counts[color] || 0) + 1;
    });
    setColorCounts(counts);
  }, []); // Empty dependency array to run the effect only once

  // Calculate color counts
  useEffect(() => {
    const counts = {};
    products.forEach((product) => {
      const company = product.company;
      counts[company] = (counts[company] || 0) + 1;
    });
    setBrandCounts(counts);
  }, []);

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

  const handleBrandChange = (company) => {
    setSelectedBrand(company);
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

    const brandMatches =
      selectedBrand === "" || product.company === selectedBrand;
    const ratingMatches =
      selectedRating === null ||
      product.rating.rate >= parseFloat(selectedRating);

    return (
      titleMatches &&
      categoryMatches &&
      priceMatches &&
      colorMatches &&
      brandMatches &&
      ratingMatches
    );
  });

  const handleReset = () => {
    setSelectedCategory("");
    setQuery("");
    setPriceRange([0, 300]);
    setSelectedColor("");
    setSelectedRating(null);
    setSelectedBrand(""); // Add this line to reset the selected brand
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <Button variant="outlined" onClick={handleReset}>
          Reset Filters
        </Button>
        <Sidebar
          onCategoryChange={handleCategoryChange}
          selectedCategory={selectedCategory}
          onInputChange={handleInputChange}
          query={query}
          onPriceChange={handlePriceChange}
          priceRange={priceRange}
          onRatingChange={handleRatingChange} // Pass the rating change handler
          selectedRating={selectedRating} // Pass the selected rating value
          onColorChange={handleColorChange}
          selectedColor={selectedColor}
          colorCounts={colorCounts} // Pass color counts
          availableColors={["white", "red", "green", "blue", "black"]} // Example colors
          onBrandChange={handleBrandChange}
          selectedBrand={selectedBrand}
          brandCounts={brandCounts} // Pass color counts
          availableBrands={["Nike", "Adidas", "Puma", "Vans"]} // Example brands
        />
      </Grid>
      <Grid item xs={9}>
        <Typography variant="h4">Shop</Typography>
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
  );
}

export default Shop2;
