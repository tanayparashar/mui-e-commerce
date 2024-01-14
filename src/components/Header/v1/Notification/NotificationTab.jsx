import * as React from "react";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Badge, useTheme } from "@mui/material";

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))(({ theme }) => ({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  "& .MuiTabs-indicatorSpan": {
    maxWidth: 30,
    width: "100%",
    backgroundColor: theme.palette.error.main,
  },
  "& .MuiTabs-flexContainer": {
    display: "flex",
    justifyContent: "space-between",
  },
}));

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    padding: 0,
    color: theme.palette.common.black,
    "&.Mui-selected": {
      color: theme.palette.common.white,
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      borderRadius: "8px",
      fontWeight: "bold",
      maxHeight: "30px",
    },
    "&.MuiButtonBase-root-MuiTab-root": {},
  })
);

export default function CustomizedTabs() {
  const [value, setValue] = React.useState(0);
  const theme = useTheme();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Box
        sx={{
          bgcolor: theme.palette.warning.main,
          borderRadius: "8px",
          // p: 0.5,
          // height: "48px",
          justifyContent: "space-between",
        }}
      >
        <StyledTabs
          value={value}
          onChange={handleChange}
          aria-label="styled tabs example"
        >
          <StyledTab label="All" />
          <StyledTab label="Unread" />
          <StyledTab label="Datasets" />
        </StyledTabs>
      </Box>
    </Box>
  );
}
