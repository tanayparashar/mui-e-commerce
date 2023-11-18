import ReactApexChart from "react-apexcharts";
// @mui
import { Card, CardHeader, Box } from "@mui/material";
// components
import useChart from "../useChart";

// ----------------------------------------------------------------------

export default function Chunk1() {
  const series1 = [
    {
      data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54],
    },
  ];

  const chartOptions = useChart({
    chart: {
      type: "line",
      width: 100,
      height: 35,
      sparkline: {
        enabled: true,
      },
    },
    tooltip: {
      fixed: {
        enabled: false,
      },
      x: {
        show: false,
      },
      y: {
        title: {
          formatter: function (seriesName) {
            return "";
          },
        },
      },
      marker: {
        show: false,
      },
    },
  });

  return (
    <Card>
      <CardHeader title={"Chunk"} />

      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        <ReactApexChart
          type="line"
          series={series1}
          options={chartOptions}
          // height={364}
        />
      </Box>
    </Card>
  );
}
