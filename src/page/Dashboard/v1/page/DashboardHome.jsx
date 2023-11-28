import React from "react";
import MyDashboard from "../../../../components/Chart/v1/MyDashboard";
import { Grid } from "@mui/material";
import { useTheme } from "@emotion/react";
import AppAreaChart from "../../../../components/Chart/v1/AppAreaChart";

export default function DashboardHome() {
  const theme = useTheme();
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={4} mt={5}>
          <MyDashboard
            title={"Current Download"}
            chartData={{
              labels: ["A", "B", "C", "D"],
              series: [44, 55, 41, 17],
            }}
            chartColors={[
              theme.palette.primary.main,
              theme.palette.info.main,
              theme.palette.warning.main,
              theme.palette.error.main,
            ]}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={8} mt={5}>
          <AppAreaChart
            title="Area Chart"
            subheader="Area chart subheader"
            chartLabels={[
              "01/01/2003",
              "02/01/2003",
              "03/01/2003",
              "04/01/2003",
              "05/01/2003",
              "06/01/2003",
              "07/01/2003",
              "08/01/2003",
              "09/01/2003",
              "10/01/2003",
              "11/01/2003",
              "12/01/2003",
            ]}
            chartData={[
              {
                label: "Asia",
                values: [11, 40, 28, 51, 130, 42, 50, 80, 30, 90, 40, 30],
              },
              {
                label: "America",
                values: [11, 32, 45, 32, 34, 52, 41, 35, 49, 52, 30, 10],
              },
            ]}
          />
        </Grid>
      </Grid>
    </div>
  );
}
