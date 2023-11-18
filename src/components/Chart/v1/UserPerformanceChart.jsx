import React from "react";
import ReactApexChart from "react-apexcharts";
import { Card, CardHeader } from "@mui/material";
import useChart from "../useChart";

const colors = [
  "#008FFB",
  "#00E396",
  "#FEB019",
  "#FF4560",
  "#775DD0",
  "#546E7A",
  "#26a69a",
];

const UserPerformanceChart = () => {
  const series = [
    {
      data: [21, 22, 10, 28, 16, 21, 13, 30],
    },
  ];
  const chartData = useChart({
    chart: {
      height: 350,
      type: "bar",
      events: {
        click: function (chart, w, e) {
          // console.log(chart, w, e)
        },
      },
    },
    colors: colors, // Define your colors array
    plotOptions: {
      bar: {
        columnWidth: "15%",
        distributed: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
      categories: [
        ["John", "Doe"],
        ["Joe", "Smith"],
        ["Jake", "Williams"],
        "Amber",
        ["Peter", "Brown"],
        ["Mary", "Evans"],
        ["David", "Wilson"],
        ["Lily", "Roberts"],
      ],
      labels: {
        style: {
          colors: colors, // Define your colors array
          fontSize: "12px",
        },
      },
    },
  });

  return (
    <Card>
      <CardHeader title="User performance" />
      <ReactApexChart
        options={chartData}
        series={series}
        type="bar"
        height={350}
      />
    </Card>
  );
};

export default UserPerformanceChart;
