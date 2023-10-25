import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from "react-share";
import { Box } from "@mui/material";

export default function SocialShare({ shareId, title }) {
  const shareUrl = "https://onlineaid.vercel.app/" + shareId;
  const shareTitle = title;

  return (
    <Box
      sx={{
        mt: 4,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 2,
      }}
    >
      {/* Facebook share button */}
      <FacebookShareButton url={shareUrl} quote={shareTitle}>
        <FacebookIcon fontSize="large" style={{ color: "#3366FF" }} />
      </FacebookShareButton>

      {/* Twitter share button */}
      <TwitterShareButton url={shareUrl} title={shareTitle}>
        <TwitterIcon fontSize="large" style={{ color: "#3173DB" }} />
      </TwitterShareButton>

      {/* LinkedIn share button */}
      <LinkedinShareButton url={shareUrl} title={shareTitle}>
        <LinkedInIcon fontSize="large" style={{ color: "#254EDB" }} />
      </LinkedinShareButton>
    </Box>
  );
}
