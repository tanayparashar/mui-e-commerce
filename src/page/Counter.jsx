import React, { useState } from "react";
import {
  Box,
  Chip,
  FormControl,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import RemoveCircleRoundedIcon from "@mui/icons-material/RemoveCircleRounded";

const Counter = () => {
  const theme = useTheme();
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        mt: 2,
      }}
    >
      <Typography>Quantity</Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 0.5,
          m: 1,
        }}
      >
        <IconButton onClick={handleDecrement}>
          <RemoveCircleRoundedIcon />
        </IconButton>
        <Typography>{count}</Typography>
        <IconButton onClick={handleIncrement}>
          <AddCircleRoundedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Counter;
