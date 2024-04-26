import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Slide,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Profile from "./Profile/Profile";
import ReusableList from "./ReusableList";
import MenuIconButton from "./MenuIconButton";

const NAV_WIDTH = 280;
const ScrollableList = [
  { name: "Accessories & Supplies", path: "/accessories-supplies" },
  { name: "Camera & Photo", path: "/camera-photo" },
  { name: "Car & Vehicle Electronics", path: "/car-vehicle-electronics" },
  { name: "Cell Phones & Accessories", path: "/cell-phones-accessories" },
  { name: "Computers & Accessories", path: "/computers-accessories" },
  { name: "GPS & Navigation", path: "/gps-navigation" },
  { name: "Headphones", path: "/headphones" },
  { name: "Home Audio", path: "/home-audio" },
  { name: "Office Electronics", path: "/office-electronics" },
  { name: "Portable Audio & Video", path: "/portable-audio-video" },
  { name: "Security & Surveillance", path: "/security-surveillance" },
  { name: "Service Plans", path: "/service-plans" },
  { name: "Television & Video", path: "/television-video" },
  {
    name: "Video Game Consoles & Accessories",
    path: "/video-game-consoles-accessories",
  },
  { name: "Video Projectors", path: "/video-projectors" },
  { name: "Wearable Technology", path: "/wearable-technology" },
  { name: "eBook Readers & Accessories", path: "/ebook-readers-accessories" },
];

const lists = [
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

const PrimaryList = [
  { id: 1, name: "Electronics" },
  { id: 2, name: "Computers" },
  { id: 3, name: "Smart Home" },
  { id: 4, name: "Arts & Crafts" },
  { id: 5, name: "Automotive" },
  { id: 6, name: "Baby" },
  { id: 7, name: "Beauty and Personal Care" },
  { id: 8, name: "Women's Fashion" },
  { id: 9, name: "Men's Fashion" },
  { id: 10, name: "Girls' Fashion" },
  { id: 11, name: "Boys' Fashion" },
  { id: 12, name: "Health and Household" },
  { id: 13, name: "Home and Kitchen" },
  { id: 14, name: "Industrial and Scientific" },
  { id: 15, name: "Luggage" },
  { id: 16, name: "Movies & Television" },
  { id: 17, name: "Pet Supplies" },
  { id: 18, name: "Sports and Outdoors" },
  { id: 19, name: "Tools & Home Improvement" },
  { id: 20, name: "Toys and Games" },
];

export default function MenuDrawer() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isOpening, setIsOpening] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  const handleToggleDrawer = () => {
    setIsOpening(true);
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleSectionClick = (section) => {
    setIsOpening(true);
    setActiveSection(section);
  };

  const handleCloseSection = () => {
    setIsOpening(false);
  };

  useEffect(() => {
    if (!isDrawerOpen) {
      setIsOpening(false);
    }
  }, [isDrawerOpen]);

  return (
    <Box>
      <MenuIconButton onClick={handleToggleDrawer} />

      <Drawer
        open={isDrawerOpen}
        onClose={handleToggleDrawer}
        variant="temporary"
        PaperProps={{
          sx: {
            width: NAV_WIDTH,
            // bgcolor: "background.default",
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
          {PrimaryList.map((category) => (
            <ListItem
              button
              onClick={() => handleSectionClick(category.name)}
              sx={{ display: "flex", justifyContent: "space-between" }}
              key={category.id}
            >
              <ListItemText primary={category.name} />
              <ChevronRightIcon />
            </ListItem>
          ))}
        </List>

        {/* List section You can made it component */}
        <Slide direction="right" in={isOpening} mountOnEnter unmountOnExit>
          <Box>
            {activeSection === "Electronics" && (
              <ReusableList
                title="Electronics"
                lists={ScrollableList}
                onClose={handleCloseSection}
                isOpening={isOpening}
              />
            )}
            {activeSection === "Women's Fashion" && (
              <ReusableList
                title="Women's Fashion"
                lists={lists}
                onClose={handleCloseSection}
                isOpening={isOpening}
              />
            )}
            {activeSection === "Girls' Fashion" && (
              <ReusableList
                title="Girl's Fashion"
                lists={lists}
                onClose={handleCloseSection}
                isOpening={isOpening}
              />
            )}
            {activeSection === "Toys and Games" && (
              <ReusableList
                title="Toys and Games"
                lists={lists}
                onClose={handleCloseSection}
                isOpening={isOpening}
              />
            )}
          </Box>
        </Slide>
      </Drawer>
    </Box>
  );
}
