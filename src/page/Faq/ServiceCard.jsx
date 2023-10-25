import React from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function ServiceCard({ RouteLink, Img, Title }) {
  return (
    <Grid item xs={12} md={4} mb={1}>
      <Box>
        <Paper>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              textDecoration: "none",
              color: "inherit",
              py: 2,
            }}
            component={Link}
            to={`/${RouteLink}`}
          >
            <img
              src={Img}
              alt=""
              style={{
                marginLeft: "10px",
                width: "70px",
                height: "70px",
                objectFit: "cover",
              }}
            />

            <Typography variant="h6">{Title}</Typography>
          </Box>
        </Paper>
      </Box>
    </Grid>
  );
}
