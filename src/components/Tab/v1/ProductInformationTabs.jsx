import { useState } from "react";

import { Tab, Paper, Tabs, Box, Typography, useTheme } from "@mui/material";

// import SwipeableViews from "react-swipeable-views";
import Description from "./Description";
import Reviews from "./Reviews";

import PropTypes from "prop-types";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Typography component="div" sx={{ p: 3 }}>
          {children}
        </Typography>
      )}
    </Box>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function ProductInformationTabs() {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Paper>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            sx={{ ml: 3 }}
            centered={false}
          >
            <Tab
              sx={{
                fontWeight: "normal",
                p: 0,
              }}
              label="Description"
              {...a11yProps(0)}
              disableRipple
            />
            <Tab
              sx={{
                fontWeight: "normal",
                p: 0,
              }}
              label={`Reviews (${0})`}
              {...a11yProps(1)}
              disableRipple
            />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0} dir={theme.direction}>
          <Description />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1} dir={theme.direction}>
          <Reviews />
        </CustomTabPanel>
      </Paper>
    </Box>
  );
}
