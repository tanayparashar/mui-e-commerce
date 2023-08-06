import React from "react";
import PropTypes from "prop-types";
import ReactApexChart from "react-apexcharts";
// @mui
import { useTheme, styled } from "@mui/material/styles";
import { Card, CardHeader } from "@mui/material";
// utils
import { fNumber } from "../../../utils/formatNumber";

// components
import useChart from "../../Chart/useChart";

// ----------------------------------------------------------------------

const CHART_HEIGHT = 372;
const LEGEND_HEIGHT = 72;

const StyledChartWrapper = styled("div")(({ theme }) => ({
  height: CHART_HEIGHT,
  marginTop: theme.spacing(5),
  "& .apexcharts-canvas svg": { height: CHART_HEIGHT },
  "& .apexcharts-canvas svg,.apexcharts-canvas foreignObject": {
    overflow: "visible",
  },
  "& .apexcharts-legend": {
    height: LEGEND_HEIGHT,
    alignContent: "center",
    position: "relative !important",
    borderTop: `solid 1px ${theme.palette.divider}`,
    top: `calc(${CHART_HEIGHT - LEGEND_HEIGHT}px) !important`,
  },
}));

MyDashboard.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
  chartColors: PropTypes.arrayOf(PropTypes.string),
  chartData: PropTypes.array,
};

export default function MyDashboard({
  title,
  subheader,
  chartColors,
  chartData,
  ...other
}) {
  const theme = useTheme();

  const chartLabels = chartData.labels;
  const chartSeries = chartData.series;

  const chartOptions = useChart({
    colors: chartColors,
    labels: chartLabels,
    stroke: { colors: [theme.palette.background.paper], width: 3 },
    legend: { floating: true, horizontalAlign: "center" },
    dataLabels: { enabled: false, dropShadow: { enabled: false } },
    tooltip: {
      fillSeriesColor: false,
      y: {
        formatter: (seriesName) => fNumber(seriesName),
        title: {
          formatter: (seriesName) => `${seriesName}`,
        },
      },
    },
    plotOptions: {
      pie: { donut: { labels: { show: true }, size: "90%" } },
    },
  });

  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />

      <StyledChartWrapper dir="ltr">
        <ReactApexChart
          type="donut"
          series={chartSeries}
          options={chartOptions}
          height={CHART_HEIGHT - LEGEND_HEIGHT} // Adjust chart height based on legend height
        />
      </StyledChartWrapper>
    </Card>
  );
}
