import * as React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Fab from "@mui/material/Fab";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import Avatar from "@mui/material/Avatar";
import MenuIcon from "@mui/icons-material/Menu";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import MoreIcon from "@mui/icons-material/MoreVert";
import { useMediaQuery, useTheme } from "@mui/material";

const messages = [
  {
    id: 1,
    to: "/setup",
    text: "Setup",
  },
  {
    id: 2,

    to: "/setup",
    text: "Setup",
  },
  {
    id: 3,

    to: "/setup",
    text: "Setup",
  },
  {
    id: 4,

    to: "/setup",
    text: "Setup",
  },
  {
    id: 5,

    to: "/setup",
    text: "Setup",
  },
  {
    id: 6,

    to: "/setup",
    text: "Setup",
  },
  {
    id: 7,

    to: "/setup",
    text: "Setup",
  },

  {
    id: 8,

    to: "/setup",
    text: "Setup",
  },
  {
    id: 9,

    to: "/setup",
    text: "Setup",
  },
  {
    id: 10,

    to: "/setup",
    text: "Setup",
  },
];

export default function Sidebar() {
  // const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const theme = useTheme();

  return (
    <Box>
      <Box
        sx={{
          position: "fixed",
          overflowY: "scroll",
          height: "100vh",
          width: "280px", // Set the width of the sidebar
          background: theme.palette.grey[50],
          // boxShadow: theme.shadows[4],
          top: "66px",
          p: 1,
          pb: 10,

          "&:hover::-webkit-scrollbar": {
            display: "block",
          },
          "&::-webkit-scrollbar": {
            display: "none",
            width: "0.512rem",
          },
          "&::-webkit-scrollbar-track": {
            boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
            webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: theme.palette.grey[500_24],
            height: "4px",
            borderRadius: "8px",
          },
        }}
      >
        <Typography variant="subtitle2" mt={4} fontWeight={"bold"}>
          GETTING STARTED
        </Typography>
        <h3>Content</h3>
        <h3>Content</h3>
        <h3>Content</h3>
        <h3>Content</h3>
        <h3>Content</h3>
        <h3>Content</h3>
        <h3>Content</h3>
        <Typography variant="subtitle2" mt={4} fontWeight={"bold"}>
          THEME UI
        </Typography>
        <h3>Content</h3>
        <h3>Content</h3>
        <h3>Content</h3>
        <h3>Content</h3>
        <h3>Content</h3>
        <h3>Content</h3>

        <Typography variant="subtitle2" mt={4} fontWeight={"bold"}>
          DEVELOPMENT
        </Typography>
        <h3>Content</h3>
        <h3>Content</h3>
        <h3>Content</h3>
        <h3>Content</h3>
        <h3>Content</h3>
        <h3>Content</h3>
        <h3>Content</h3>
        <h3>Content</h3>
        <Typography variant="subtitle2" mt={4} fontWeight={"bold"}>
          SUPPORT
        </Typography>
        <h3>Content</h3>
        <h3>Content</h3>
        <h3>Content</h3>
        <h3>Content</h3>
        <h3>Last One</h3>
      </Box>
    </Box>
  );
}
