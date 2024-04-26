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

const CustomMenu = ({ title, isOpenOrNot, lists }) => {
  const [isOpen, setIsOpen] = useState(isOpenOrNot);

  const handleButtonClick = () => {
    setIsOpen((prevOpen) => !prevOpen); // Toggle the isOpen state
  };

  const handleClickAway = () => {
    setIsOpen(false); // Close the dropdown when clicking away
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Box>
        <Paper sx={{ mb: 2 }} elevation={3}>
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

          {/* Use Collapse component for smooth transitions */}
          {/* collapsedHeight={0} */}
          <Collapse in={isOpen}>
            <Divider />
            <VirtualizedList lists={lists} />
          </Collapse>
        </Paper>
      </Box>
    </ClickAwayListener>
  );
};

export default CustomMenu;
