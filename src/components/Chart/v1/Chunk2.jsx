import ReactApexChart from "react-apexcharts";
// @mui
import { Card, CardHeader, Box } from "@mui/material";
// components
import useChart from "../useChart";

// ----------------------------------------------------------------------

export default function Chunk1() {
  const sparklineData = [
    170, 169, 173, 174, 160, 165, 172, 180, 181, 190, 194, 198, 195, 200, 205,
    210, 215, 220, 225, 230, 235, 140, 245, 250, 255, 160, 265, 270, 275, 280,
    285, 290, 295, 300, 305, 310, 315, 320, 325, 330,
  ];

  const randomizeArray = (array) =>
    array.map((item) => item + Math.round(Math.random() * 10 - 5));

  const series = [
    {
      data: randomizeArray(sparklineData),
    },
  ];

  const chartOptions = useChart({
    chart: {
      type: "area",
      height: 160,
      sparkline: {
        enabled: true,
      },
    },
    stroke: {
      curve: "straight",
    },
    fill: {
      opacity: 0.3,
    },
    xaxis: {
      crosshairs: {
        width: 1,
      },
    },
    yaxis: {
      min: 0,
    },
    title: {
      text: "$135,965",
      offsetX: 0,
      style: {
        fontSize: "24px",
      },
    },
    subtitle: {
      text: "Profits",
      offsetX: 0,
      style: {
        fontSize: "14px",
      },
    },
  });

  return (
    <Card>
      <CardHeader title={"Chunk"} />

      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        <ReactApexChart
          type="area"
          series={series}
          options={chartOptions}
        //   height={364}
        />
      </Box>
    </Card>
  );
}
