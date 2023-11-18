import React, { useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import useChart from '../useChart';
import { Card, CardHeader } from '@mui/material';

const MultiRadialChart = ({series}) => {

    const chartOptions =  useChart({
        options: {
          chart: {
            height: 350,
            type: 'radialBar',
          },
          plotOptions: {
            radialBar: {
              dataLabels: {
                name: {
                  fontSize: '22px',
                },
                value: {
                  fontSize: '16px',
                },
                total: {
                  show: true,
                  label: 'Total',
                  formatter: function (w) {
                    // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                    return 249;
                  },
                },
              },
            },
          },
          labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
        },
    })

    
    // series: [44, 55, 67, 83],

  return (
    <Card>
      <CardHeader title="Radial chart" />
      <ReactApexChart
        options={chartOptions}
        series={series}
        type="radialBar"
      />
    </Card>
  );
};

export default MultiRadialChart;
