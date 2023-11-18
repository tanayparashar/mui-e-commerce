import React, { useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import useChart from "../useChart";
import { Card, CardHeader } from "@mui/material";

const TradeChart = () => {
  const generateRandomData = (count, startDate, minValue, maxValue) => {
    const data = [];
    const timeInterval = 24 * 60 * 60 * 1000; // 1 day in milliseconds

    for (let i = 0; i < count; i++) {
      const timestamp = startDate.getTime() + i * timeInterval;
      const value = Math.random() * (maxValue - minValue) + minValue;
      data.push([timestamp, value]);
    }

    return data;
  };

  // Specify the number of data points, start date, and value range
  const dataCount = 100; // Number of data points
  const startDate = new Date("2023-01-01"); // Start date
  const minValue = 20000000; // Minimum value in millions
  const maxValue = 40000000; // Maximum value in millions

  const dates = generateRandomData(dataCount, startDate, minValue, maxValue);

  const series = [
    {
      name: "XYZ MOTORS",
      data: dates,
    },
  ];

  const chartOptions = useChart({
    chart: {
      type: "area",
      stacked: false,
      height: 350,
      zoom: {
        type: "x",
        enabled: true,
        autoScaleYaxis: true,
      },
      toolbar: {
        autoSelected: "zoom",
      },
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 0,
    },

    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.5,
        opacityTo: 0,
        stops: [0, 90, 100],
      },
    },
    yaxis: {
      labels: {
        formatter: function (val) {
          return (val / 1000000).toFixed(0);
        },
      }
    },
    xaxis: {
      type: "datetime",
    },
    tooltip: {
      shared: false,
      y: {
        formatter: function (val) {
          return (val / 1000000).toFixed(0);
        },
      },
    },
  });

  return (
    <Card>
      <CardHeader title="Trade chart" />
      <ReactApexChart
        options={chartOptions}
        series={series}
        type="area"
        height={350}
      />
    </Card>
  );
};

export default TradeChart;
