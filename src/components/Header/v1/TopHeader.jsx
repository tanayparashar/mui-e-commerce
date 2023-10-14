import React from "react";
import { Box } from "@mui/material";
import Marquee from "react-fast-marquee";

export default function TopHeader() {
  return (
    <Box>
      <Marquee>
        BD 40% OFF + WC10 কুপনটি ইউজ করলে আরও 10% OFF! শুধুমাত্র আজকে!
      </Marquee>
    </Box>
  );
}
