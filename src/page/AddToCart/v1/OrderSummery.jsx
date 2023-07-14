import React from "react";
import { Box, Divider, Typography, TextField, Button } from "@mui/material";

function OrderSummary() {
  return (
    <Box sx={{ p: 2, width: "100%" }}>
      <Typography variant="h6" mb={2}>
        Subtotal
      </Typography>

      <Divider />

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mt: 2,
        }}
      >
        <Typography>Product Items {2}</Typography>
        <Typography>${200}</Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mt: 2,
        }}
      >
        <Typography>Shipping Fee</Typography>
        <Typography>${30}</Typography>
      </Box>

      {/* Voucher Form */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mt: 2,
          gap: 2,
        }}
      >
        <TextField
          label="Enter Voucher"
          variant="outlined"
          size="small"
          sx={{ width: "100%" }}
        />
        <Button variant="contained" color="primary">
          Apply
        </Button>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mt: 2,
        }}
      >
        <Typography fontWeight={"bold"}>Total</Typography>
        <Typography>${230}</Typography>
      </Box>

      {/* Proceed to Checkout Button */}
      <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
        <Button variant="contained" color="primary" sx={{ width: "100%" }}>
          Proceed to Checkout
        </Button>
      </Box>
    </Box>
  );
}

export default OrderSummary;
