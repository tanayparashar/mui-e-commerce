import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";

function ViewProduct() {
  return (
    <Box sx={{ mt: 5 }}>
      <Grid container spacing={1}>
        <Grid item xs={6} sm={6} md={3}>
          <Paper>
            <Typography>Shop deals in Fashion</Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap" }}>
              <img
                src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_BOTTOMS_2x._SY232_CB624172947_.jpg"
                alt=""
                style={{ width: "50%" }}
              />
              <img
                src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_BOTTOMS_2x._SY232_CB624172947_.jpg"
                alt=""
                style={{ width: "50%" }}
              />
              <img
                src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_BOTTOMS_2x._SY232_CB624172947_.jpg"
                alt=""
                style={{ width: "50%" }}
              />
              <img
                src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_BOTTOMS_2x._SY232_CB624172947_.jpg"
                alt=""
                style={{ width: "50%" }}
              />
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ViewProduct;
