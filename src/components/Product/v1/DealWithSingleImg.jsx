import React from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";

// Fetch image on backend or database
// or you can use direct link os static image
// But image has hight issue make sure you use perfect img size

export default function DealWithSingleImg({
  SectionTitle,
  RouteLink,
  BtnText,
}) {
  return (
    <Grid item xs={12} sm={6} md={3}>
      <Paper sx={{ p: 2 }} elevation={5}>
        <Typography variant="h6" mb={2}>
          {SectionTitle}
        </Typography>
        <Box>
          <Box>
            <img
              src="https://s.alicdn.com/@sc04/kf/Hd927703e6d4941aba4652c6cad1a5ce0M.jpg_480x480.jpg"
              alt=""
              style={{
                width: "100%",
                height: "358px",
                objectFit: "cover",
                borderRadius: "5px",
              }}
            />
          </Box>
        </Box>
        <Box sx={{ pt: 3 }}>
          <Link component={Link} to={`/${RouteLink}`}>
            {BtnText}
          </Link>
        </Box>
      </Paper>
    </Grid>
  );
}
