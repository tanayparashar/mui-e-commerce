import React from 'react';
import ReactApexChart from 'react-apexcharts';
import useChart from '../useChart';
import { Card, CardHeader } from '@mui/material';

const RadialBarSemiCircleChart= () => {
  const seriesData = [76];

  const chartOptions = useChart({
    chart: {
      type: 'radialBar',
      offsetY: -20,
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        track: {
          background: "#e7e7e7",
          strokeWidth: '97%',
          margin: 5, // margin is in pixels
          dropShadow: {
            enabled: true,
            top: 2,
            left: 0,
            color: '#999',
            opacity: 1,
            blur: 2,
          },
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            offsetY: -2,
            fontSize: '22px',
          },
        },
      },
    },
    grid: {
      padding: {
        top: -10,
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        shadeIntensity: 0.4,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 53, 91],
      },
    },
    labels: ['Average Results'],
  });

  return (
    <Card>
      <CardHeader title="Radial Bar Chart" />
      <div id="chart">
        <ReactApexChart options={chartOptions} series={seriesData} type="radialBar" />
      </div>
    </Card>
  );
};

export default RadialBarSemiCircleChart;
