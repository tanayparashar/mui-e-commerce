import ReactApexChart from "react-apexcharts";
// @mui
import { Card, CardHeader, Box } from "@mui/material";
// components
import useChart from "../useChart";

// ----------------------------------------------------------------------

export default function Chunk1() {
  const series = [
    {
      data: [43, 32, 12, 9],
    },
  ];

  const chartOptions = useChart({
    chart: {
      type: "donut",
      width: 40,
      height: 40,
      sparkline: {
        enabled: true,
      },
    },
    stroke: {
      width: 1,
    },
    tooltip: {
      fixed: {
        enabled: false,
      },
    },
    // labels: false,
  });

  return (
    <Card>
      <CardHeader title={"Chunk"} />

      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        <ReactApexChart
          type="donut"
          series={[43, 32, 12, 9]}
          options={chartOptions}
          // height={364}
        />
      </Box>
    </Card>
  );
}
