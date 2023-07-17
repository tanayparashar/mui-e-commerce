import * as React from "react";
import { Box, LinearProgress } from "@mui/material";

export default function LoadingLinearTop() {
  return (
    <Box sx={{ width: "100%" }}>
      <LinearProgress sx={{ height: "2px" }} />
    </Box>
  );
}
