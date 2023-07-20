import React, { useState } from "react";
import { Box, IconButton, Zoom } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

const ColorComponent = () => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [checked, setChecked] = useState(false); // Update the checked state

  const colors = ["red", "blue", "green", "yellow"];

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setChecked(true); // Set checked to true when color is clicked
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center", m: 1, gap: 2 }}>
      {colors.map((color, index) => (
        <Box
          key={index}
          sx={{
            background: color,
            height: "24px",
            width: "24px",
            borderRadius: "50%",
            border: selectedColor === color ? "2px solid black" : "",
            position: "relative",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
          onClick={() => handleColorClick(color)}
        >
          {selectedColor === color && (
            <IconButton
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <CheckIcon sx={{ color: "white" }} />
            </IconButton>
          )}
        </Box>
      ))}
    </Box>
  );
};

export default ColorComponent;
