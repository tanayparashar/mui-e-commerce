import React from "react";
import { Link, useParams } from "react-router-dom";
import { Box, Typography, Button, Paper, IconButton } from "@mui/material";

// icon
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ManageOrder from "./components/ManageOrder";
import DownloadInvoice from "./components/DownloadInvoice";

const OrderDetail = () => {
  // Use useParams to access route parameters
  const { id } = useParams();

  // You can fetch the order details based on the "id" from your data source or API here
  // Replace the following example data with your actual data fetching logic
  const order = {
    id: id,
    date: "2023-10-05",
    items: [
      { name: "Product 1", quantity: 2, price: 25.99 },
      { name: "Product 2", quantity: 1, price: 19.99 },
    ],
    total: 71.97,
    status: "Delivered",
    address: "123 Main Street, City, Country",
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <Box p={3}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
            <IconButton
              aria-label="back"
              component={Link}
              to={"/user/orders"}
              sx={{
                "&:hover": {
                  backgroundColor: "#e0e0e0", // Change this to your desired hover background color
                },
              }}
            >
              <ArrowBackRoundedIcon />
            </IconButton>
            <Typography variant="h4">Order Details</Typography>
          </Box>
          <ManageOrder />
        </Box>

        <Box p={2}>
          <Typography variant="h6">Order Number: {order.id}</Typography>
          <Typography variant="subtitle1">Order Date: {order.date}</Typography>

          <Box mt={2}>
            <Typography variant="h6">Items:</Typography>
            <div>
              {order.items.map((item, index) => (
                <div key={index}>
                  {item.name} (Quantity: {item.quantity}, Price: $
                  {item.price.toFixed(2)})
                </div>
              ))}
            </div>
          </Box>

          <Typography variant="h6">Total: ${order.total.toFixed(2)}</Typography>
          <Typography variant="h6">Status: {order.status}</Typography>
          <Typography variant="h6">Shipping Address:</Typography>
          <Typography variant="body1">{order.address}</Typography>
        </Box>

        <DownloadInvoice color={"primary"} />
      </Box>
    </Paper>
  );
};

export default OrderDetail;
