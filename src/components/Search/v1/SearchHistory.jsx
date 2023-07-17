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
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function SearchHistory() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-between", m: 1 }}>
        <Typography variant="h6">Recent Search</Typography>
        <Button size="small">Edit</Button>
      </Box>
      <List
        sx={{ width: "100%", maxWidth: "100%", bgcolor: "background.paper" }}
      >
        <ListItem alignItems="center" sx={{ gap: 3 }}>
          <img
            style={{ width: "60px" }}
            alt="Product"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF1Tn8a-MEMJGBLAUrvgTMcK-FsvOx-a33BA&usqp=CAU"
          />

          <ListItemText
            primary="Product title"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Ali Connors
                </Typography>
                {" — I'll be in your neighborhood doing errands this…"}
              </React.Fragment>
            }
          />
          <IconButton
            aria-label="fingerprint"
            color="secondary"
            onClick={handleMenuOpen}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>Option 1</MenuItem>
            <MenuItem onClick={handleMenuClose}>Option 2</MenuItem>
          </Menu>
        </ListItem>
        <Divider component="div" />

        <ListItem alignItems="center" sx={{ gap: 3 }}>
          <img
            style={{ width: "60px" }}
            alt="Product"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF1Tn8a-MEMJGBLAUrvgTMcK-FsvOx-a33BA&usqp=CAU"
          />

          <ListItemText
            primary="Product title"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Ali Connors
                </Typography>
                {" — I'll be in your neighborhood doing errands this…"}
              </React.Fragment>
            }
          />
          <IconButton
            aria-label="fingerprint"
            color="secondary"
            onClick={handleMenuOpen}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>Option 1</MenuItem>
            <MenuItem onClick={handleMenuClose}>Option 2</MenuItem>
          </Menu>
        </ListItem>
        <Divider component="div" />

        <ListItem alignItems="center" sx={{ gap: 3 }}>
          <img
            style={{ width: "60px" }}
            alt="Product"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF1Tn8a-MEMJGBLAUrvgTMcK-FsvOx-a33BA&usqp=CAU"
          />

          <ListItemText
            primary="Product title"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Ali Connors
                </Typography>
                {" — I'll be in your neighborhood doing errands this…"}
              </React.Fragment>
            }
          />
          <IconButton
            aria-label="fingerprint"
            color="secondary"
            onClick={handleMenuOpen}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>Option 1</MenuItem>
            <MenuItem onClick={handleMenuClose}>Option 2</MenuItem>
          </Menu>
        </ListItem>
        <Divider component="div" />
      </List>
    </>
  );
}
