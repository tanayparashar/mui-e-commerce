import React, { useState } from "react";
import { Box, Button, ButtonBase, IconButton } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

const ColorComponent = () => {
  const [selectedColor, setSelectedColor] = useState(null);
  const colors = ["red", "blue", "green", "yellow"];

  const handleColorClick = (color) => {
    setSelectedColor(color);
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
            // height: selectedColor === color ? "23px" : "20px",
            // width: selectedColor === color ? "23px" : "20px",
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
