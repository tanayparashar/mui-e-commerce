import React, { useState } from "react";
import {
  Button,
  Collapse,
  ClickAwayListener,
  Typography,
  Box,
  IconButton,
  Paper,
  Divider,
} from "@mui/material";
import EastIcon from "@mui/icons-material/East";

import VirtualizedList from "./VirtualizedList";

const CustomMenu = ({ title }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleButtonClick = () => {
    setIsOpen((prevOpen) => !prevOpen); // Toggle the isOpen state
  };

  const handleClickAway = () => {
    setIsOpen(false); // Close the dropdown when clicking away
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Box>
        {/* <Typography variant="h6" mb={1}>
          Category
        </Typography> */}
        <Paper sx={{ mb: 2 }}>
          <Button
            onClick={handleButtonClick}
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-start",
              textAlign: "left",
              color: "inherit",
              p: 1.5,

              "&:hover": {
                "& > svg": {
                  marginLeft: "16px",
                  transition: "margin-left 0.3s ease",
                },
              },
            }}
          >
            <Typography>{title}</Typography>
            <EastIcon sx={{ marginLeft: "8px" }} />
          </Button>

          {/* <Divider /> */}

          {/* Use Collapse component for smooth transitions */}
          <Collapse in={isOpen} collapsedHeight={0}>
            <Divider />
            <VirtualizedList />
          </Collapse>
        </Paper>
      </Box>
    </ClickAwayListener>
  );
};

export default CustomMenu;
