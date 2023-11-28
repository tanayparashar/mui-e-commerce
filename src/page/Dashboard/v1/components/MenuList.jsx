import React, { useState } from "react";
import { Collapse, Typography, Box } from "@mui/material";
import SidebarList from "./SidebarList";

const MenuList = ({ title, isOpenOrNot, lists }) => {
  const [isOpen, setIsOpen] = useState(isOpenOrNot);

  const handleButtonClick = () => {
    setIsOpen((prevOpen) => !prevOpen); // Toggle the isOpen state
  };

  return (
    <Box>
      <Box
        onClick={handleButtonClick}
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-start",
          textAlign: "left",
          color: "inherit",
        }}
      >
        <Typography
          variant="caption"
          sx={{ textTransform: "uppercase", fontWeight: "bold", mt: 3 }}
        >
          {title}
        </Typography>
      </Box>

      <Collapse in={isOpen}>
        <SidebarList lists={lists} />
      </Collapse>
    </Box>
  );
};

export default MenuList;
