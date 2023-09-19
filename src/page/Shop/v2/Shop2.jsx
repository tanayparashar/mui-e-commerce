import { useState } from "react";
import ShopSearchBar from "./components/ShopSearchBar";
import Products from "./components/Products";
import products from "../../../../public/shop";
import Recommended from "./components/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import CustomCard from "./components/CustomCard";
import { Grid, Typography } from "@mui/material";

function Sidebar2() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredData = (products, selected, query) => {
    let filteredProducts = products;

    if (query) {
      filteredProducts = filteredProducts.filter(
        (product) =>
          product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
      );
    }

    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts.map(
      ({ img, title, rating, reviews, prevPrice, newPrice }) => (
        <CustomCard
          key={Math.random()}
          img={img}
          title={title}
          rating={rating.rate}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  };

  const result = filteredData(products, selectedCategory, query);
  const totalCount = result.length; // Calculate the total count

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Sidebar handleChange={handleChange} />
        </Grid>
        <Grid item xs={10}>
          <ShopSearchBar query={query} handleInputChange={handleInputChange} />
          <Recommended handleClick={handleClick} />
          {totalCount === 0 ? (
            <Typography variant="h6">No results found</Typography>
          ) : (
            <>
              {query && (
                <Typography variant="h6">{totalCount} results found</Typography>
              )}
              <Products result={result} />
            </>
          )}
        </Grid>
      </Grid>
    </>
  );
}

export default Sidebar2;
