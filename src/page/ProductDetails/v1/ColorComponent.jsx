import React, { useState } from "react";
import { Box, IconButton, Button } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

const ColorComponent = () => {
  const [selectedColor, setSelectedColor] = useState(null);

  const colors = ["red", "blue", "green", "yellow"];

  const handleColorClick = (color) => {
    setSelectedColor(color);
    console.log(selectedColor);
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center", m: 1, gap: 1 }}>
      {colors.map((color, index) => (
        <Button
          key={index}
          sx={{
            height: "50px",
            minWidth: "50px",
            borderRadius: "50%",
            p: 0,
          }}
        >
          <Box
            sx={{
              background: color,
              height: "24px",
              width: "24px",
              borderRadius: "50%",
              border:
                selectedColor === color
                  ? "1px solid transparent"
                  : "1px solid transparent", // Slightly smaller border for selected color
              position: "relative",
              cursor: "pointer",
              transition: "all 0.3s ease",
              outline: "rgba(0, 0, 0, 0.08) solid 3px",
              boxShadow:
                selectedColor === color
                  ? "rgba(0, 0, 0, 0.48) 4px 4px 8px 0px"
                  : "",
              transform: selectedColor === color ? "scale(1.5)" : "scale(1)", // Scale effect for selected color
            }}
            onClick={() => handleColorClick(color)}
          >
            {selectedColor === color && (
              <CheckIcon
                sx={{
                  color: "white",
                  height: "16px",
                  width: "16px",
                  position: "absolute",
                  top: "13%",
                  left: "14%",
                }}
              />
            )}
          </Box>
        </Button>
      ))}
    </Box>
  );
};

export default ColorComponent;
