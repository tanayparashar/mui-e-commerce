import React, { useState } from "react";
import { Box, Typography, Rating } from "@mui/material";

const RatingViewSection = () => {
  const [selectedMood, setSelectedMood] = useState(null);
  const moods = [
    { id: 1, label: "Happy" },
    { id: 2, label: "Excited" },
    { id: 3, label: "Neutral" },
    { id: 4, label: "Sad" },
    { id: 5, label: "Angry" },
  ];

  const handleMoodClick = (id) => {
    setSelectedMood(id);
  };

  return (
    <Box>
      <Typography variant="h6">Rate your Mood</Typography>
      <Box display="flex" alignItems="center">
        <Rating
          name="product-rating"
          value={selectedMood}
          onChange={(event, newValue) => handleMoodClick(newValue)}
        />
        <Typography sx={{ ml: 1 }}>
          {selectedMood !== null
            ? moods[selectedMood - 1].label
            : "Select a Mood"}
        </Typography>
      </Box>
      <Box mt={2}>
        {moods.map((mood) => (
          <Typography
            key={mood.id}
            variant="body1"
            color={selectedMood === mood.id ? "primary" : "inherit"}
            onClick={() => handleMoodClick(mood.id)}
            style={{ cursor: "pointer" }}
          >
            {mood.label}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default RatingViewSection;
