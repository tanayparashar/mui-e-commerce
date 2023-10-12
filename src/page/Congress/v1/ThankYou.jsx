import React from "react";
import { Box, Button, Typography } from "@mui/material";
import success from "../../../assets/shopping-not-css.svg";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";

import { useWindowSize } from "react-use";
import Confetti from "react-confetti";
import { Link } from "react-router-dom";

export default function ThankYou() {
  const { width, height } = useWindowSize();
  return (
    <>
      <Confetti
        wind={-0.034}
        numberOfPieces={280}
        width={width}
        height={height}
      />
      <Box
        sx={{
          maxWidth: 500,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          p: 2,
          margin: "auto",
        }}
      >
        <Typography variant="h4">Thank you for your purchase!</Typography>
        <img
          style={{ width: "300px", textAlign: "center", margin: "auto" }}
          src={success}
          alt="Success"
        />
        <Typography>Thanks for placing order</Typography>

        <Typography color={"primary"} my={3}>
          01dc1370-3df6-11eb-b378-0242ac130002
        </Typography>

        <Typography textAlign={"center"}>
          We will send you a notification within 5 days when it ships. <br />
          If you have any question or queries then fell to get in contact us.
        </Typography>

        <Typography my={3}>All the best</Typography>

        <Box sx={{ display: "flex", gap: 2, justifyContent: "center", mt: 3 }}>
          <Button
            variant="outlined"
            startIcon={<ArrowBackIosNewIcon />}
            component={Link}
            to={"/v2/shop"}
          >
            Continue Shopping
          </Button>
          <Button
            variant="contained"
            color="info"
            startIcon={<CloudDownloadIcon />}
          >
            Download as PDF
          </Button>
        </Box>
      </Box>
    </>
  );
}
