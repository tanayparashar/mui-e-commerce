import React, { useState } from "react";
import {
  List,
  Box,
  ListItem,
  Divider,
  Button,
  ListItemText,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  useTheme,
} from "@mui/material";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import LazyLoadImg from "../../Lazyload/LazyLoadImg";

// Sample data for your list
const data = [
  {
    id: 1,
    imgSrc:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
    title: "Product title 1",
    description: "I'll be in your neighborhood doing errands this…",
  },
  {
    id: 2,
    imgSrc:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    title: "Product title 2",
    description: "I'll be in your neighborhood doing errands this…",
  },
  {
    id: 3,
    imgSrc:
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&q=80&w=1964&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Product title 3",
    description: "I'll be in your neighborhood doing errands this…",
  },
  {
    id: 4,
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUlVMQsdWZheXfsWnyEr6qf8eIWnkk1Nf0RheoaYFRX589MtfS__1TmBOstl4B1j7Ydxo&usqp=CAU",
    title: "Product title 4",
    description: "I'll be in your neighborhood doing errands this…",
  },
  {
    id: 5,
    imgSrc:
      "https://imgaz.staticbg.com/images/oaupload/banggood/images/AF/79/1af005f5-ac58-445c-abf3-b3a4bcc19cba.jpg.webp",
    title: "Product title 5",
    description: "I'll be in your neighborhood doing errands this…",
  },
  {
    id: 6,
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF1Tn8a-MEMJGBLAUrvgTMcK-FsvOx-a33BA&usqp=CAU",
    title: "Product title 6",
    description: "I'll be in your neighborhood doing errands this…",
  },

  {
    id: 7,
    imgSrc:
      "https://static-01.daraz.com.bd/p/6194305316bb7651ce447aad48052723.jpg",
    title: "Product title 7",
    description: "I'll be in your neighborhood doing errands this…",
  },
];

export default function SearchHistory() {
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          m: 1,
          mb: 0,
          alignItems: "center",
        }}
      >
        <Typography variant="h6">Recent Search</Typography>
        <Button size="small" color="secondary">
          See all
        </Button>
      </Box>
      <List
        sx={{
          width: "100%",
          maxWidth: "100%",
          // background: theme.palette.grey[100],
          pt: 0,
        }}
      >
        {data.map((item, index) => (
          <React.Fragment key={item.id}>
            <ListItem
              alignItems="center"
              sx={{
                gap: 3,
                background: theme.palette.grey[500_8],
                px: 1,
              }}
            >
              {/* <img style={{ width: "60px" }} alt="Product" src={item.imgSrc} /> */}

              <LazyLoadImg
                component={LazyLoadImg}
                image={{
                  alt: item.title,
                  height: "auto", // Replace with the desired height
                  width: 60, // Replace with the desired width
                  style: { objectFit: "cover" },
                  src: item.imgSrc, // Replace with the image URL
                }}
              />

              <ListItemText
                primary={item.title}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="inherit"
                    >
                      Ali Connors
                    </Typography>
                    {" — " + item.description}
                  </React.Fragment>
                }
              />
              <IconButton
                aria-label="fingerprint"
                color="inherit"
                onClick={handleMenuOpen}
                sx={{ backgroundColor: theme.palette.grey[500_16] }}
              >
                <MoreHorizRoundedIcon fontSize="small" />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                <MenuItem onClick={handleMenuClose}>Delete</MenuItem>
                <MenuItem onClick={handleMenuClose}>Bookmark</MenuItem>
              </Menu>
            </ListItem>
            <Divider component="div" />
          </React.Fragment>
        ))}
      </List>
    </>
  );
}
