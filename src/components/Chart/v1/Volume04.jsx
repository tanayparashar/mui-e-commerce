import ReactApexChart from "react-apexcharts";
import { Card, CardHeader, Box } from "@mui/material";
import useChart from "../useChart";

export default function Volume04() {
  const showLabels = false; // Set this to true or false based on your requirement

  const chartOptions = useChart({
    chart: {
      type: "radialBar",
      width: 50,
      height: 50,
      sparkline: {
        enabled: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 0,
          size: "70%",
        },
        track: {
          margin: 0,
        },
        dataLabels: {
          show: false,
        },
        labels: {
          show: false,
        },
      },
    },
    // labels: {
    //   show: false,
    // }, // Set labels based on showLabels
  });

  return (
    <Card>
      <CardHeader title={"Chunk"} />

      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        <ReactApexChart
          type="radialBar"
          series={[54]}
          options={chartOptions}
          // height={364}
        />
      </Box>
    </Card>
  );
}
