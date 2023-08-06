import React, { useRef } from "react";
import PropTypes from "prop-types";
import ReactApexChart from "react-apexcharts";
import { useTheme, styled } from "@mui/material/styles";
import { Card, CardHeader } from "@mui/material";

const CHART_HEIGHT = 280;

const StyledChartWrapper = styled("div")(({ theme }) => ({
  height: CHART_HEIGHT,
  "& .apexcharts-canvas svg": { height: CHART_HEIGHT },
}));

const RadialBarChart = ({ title, subheader, chartData, ...other }) => {
  const chartRef = useRef(null);
  const theme = useTheme();

  const chartLabels = chartData.map((i) => i.label);
  const chartSeries = chartData.map((i) => i.value);

  const chartOptions = {
    chart: {
      height: CHART_HEIGHT,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 0,
          size: "70%",
          background: theme.palette.warning.main,
        },
        track: {
          dropShadow: {
            enabled: true,
            top: 2,
            left: 0,
            blur: 4,
            opacity: 0.15,
          },
        },
        dataLabels: {
          name: {
            offsetY: -10,
            color: theme.palette.text.primary,
            fontSize: "13px",
          },
          value: {
            color: theme.palette.text.primary,
            fontSize: "30px",
            show: true,
          },
        },
      },
    },
    fill: {
      type: "solid",
      colors: [theme.palette.primary.main],
    },
    stroke: {
      lineCap: "round",
    },
    labels: ["Progress"],
  };

  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} sx={{ mb: 3 }} />
      <StyledChartWrapper dir="ltr">
        <ReactApexChart
          type="radialBar"
          series={chartSeries}
          options={chartOptions}
          height={CHART_HEIGHT}
          ref={chartRef}
        />
      </StyledChartWrapper>
    </Card>
  );
};

RadialBarChart.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
  chartData: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.number,
    })
  ),
};

export default RadialBarChart;
