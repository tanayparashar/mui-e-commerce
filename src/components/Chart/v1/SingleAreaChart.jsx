import React, { useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import { Card, CardHeader } from "@mui/material";
import useChart from "../useChart";

const SingleAreaChart = () => {
  const generateDummyData = (count) => {
    const data = [];
    const labels = [];
    const startDate = new Date("2023-01-01").getTime(); // Start date in milliseconds
    const interval = 24 * 60 * 60 * 1000; // 1 day in milliseconds

    for (let i = 0; i < count; i++) {
      const date = new Date(startDate + i * interval);
      const price = Math.random() * (50 - 30) + 30; // Generate a random price between 30 and 50
      data.push([date, price]);
      labels.push(date);
    }

    return { data, labels };
  };

  const { data: seriesData, labels: dateLabels } = generateDummyData(100);

  const optionsData = {
    chart: {
      type: "area",
      height: 350,
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
    },
    title: {
      text: "Fundamental Analysis of Stocks",
      align: "left",
    },
    subtitle: {
      text: "Price Movements",
      align: "left",
    },
    labels: dateLabels, // Use the generated date labels
    xaxis: {
      type: "datetime",
    },
    yaxis: {
      opposite: true,
    },
    legend: {
      horizontalAlign: "left",
    },
  };

  const chartData = useChart({
    series: [
      {
        name: "STOCK ABC",
        data: seriesData,
      },
    ],
    options: optionsData,
  });

  useEffect(() => {
    // Your code to render the chart when the component mounts
  }, []);

  return (
    <Card>
      <CardHeader title="Fundamental Analysis of Stocks" />
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="area"
        height={350}
      />
    </Card>
  );
};

export default SingleAreaChart;
