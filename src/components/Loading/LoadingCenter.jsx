import React from "react";
import { Paper, Box, CircularProgress } from "@mui/material";

const LoadingCenter = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "90vh",
      }}
    >
      <Paper sx={{ borderRadius: "50%" }}>
        <Box sx={{ p: 1, display: "flex", alignItems: "center" }}>
          <CircularProgress size={28} />
        </Box>
      </Paper>
    </Box>
  ); // You can use a more sophisticated loading UI here
};

export default LoadingCenter;
