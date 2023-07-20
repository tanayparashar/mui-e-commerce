import * as React from "react";
import { Typography, Slider, Box } from "@mui/material";

function valuetext(value) {
  return `${value}°C`;
}

export default function PriceRange() {
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Typography variant="h6">Price Range</Typography>
      <Slider
        getAriaLabel={() => "Temperature range"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
    </Box>
  );
}
