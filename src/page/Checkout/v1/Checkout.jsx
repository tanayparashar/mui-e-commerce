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
          <Grid container spacing={2} my={5}>
            <Grid item md={6}>
              {/* Previous Address  */}

              <Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 3,
                  }}
                >
                  <Typography variant="h4">Shipping address</Typography>
                  <Button variant="contained">Add new address</Button>
                </Box>
                <Grid container spacing={2}>
                  <Grid item md={4}>
                    <Paper sx={{ p: 1 }}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Typography variant="h6">Home</Typography>
                        <Box sx={{ display: "flex" }}>
                          <IconButton>
                            <EditIcon />
                          </IconButton>
                          <IconButton>
                            <DeleteOutlineIcon color="error" />
                          </IconButton>
                        </Box>
                      </Box>
                      <Typography variant="body2">
                        Address rs 705 90875 road nu 7688 mio 979797979797
                      </Typography>
                    </Paper>
                  </Grid>
                  <Grid item md={4}>
                    <Paper sx={{ p: 1 }}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Typography variant="h6">Home</Typography>
                        <Box sx={{ display: "flex" }}>
                          <IconButton>
                            <EditIcon />
                          </IconButton>
                          <IconButton>
                            <DeleteOutlineIcon color="error" />
                          </IconButton>
                        </Box>
                      </Box>
                      <Typography variant="body2">
                        Address rs 705 90875 road nu 7688 mio 979797979797
                      </Typography>
                    </Paper>
                  </Grid>
                  <Grid item md={4}>
                    <Paper sx={{ p: 1 }}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Typography variant="h6">Home</Typography>
                        <Box sx={{ display: "flex" }}>
                          <IconButton>
                            <EditIcon />
                          </IconButton>
                          <IconButton>
                            <DeleteOutlineIcon color="error" />
                          </IconButton>
                        </Box>
                      </Box>
                      <Typography variant="body2">
                        Address rs 705 90875 road nu 7688 mio 979797979797
                      </Typography>
                    </Paper>
                  </Grid>
                </Grid>
              </Box>

              <Box my={5}>
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
              </Box>

              <EPaymentMethods />
            </Grid>

            <Grid item md={6}>
              <OrderSummary />

              <Card sx={{ m: 2 }}>
                <CardContent>
                  <Typography variant="h6">Cash on Delivery</Typography>
                  <Typography variant="body2">
                    Pay with cash on delivery.
                  </Typography>
                  <IconButton
                    onClick={() => handlePaymentMethodClick("Cash on Delivery")}
                  >
                    Cash
                  </IconButton>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Layout>
    </>
  );
}

export default Checkout;
