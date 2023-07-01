import React from "react";
import {
  Drawer,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
  Box,
  Slide,
} from "@mui/material";
import Profile from "./Profile/Profile";
import SectionOne from "./Section/SectionOne";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const NAV_WIDTH = 280;
const categories = [
  { name: "Clothing", path: "/clothing" },
  { name: "Shoes", path: "/shoes" },
  { name: "Jewelry", path: "/jewelry" },
  { name: "Watches", path: "/watches" },
  { name: "Handbags", path: "/handbags" },
  { name: "Accessories", path: "/accessories" },
  { name: "Bras", path: "/bras" },
  { name: "Lingerie Sets' Fashion", path: "/lingerie" },
  { name: "Panties", path: "/panties" },
];
const categories2 = [
  { name: "Clothing", path: "/clothing" },
  { name: "Shoes", path: "/shoes" },
  { name: "Jewelry", path: "/jewelry" },
  { name: "Watches", path: "/watches" },
  { name: "Handbags", path: "/handbags" },
  { name: "Accessories", path: "/accessories" },
];

const CustomDrawer = ({
  isOpen,
  onClose,
  activeSection,
  handleSectionClick,
  handleCloseSection,
  isOpening,
}) => {
  return (
    <Drawer
      open={isOpen}
      onClose={onClose}
      variant="temporary"
      PaperProps={{
        sx: {
          width: NAV_WIDTH,
          bgcolor: "background.default",
          borderRightStyle: "1px solid",
          overflowX: "hidden",
        },
      }}
    >
      <Profile />

      <Typography sx={{ mx: 2, py: 2, fontWeight: "bold" }} variant="body1">
        Shop By Department
      </Typography>
      <Divider />
      <List sx={{ m: 0, pt: 0 }}>
        <ListItem
          button
          onClick={() => handleSectionClick("sectionOne")}
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <ListItemText primary="Women's Fashion" />
          <ChevronRightIcon />
        </ListItem>
        <ListItem button onClick={() => handleSectionClick("sectionTwo")}>
          <ListItemText primary="Girl's Fashion" />
          <ChevronRightIcon />
        </ListItem>
        {/* Add more list items for additional categories if needed */}
      </List>

      <Slide direction="left" in={isOpening} mountOnEnter unmountOnExit>
        <Box>
          {activeSection === "sectionOne" && (
            <SectionOne
              title="Women's Fashion"
              categories={categories}
              onClose={handleCloseSection}
              isOpening={isOpening}
            />
          )}
          {activeSection === "sectionTwo" && (
            <SectionOne
              title="Girl's Fashion"
              categories={categories2}
              onClose={handleCloseSection}
              isOpening={isOpening}
            />
          )}
        </Box>
      </Slide>

      {/* Add more sections for additional categories if needed */}
    </Drawer>
  );
};

export default CustomDrawer;
