import React from "react";
import PropTypes from "prop-types";
import ReactApexChart from "react-apexcharts";
import { Card, CardHeader } from "@mui/material";
import { useTheme, styled } from "@mui/material/styles";
import useChart from "../../Chart/useChart";

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

const PolarChart = ({ series }) => {
  const chartOptions = useChart({
    chart: {
      height: CHART_HEIGHT,
      type: "polarArea",
    },
    stroke: {
      colors: ["#fff"],
    },
    fill: {
      opacity: 0.8,
    },
    legend: {
      position: "bottom",
    },
    // responsive: [
    //   {
    //     breakpoint: 480,
    //     options: {
    //       chart: {
    //         width: 200,
    //       },
    //       legend: {
    //         position: "bottom",
    //       },
    //     },
    //   },
    // ],
  });

  return (
    <Card>
      <CardHeader title="Polar Area Chart" />
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

PolarChart.propTypes = {
  series: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default PolarChart;
