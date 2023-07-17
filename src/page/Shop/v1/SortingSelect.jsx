import React, { useState } from "react";
import { FormControl, MenuItem, Select } from "@mui/material";

const sortingOptions = [
  { value: "relevancy", label: "Relevancy" },
  { value: "lowToHigh", label: "Lowest Price" },
  { value: "highToLow", label: "Highest Price" },
  { value: "topReviews", label: "Top Customer Reviews" },
  { value: "mostRecent", label: "Most Recent" },
];

const SortingSelect = ({ productData, onSort }) => {
  const [sortingValue, setSortingValue] = useState("relevancy");

  const handleSortingChange = (event) => {
    const selectedValue = event.target.value;
    setSortingValue(selectedValue);
    const sortedData = sortData(selectedValue);
    onSort(sortedData);
  };

  const sortData = (value) => {
    const dataCopy = [...productData];
    switch (value) {
      case "lowToHigh":
        dataCopy.sort((a, b) => a.price - b.price);
        break;
      case "highToLow":
        dataCopy.sort((a, b) => b.price - a.price);
        break;
      case "topReviews":
        dataCopy.sort((a, b) => b.rating - a.rating);
        break;
      case "mostRecent":
        dataCopy.sort((a, b) => b.id - a.id);
        break;
      default:
        // If the sorting option is "relevancy" or not found, use the original data
        break;
    }
    return dataCopy;
  };

  return (
    <FormControl variant="outlined" size={"small"}>
      {/* sx={{ minWidth: 200 }} */}
      <Select value={sortingValue} onChange={handleSortingChange}>
        {sortingOptions.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SortingSelect;
