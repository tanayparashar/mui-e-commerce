import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Button,
  Grid,
  IconButton,
} from "@mui/material";

const EPaymentMethods = () => {
  const [selectedMethod, setSelectedMethod] = useState(null);

  const handlePaymentMethodClick = (method) => {
    // Handle the logic when a payment method is selected
    setSelectedMethod(method);
    console.log(`Selected payment method: ${method}`);
  };

  const isMethodSelected = (method) => {
    return selectedMethod === method;
  };

  return (
    <Box mb={5}>
      <Typography variant="h4">Payment method</Typography>

      <Box display="flex" justifyContent="space-between" gap={2} mt={3}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Card
              variant={
                isMethodSelected("Credit Card") ? "outlined" : "elevation"
              }
              sx={{
                borderColor: isMethodSelected("Credit Card")
                  ? "primary.main"
                  : "transparent",
              }}
            >
              <CardContent>
                <Typography variant="h6">Credit Card</Typography>
                <Typography variant="body2">
                  Pay with your credit card securely.
                </Typography>
                <Button onClick={() => handlePaymentMethodClick("Credit Card")}>
                  Select
                </Button>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card
              variant={isMethodSelected("PayPal") ? "outlined" : "elevation"}
              sx={{
                borderColor: isMethodSelected("PayPal")
                  ? "primary.main"
                  : "transparent",
              }}
            >
              <CardContent>
                <Typography variant="h6">PayPal</Typography>
                <Typography variant="body2">
                  Pay with your PayPal account.
                </Typography>
                <Button onClick={() => handlePaymentMethodClick("PayPal")}>
                  Select
                </Button>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card
              variant={isMethodSelected("Apple Pay") ? "outlined" : "elevation"}
              sx={{
                borderColor: isMethodSelected("Apple Pay")
                  ? "primary.main"
                  : "transparent",
              }}
            >
              <CardContent>
                <Typography variant="h6">Apple Pay</Typography>
                <Typography variant="body2">
                  Pay securely with Apple Pay.
                </Typography>
                <Button onClick={() => handlePaymentMethodClick("Apple Pay")}>
                  Select
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      <Card
        variant={
          isMethodSelected("Cash on Delivery") ? "outlined" : "elevation"
        }
        sx={{
          borderColor: isMethodSelected("Cash on Delivery")
            ? "primary.main"
            : "transparent",
          mt: 3,
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <Typography variant="h6">Cash on Delivery</Typography>
            <Typography variant="body2">Pay with cash on delivery.</Typography>
          </div>
          <Button
            variant="outlined"
            onClick={() => handlePaymentMethodClick("Cash on Delivery")}
          >
            Select
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default EPaymentMethods;
