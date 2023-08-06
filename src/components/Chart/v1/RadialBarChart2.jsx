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

const RadialBarChart2 = ({ title, subheader, chartData, ...other }) => {
  const chartRef = useRef(null);
  const theme = useTheme();

  const chartOptions = {
    chart: {
      height: CHART_HEIGHT,
      type: "radialBar",
    },
    series: chartData.map((i) => i.value),
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 15,
          size: "70%",
        },
        dataLabels: {
          showOn: "always",
          name: {
            offsetY: -10,
            show: true,
            color: "#888",
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
    stroke: {
      lineCap: "round",
    },
    labels: chartData.map((i) => i.label),
  };

  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} sx={{ mb: 3 }} />
      <StyledChartWrapper dir="ltr">
        <ReactApexChart
          type="radialBar"
          options={chartOptions}
          height={CHART_HEIGHT}
          ref={chartRef}
        />
      </StyledChartWrapper>
    </Card>
  );
};

RadialBarChart2.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
  chartData: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.number,
    })
  ),
};

export default RadialBarChart2;
