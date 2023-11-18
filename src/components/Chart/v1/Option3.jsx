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
      type: "pie",
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
    // labels: ['Category 1', 'Category 2', 'Category 3', 'Category 4'],
  });

  return (
    <Card>
      <CardHeader title={"Chunk"} />

      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        <ReactApexChart
          type="pie"
          series={ [43, 32, 12, 9]}
          options={chartOptions}
          // height={364}
        />
      </Box>
    </Card>
  );
}
