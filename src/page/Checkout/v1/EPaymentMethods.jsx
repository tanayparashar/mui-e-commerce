import React from "react";
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
  const handlePaymentMethodClick = (method) => {
    // Handle the logic when a payment method is selected
    console.log(`Selected payment method: ${method}`);
  };

  return (
    <Box mb={5}>
      <Typography variant="h4">Payment method</Typography>

      <Box display="flex" justifyContent="space-between" gap={2} mt={3}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Card>
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
            <Card>
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
            <Card>
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
    </Box>
  );
};

export default EPaymentMethods;
