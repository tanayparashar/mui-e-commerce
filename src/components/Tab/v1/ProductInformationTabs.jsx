import * as React from "react";
import PropTypes from "prop-types";
import { Tab, Paper, Tabs, Box, Typography, useTheme } from "@mui/material";
import Description from "./Description";
import Reviews from "./Reviews";
import SwipeableViews from "react-swipeable-views";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
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
  const [value, setValue] = React.useState(0);
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

        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChange}
        >
          <CustomTabPanel value={value} index={0} dir={theme.direction}>
            <Description />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1} dir={theme.direction}>
            <Reviews />
          </CustomTabPanel>
        </SwipeableViews>
      </Paper>
    </Box>
  );
}
