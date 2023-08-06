import React from "react";
import { Box, Button, Typography } from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import Layout from "../../../layout/GlobalLayout/Layout";

function EmptyCart() {
  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          flexDirection: "column",
          gap: 3,
        }}
        component={"section"}
      >
        <Typography variant="h6">There are no items in this cart</Typography>
        <Button
          component={Link}
          to={"/shop"}
          variant="outlined"
          startIcon={<ArrowBackIcon />}
        >
          Go to shop page
        </Button>
      </Box>
    </Layout>
  );
}

export default EmptyCart;
