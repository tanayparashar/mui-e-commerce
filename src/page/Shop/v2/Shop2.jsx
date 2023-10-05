import React, { useState, useEffect } from "react";
import Products from "./components/Products";
import Sidebar from "./components/Sidebar";
import {
  Button,
  Container,
  Drawer,
  Grid,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import products from "../../../../public/shop";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import Layout from "../../../layout/GlobalLayout/LayoutHeaderOnly";

const NAV_WIDTH = 280; // Set the width of the nav drawer

function Shop2() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [query, setQuery] = useState("");
  const [priceRange, setPriceRange] = useState([0, 300]); // Initial price range
  const [selectedRating, setSelectedRating] = useState(null); // Updated to null

  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const [openNav, setOpenNav] = useState(false);

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

  const toggleNav = () => {
    setOpenNav((prevOpen) => !prevOpen);
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
    <Layout>
      <Container>
        <Grid container spacing={2}>
          {!isMobile && (
            <Grid item xs={3}>
              <Sidebar
                handleReset={handleReset}
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
          )}

          <Grid item xs={9}>
            {isMobile && (
              <>
                <Toolbar sx={{ p: 0, ml: 2 }}>
                  <IconButton edge="start" color="inherit" onClick={toggleNav}>
                    <MenuOpenIcon />
                  </IconButton>
                </Toolbar>
                <Drawer
                  open={openNav}
                  onClose={() => setOpenNav(false)}
                  ModalProps={{
                    keepMounted: true,
                  }}
                  PaperProps={{
                    sx: { width: NAV_WIDTH },
                  }}
                >
                  <Sidebar
                    handleReset={handleReset}
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
                </Drawer>
              </>
            )}
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
      </Container>
    </Layout>
  );
}

export default Shop2;
