import React from "react";
import { Grid, Paper, Box, Typography } from "@mui/material";

const DynamicComponent = ({ items }) => {
  return (
    <Grid container spacing={2}>
      {items.map((item) => (
        <Grid item xs={12} sm={6} md={4} key={item.id}>
          <Paper>
            <Box p={2}>
              <img src={item.image} alt={item.name} style={{ width: "100%" }} />
              <Typography variant="h6">{item.name}</Typography>
              <Typography>{item.price}</Typography>
            </Box>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default DynamicComponent;
