import { Card, CardHeader } from "@mui/material";
import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import { useTheme, styled } from "@mui/material/styles";
import useChart from "../useChart";

// ----------------------------------------------------------------------

const CHART_HEIGHT = 300;
const LEGEND_HEIGHT = 92;

const StyledChartWrapper = styled("div")(({ theme }) => ({
  height: CHART_HEIGHT,
  marginTop: theme.spacing(5),
  "& .apexcharts-canvas svg": { height: CHART_HEIGHT },
  "& .apexcharts-canvas svg,.apexcharts-canvas foreignObject": {
    overflow: "visible",
  },
  "& .apexcharts-legend": {
    height: LEGEND_HEIGHT,
    alignContent: "center",
    position: "relative !important",
    borderTop: `solid 1px ${theme.palette.divider}`,
    top: `calc(${CHART_HEIGHT - LEGEND_HEIGHT}px) !important`,
  },
}));

// ----------------------------------------------------------------------

const PolarChart2 = ({series}) => {
  const chartOptions = useChart(
    {
      chart: {
        width: 380,
        type: 'polarArea',
      },
      labels: ['Rose A', 'Rose B', 'Rose C', 'Rose D', 'Rose E'],
      fill: {
        opacity: 1,
      },
      stroke: {
        width: 1,
        colors: undefined,
      },
      yaxis: {
        show: false,
      },
      legend: {
        position: 'bottom',
      },
      plotOptions: {
        polarArea: {
          rings: {
            strokeWidth: 0,
          },
          spokes: {
            strokeWidth: 0,
          },
        },
      },
      theme: {
        monochrome: {
          enabled: true,
          shadeTo: 'light',
          shadeIntensity: 0.6,
        },
      },
    }
  )


  return (
    <Card>
      <CardHeader title="Polar Area Chart 2" />
      <StyledChartWrapper>
        <ReactApexChart
          options={chartOptions}
          series={series}
          type="polarArea"
        />
      </StyledChartWrapper>
    </Card>
  );
};

export default PolarChart2;
