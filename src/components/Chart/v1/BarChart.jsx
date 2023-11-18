import React from "react";
import ReactApexChart from "react-apexcharts";
import { Card, CardHeader } from "@mui/material";
import useChart from "../useChart";

const BarChart = () => {
  const chartData = {
    series: [
      {
        name: "Net Profit",
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
      },
      {
        name: "Revenue",
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
      },
      {
        name: "Free Cash Flow",
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
      },
    ],
    
  };


  const chartOptions =  useChart({
      chart: {
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "35%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
      },
      // yaxis: {
      //   title: {
      //     text: "$ (thousands)",
      //   },
      // },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + val + " thousands";
          },
        },
      }
  })

  return (
    <Card>
      <CardHeader title="Bar Chart" />
      <div id="chart">
        <ReactApexChart options={chartOptions} series={chartData.series} type="bar" height={350} />
      </div>
    </Card>
  );
};

export default BarChart;
