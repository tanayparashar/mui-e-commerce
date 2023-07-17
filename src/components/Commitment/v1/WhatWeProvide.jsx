import React from "react";
import { Box, Grid, Paper, Typography, useTheme } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";

function WhatWeProvide() {
  const theme = useTheme();

  console.log(theme.palette.primary.main);
  return (
    <Grid container spacing={2} my={5}>
      <Grid item xs={12} sm={6} md={4}>
        <Paper>
          <Box p={5} sx={{ textAlign: "center" }}>
            <VerifiedIcon
              sx={{ color: theme.palette.primary.main, fontSize: 34 }}
            />
            <Typography variant="h6" align="center">
              100% Original
            </Typography>
            <Typography variant="body1" align="center">
              Chocolate bar candy canes ice cream toffee cookie halvah.
            </Typography>
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Paper>
          <Box p={5} sx={{ textAlign: "center" }}>
            <WatchLaterIcon
              sx={{ color: theme.palette.primary.main, fontSize: 34 }}
            />
            <Typography variant="h6" align="center">
              10 Day Replacement
            </Typography>
            <Typography variant="body1" align="center">
              Marshmallow biscuit donut degree fruitcake wafer.
            </Typography>
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Paper>
          <Box p={5} sx={{ textAlign: "center" }}>
            <VerifiedUserIcon
              sx={{ color: theme.palette.primary.main, fontSize: 34 }}
            />
            <Typography variant="h6" align="center">
              Year Warranty
            </Typography>
            <Typography variant="body1" align="center">
              Cotton candy gingerbread cake I love sugar sweet.
            </Typography>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default WhatWeProvide;
