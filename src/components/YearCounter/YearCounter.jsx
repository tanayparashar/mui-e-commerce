import React, { useEffect, useState } from "react";
import { Box, Paper, Typography, useTheme } from "@mui/material";

const YearCounter = () => {
  const theme = useTheme();
  const targetDate = new Date();
  targetDate.setFullYear(targetDate.getFullYear() + 1);

  const [remainingTime, setRemainingTime] = useState(getRemainingTime());

  function getRemainingTime() {
    const now = new Date();
    const diff = targetDate.getTime() - now.getTime();

    if (diff <= 0) {
      clearInterval(intervalId);
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const seconds = Math.floor(diff / 1000) % 60;
    const minutes = Math.floor(diff / (1000 * 60)) % 60;
    const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingTime(getRemainingTime());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ mb: 5 }}>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            p: 2,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              borderRight: `1px solid ${theme.palette.secondary.main}`,
              pr: 3,
            }}
          >
            <Typography variant="h4">{remainingTime.days}</Typography>
            <Typography variant="caption">Days,</Typography>
          </Box>
          <Box
            sx={{
              borderRight: `1px solid ${theme.palette.secondary.main}`,
              pr: 3,
            }}
          >
            <Typography variant="h4">{remainingTime.hours}</Typography>
            <Typography variant="caption">Hours</Typography>
          </Box>
          <Box
            sx={{
              borderRight: `1px solid ${theme.palette.secondary.main}`,
              pr: 3,
            }}
          >
            <Typography variant="h4">{remainingTime.minutes}</Typography>
            <Typography variant="caption">Minutes</Typography>
          </Box>
          <Box>
            <Typography variant="h4">{remainingTime.seconds}</Typography>
            <Typography variant="caption">Seconds</Typography>
          </Box>
          {/* {`Remaining time: ${remainingTime.days} days, ${remainingTime.hours} hours, ${remainingTime.minutes} minutes, ${remainingTime.seconds} seconds`} */}
        </Box>
      </Paper>
    </Box>
  );
};

export default YearCounter;
