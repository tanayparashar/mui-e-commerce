import React from "react";
import { Typography, LinearProgress, Box, Paper } from "@mui/material";

const SalesOverview = () => {
  // Replace these values with your actual data
  const totalProfit = 8374;
  const totalIncome = 9714;
  const totalExpenses = 6871;

  // Calculate percentages
  const profitPercentage = ((totalProfit / totalIncome) * 100).toFixed(1);
  const incomePercentage = ((totalIncome / totalIncome) * 100).toFixed(1);
  const expensesPercentage = ((totalExpenses / totalIncome) * 100).toFixed(1);

  return (
    <Paper sx={{ p: 3, width: "100%" }}>
      <Typography variant="h6" gutterBottom>
        Sales Overview
      </Typography>
      <Box my={3}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent={"space-between"}
          mb={1}
        >
          <Typography variant="subtitle1">Total Profit</Typography>
          <Typography variant="body1" sx={{ ml: 2 }}>
            ${totalProfit}
          </Typography>
        </Box>
        <LinearProgress
          variant="determinate"
          value={parseFloat(profitPercentage)}
          sx={{ mb: 2, borderRadius: "50px", height: 5 }}
          color="warning"
        />
      </Box>

      <Box my={3}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent={"space-between"}
          mb={1}
        >
          <Typography variant="subtitle1">Total Income</Typography>
          <Typography variant="body1" sx={{ ml: 2 }}>
            ${totalIncome}
          </Typography>
        </Box>
        <LinearProgress
          variant="determinate"
          value={parseFloat(incomePercentage)}
          sx={{ mb: 2, borderRadius: "50px", height: 5 }}
          color="primary"
        />
      </Box>

      <Box my={3}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent={"space-between"}
          mb={1}
        >
          <Typography variant="subtitle1">Total Expense</Typography>
          <Typography variant="body1" sx={{ ml: 2 }}>
            ${totalExpenses}
          </Typography>
        </Box>
        <LinearProgress
          variant="determinate"
          value={parseFloat(expensesPercentage)}
          sx={{ mb: 2, borderRadius: "50px", height: 5 }}
          color="error"
        />
      </Box>
    </Paper>
  );
};

export default SalesOverview;
