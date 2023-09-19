import React from "react";
import {
  Box,
  FormControl,
  FormControlLabel,
  Radio,
  Typography,
} from "@mui/material";
import Input from "../../components/Input";

function Category({ handleChange }) {
  return (
    <div>
      <Typography variant="h6" className="sidebar-title">
        Category
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <FormControl component="fieldset">
          <FormControlLabel
            value=""
            control={
              <Radio color="primary" onChange={handleChange} name="test" />
            }
            label={
              <>
                <span
                  className="checkmark"
                  style={{
                    backgroundColor: "transparent",
                    display: "inline-block",
                    width: "16px",
                    height: "16px",
                    marginRight: "8px",
                  }}
                ></span>
                All
              </>
            }
            labelPlacement="end"
          />

          <Input
            handleChange={handleChange}
            value="sneakers"
            title="Sneakers"
            name="test"
          />
          <Input
            handleChange={handleChange}
            value="flats"
            title="Flats"
            name="test"
          />
          <Input
            handleChange={handleChange}
            value="sandals"
            title="Sandals"
            name="test"
          />
          <Input
            handleChange={handleChange}
            value="heels"
            title="Heels"
            name="test"
          />
        </FormControl>
      </Box>
    </div>
  );
}

export default Category;
