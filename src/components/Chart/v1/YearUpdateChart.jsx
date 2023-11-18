import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { Card, CardHeader, Select } from "@mui/material";

const YearUpdateChart = () => {
  const colors = ['#008FFB', '#00E396', '#FEB019'];

  const [seriesData, setSeriesData] = useState([{
    data: makeData()
  }]);

  const optionsData = {
    chart: {
      id: 'barYear',
      height: 400,
      width: '100%',
      type: 'bar',
      events: {
        dataPointSelection: function (e, chart, opts) {
          const quarterChartEl = document.querySelector("#chart-quarter");
          const yearChartEl = document.querySelector("#chart-year");

          if (opts.selectedDataPoints[0].length === 1) {
            if (quarterChartEl.classList.contains("active")) {
              updateQuarterChart(chart, 'barQuarter');
            } else {
              yearChartEl.classList.add("chart-quarter-activated");
              quarterChartEl.classList.add("active");
              updateQuarterChart(chart, 'barQuarter');
            }
          } else {
            updateQuarterChart(chart, 'barQuarter');
          }

          if (opts.selectedDataPoints[0].length === 0) {
            yearChartEl.classList.remove("chart-quarter-activated");
            quarterChartEl.classList.remove("active");
          }
        },
        updated: function (chart) {
          updateQuarterChart(chart, 'barQuarter');
        }
      }
    },
    plotOptions: {
      bar: {
        distributed: true,
        horizontal: true,
        barHeight: '75%',
        dataLabels: {
          position: 'bottom'
        }
      }
    },
    dataLabels: {
      enabled: true,
      textAnchor: 'start',
      style: {
        colors: ['#fff']
      },
      formatter: function (val, opt) {
        return opt.w.globals.labels[opt.dataPointIndex];
      },
      offsetX: 0,
      dropShadow: {
        enabled: true
      }
    },
    colors: colors,
    states: {
      normal: {
        filter: {
          type: 'desaturate'
        }
      },
      active: {
        allowMultipleDataPointsSelection: true,
        filter: {
          type: 'darken',
          value: 1
        }
      }
    },
    tooltip: {
      x: {
        show: false
      },
      y: {
        title: {
          formatter: function (val, opts) {
            return opts.w.globals.labels[opts.dataPointIndex];
          }
        }
      }
    },
    title: {
      text: 'Yearly Results',
      offsetX: 15
    },
    subtitle: {
      text: '(Click on bar to see details)',
      offsetX: 15
    },
    yaxis: {
      labels: {
        show: false
      }
    }
  };

  const [seriesQuarterData, setSeriesQuarterData] = useState([{
    data: []
  }]);

  const optionsQuarterData = {
    chart: {
      id: 'barQuarter',
      height: 400,
      width: '100%',
      type: 'bar',
      stacked: true
    },
    plotOptions: {
      bar: {
        columnWidth: '50%',
        horizontal: false
      }
    },
    legend: {
      show: false
    },
    grid: {
      yaxis: {
        lines: {
          show: false,
        }
      },
      xaxis: {
        lines: {
          show: true,
        }
      },
    },
    yaxis: {
      labels: {
        show: false
      }
    },
    title: {
      text: 'Quarterly Results',
      offsetX: 10
    },
    tooltip: {
      x: {
        formatter: function (val, opts) {
          return opts.w.globals.seriesNames[opts.seriesIndex];
        }
      },
      y: {
        title: {
          formatter: function (val, opts) {
            return opts.w.globals.labels[opts.dataPointIndex];
          }
        }
      }
    }
  };

  const makeData = () => {
    // Generate your data here
    const data = [44, 55, 57, 56, 61, 58, 63, 60, 66]; // Example data
    return data;
  };

  const updateQuarterChart = (chart, type) => {
    // Your logic to update the quarter chart
  };

  return (
    <Card>
      <CardHeader title="Bar Chart" />
      <div id="wrap">
        <Select
          id="model"
          className="flat-select"
          onChange={() => setSeriesData([{
            data: makeData()
          }])}
        >
          <option value="iphone5">iPhone 5</option>
          <option value="iphone6">iPhone 6</option>
          <option value="iphone7">iPhone 7</option>
        </Select>
        <div id="chart-year">
          <ReactApexChart options={optionsData} series={seriesData} type="bar" height={400} />
        </div>
        <div id="chart-quarter">
          <ReactApexChart options={optionsQuarterData} series={seriesQuarterData} type="bar" height={400} />
        </div>
      </div>
    </Card>
  );
};

export default YearUpdateChart;
