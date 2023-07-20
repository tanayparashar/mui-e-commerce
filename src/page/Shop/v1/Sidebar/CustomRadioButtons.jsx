import React, { useState } from "react";
import { Radio, FormControlLabel, RadioGroup, Typography } from "@mui/material";

const CustomRadioButtons = () => {
  const [selectedOption, setSelectedOption] = useState("option1");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <Typography variant="h6">Gender</Typography>
      <RadioGroup
        name="options"
        value={selectedOption}
        onChange={handleOptionChange}
      >
        <FormControlLabel
          value="men"
          control={<Radio />}
          label="Men"
          sx={{ my: 0.5 }}
        />
        <FormControlLabel
          value="women"
          control={<Radio />}
          label="Women"
          sx={{ my: 0.5 }}
        />
        <FormControlLabel
          value="kids"
          control={<Radio />}
          label="Kids"
          sx={{ my: 0.5 }}
        />
      </RadioGroup>
    </div>
  );
};

export default CustomRadioButtons;
