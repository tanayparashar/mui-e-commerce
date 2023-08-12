import React from "react";
import ReactApexChart from "react-apexcharts";
import { Card, CardHeader } from "@mui/material";
import useChart from "../../Chart/useChart";
import PropTypes from "prop-types";

const RadialChart = () => {
  const chartOptions = useChart({
    chart: {
      height: 350,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: "70%",
        },
      },
    },
    labels: ["Cricket"],
  });

  const chartSeries = [70];

  return (
    <Card>
      <CardHeader
        title="Radial Bar Chart Example"
        subheader="Sample Subheader"
      />
      <ReactApexChart
        options={chartOptions}
        series={chartSeries}
        type="radialBar"
        height={350}
      />
    </Card>
  );
};

RadialChart.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
  series: PropTypes.arrayOf(PropTypes.number).isRequired,
  labels: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default RadialChart;
