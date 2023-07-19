import React from "react";
import { Box, Button, Paper } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

function SocialNetwork() {
  return (
    <Box sx={{ py: 2 }}>
      <Paper
        sx={{
          textAlign: "center",
          margin: "auto",
          p: 0.5,
        }}
      >
        <Button>
          <FacebookIcon />
        </Button>
        <Button>
          <TwitterIcon />
        </Button>
        <Button>
          <LinkedInIcon />
        </Button>
        <Button>
          <InstagramIcon />
        </Button>
      </Paper>
    </Box>
  );
}

export default SocialNetwork;
