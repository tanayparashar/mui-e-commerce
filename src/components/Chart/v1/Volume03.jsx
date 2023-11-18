import ReactApexChart from "react-apexcharts";
// @mui
import { Card, CardHeader, Box } from "@mui/material";
// components
import useChart from "../useChart";

// ----------------------------------------------------------------------

export default function Volume03() {
  const chartOptions = useChart({
    chart: {
      type: 'radialBar',
      width: 40,
      height: 40,
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 0,
          size: '50%'
        },
        track: {
          margin: 1
        },
        dataLabels: {
          show: false
        }
      }
    }
  });

  return (
    <Card>
      <CardHeader title={"Chunk"} />

      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        <ReactApexChart
          type="radialBar"
          series={[53, 67]}
          options={chartOptions}
          // height={364}
        />
      </Box>
    </Card>
  );
}
