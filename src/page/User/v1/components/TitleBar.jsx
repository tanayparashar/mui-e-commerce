import React from "react";
import { Box, Button, Typography } from "@mui/material";

export default function TitleBar({ icon, heading, btn = true, btnText }) {
  return (
    <Box display={"flex"} justifyContent="space-between">
      <Typography variant="h3">{heading}</Typography>
      {/* I need link  */}
      {btn && <Button>{btnText}</Button>}
    </Box>
  );
}
