// const Input = ({ handleChange, value, title, name, color }) => {
//   return (
//     <label className="sidebar-label-container">
//       <input onChange={handleChange} type="radio" value={value} name={name} />
//       <span className="checkmark" style={{ backgroundColor: color }}></span>
//       {title}
//     </label>
//   );
// };

// export default Input;

import React from "react";
import { FormControlLabel, Radio, Typography } from "@mui/material";

const Input = ({ handleChange, value, title, name, color }) => {
  return (
    <FormControlLabel
      value={value}
      control={<Radio color="primary" onChange={handleChange} name={name} />}
      label={
        <>
          <span
            className="checkmark"
            style={{
              backgroundColor: color,
              display: "inline-block",
              width: "16px", // Adjust width as needed
              height: "16px", // Adjust height as needed
              marginRight: "8px", // Add spacing between the radio button and label
            }}
          ></span>
          {title}
        </>
      }
      labelPlacement="end" // Adjust label placement if needed
    />
  );
};

export default Input;
