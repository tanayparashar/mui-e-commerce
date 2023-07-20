import React from "react";
import { Box, Rating, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function RateReview() {
  const [value, setValue] = React.useState(2);

  return (
    <Box sx={{ pt: 3 }}>
      <Typography variant="h6" mb={1}>
        View on Rate
      </Typography>
      <Box component={Link} to="/view-on-rate">
        <Rating name="read-only" value={5} readOnly />
      </Box>

      <br />
      <Box component={Link} to="/view-on-rate">
        <Rating name="read-only" value={4} readOnly />
      </Box>
      <br />
      <Box component={Link} to="/view-on-rate">
        <Rating name="read-only" value={3} readOnly />
      </Box>
      <br />
      <Box component={Link} to="/view-on-rate">
        <Rating name="read-only" value={2} readOnly />
      </Box>
    </Box>
  );
}
