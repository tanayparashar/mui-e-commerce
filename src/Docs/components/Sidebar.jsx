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
import { useMediaQuery } from "@mui/material";

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
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        position: "fixed",
        left: 0,
        background: "#f5f5f5",
        width: !isMobile ? "20%" : "280px",
        overflow: "auto",
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
          backgroundColor: "#8d8e90",
          height: "4px",
          borderRadius: "8px",
        },
      }}
    >
      <Paper square sx={{ pb: "50px" }}>
        <Typography
          variant="h5"
          gutterBottom
          component="div"
          sx={{ p: 2, pb: 0 }}
        >
          Documentation
        </Typography>
        <List sx={{ mb: 2 }}>
          {messages.map(({ id, to, text }) => (
            <React.Fragment key={id}>
              {id === 1 && (
                <ListSubheader sx={{ bgcolor: "background.paper" }}>
                  Today
                </ListSubheader>
              )}

              {id === 3 && (
                <ListSubheader sx={{ bgcolor: "background.paper" }}>
                  Yesterday
                </ListSubheader>
              )}

              <ListItem button>
                <ListItemText secondary={text} />
              </ListItem>
            </React.Fragment>
          ))}
        </List>
      </Paper>
    </Box>
  );
}
