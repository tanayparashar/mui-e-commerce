import React from "react";
import {
  Box,
  LinearProgress,
  Rating,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";

function ReviewProgress() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1,
        alignItems: "center",
      }}
    >
      {/* % star  */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Typography variant="subtitle2">5 Star</Typography>
        <LinearProgress
          variant="determinate"
          value={40}
          sx={{ borderRadius: "50px", width: "200px", height: "3px" }}
        />
        <Typography
          variant="caption"
          sx={{ color: theme.palette.text.disabled }}
        >
          9k
        </Typography>
      </Box>

      {/* 4 star  */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Typography variant="subtitle2">4 Star</Typography>
        <LinearProgress
          variant="determinate"
          value={20}
          sx={{ borderRadius: "50px", width: "200px", height: "3px" }}
        />
        <Typography
          variant="caption"
          sx={{ color: theme.palette.text.disabled }}
        >
          5k
        </Typography>
      </Box>

      {/* 3 star  */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Typography variant="subtitle2">3 Star</Typography>
        <LinearProgress
          variant="determinate"
          value={10}
          sx={{ borderRadius: "50px", width: "200px", height: "3px" }}
        />
        <Typography
          variant="caption"
          sx={{ color: theme.palette.text.disabled }}
        >
          3k
        </Typography>
      </Box>

      {/* 2 star  */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Typography variant="subtitle2">2 Star</Typography>
        <LinearProgress
          variant="determinate"
          value={30}
          sx={{ borderRadius: "50px", width: "200px", height: "3px" }}
        />
        <Typography
          variant="caption"
          sx={{ color: theme.palette.text.disabled }}
        >
          8k
        </Typography>
      </Box>

      {/* 1 star  */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Typography variant="subtitle2">1 Star</Typography>
        <LinearProgress
          variant="determinate"
          value={3}
          sx={{ borderRadius: "50px", width: "200px", height: "3px" }}
        />
        <Typography
          variant="caption"
          sx={{ color: theme.palette.text.disabled }}
        >
          1k
        </Typography>
      </Box>
    </Box>
  );
}

export default ReviewProgress;
