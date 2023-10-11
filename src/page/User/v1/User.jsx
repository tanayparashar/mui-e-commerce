import React from "react";
import Combining from "./charts/UserChart";
import { Paper } from "@mui/material";
import HorizontalBars from "./charts/HorizontalBars";
import BarsDataset from "./charts/BarsDataset";

export default function User() {
  return (
    <Paper>
      <BarsDataset />

      <Combining />

      <HorizontalBars />
    </Paper>
  );
}
