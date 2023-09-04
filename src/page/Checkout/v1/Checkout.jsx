import React from "react";
import Layout from "../../../layout/GlobalLayout/Layout";
import { Helmet } from "react-helmet-async";
import {
  Box,
  Container,
  Grid,
  TextField,
  Typography,
  Paper,
  Button,
  IconButton,
  Card,
  CardContent,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import OrderSummary from "../../AddToCart/v1/OrderSummery";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EPaymentMethods from "./EPaymentMethods";

function Checkout() {
  return (
    <>
      <Helmet>
        <title>🚀 {`${Checkout.name}`} | Review</title>
        <meta name="description" content="Your page description" />
      </Helmet>
      <Layout>
        <Container>
          <Grid container spacing={2}>
            <Grid item md={7}>
              <Box my={5} pt={2}>
                <Typography variant="h4" mb={3}>
                  Shipping information
                </Typography>
                <TextField
                  label="Full name"
                  variant="outlined"
                  placeholder="Your first and last name"
                  sx={{ width: "100%" }}
                  type="text"
                />
                <TextField
                  label="Address"
                  variant="outlined"
                  placeholder="Enter your address"
                  sx={{ width: "100%", mt: 2 }}
                  type="text"
                />

                <Box sx={{ display: "flex", mt: 2, gap: 2 }}>
                  <TextField
                    label="Holding Number"
                    variant="outlined"
                    placeholder="Enter your holding number"
                    sx={{ width: "100%" }}
                  />
                  <TextField
                    label="City"
                    variant="outlined"
                    placeholder="Enter your city"
                    sx={{ width: "100%" }}
                  />
                </Box>
                <TextField
                  label="Email address"
                  variant="outlined"
                  placeholder="Enter your email address"
                  sx={{ width: "100%", mt: 2 }}
                  type="email"
                />
                <TextField
                  label="Phone number"
                  variant="outlined"
                  placeholder="Enter your phone number"
                  sx={{ width: "100%", mt: 2 }}
                  type="number"
                />

                <FormGroup sx={{ mt: 5 }}>
                  <FormControlLabel
                    // required
                    control={<Checkbox />}
                    label="Save this address"
                  />
                </FormGroup>
              </Box>

              <EPaymentMethods />
            </Grid>

            <Grid item my={5}>
              <OrderSummary
                titleMarginButton={3}
                size="h4"
                btnText="Proceed to checkout"
                path="/payment"
              />
            </Grid>
          </Grid>
        </Container>
      </Layout>
    </>
  );
}

export default Checkout;
