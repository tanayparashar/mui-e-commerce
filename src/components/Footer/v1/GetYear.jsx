import React from "react";
import { Box, Typography } from "@mui/material";

function GetYear() {
  const currentYear = new Date().getFullYear();

  return (
    <Box sx={{ mt: 1, fontWeight: "bold" }}>
      <Typography fontWeight={"bold"}>
        {currentYear} Online aid, inc.{" "}
      </Typography>
    </Box>
  );
}

export default GetYear;
