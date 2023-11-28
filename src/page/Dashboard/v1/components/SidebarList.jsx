import React from "react";
import { List, ListItem, ListItemText, useTheme } from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";

export default function SidebarList({ lists }) {
  const theme = useTheme();
  const location = useLocation();

  return (
    <List sx={{ mt: 0 }}>
      {lists.map((list) => (
        <ListItem
          key={list.name}
          component={NavLink}
          to={list.path}
          sx={{
            px: 1,
            py: 0.3,
            mb: 0.5,
            borderRadius: "6px",
            transition: "0.5s",
            backgroundColor:
              location.pathname === list.path
                ? theme.palette.secondary.main
                : "transparent",
            color:
              location.pathname === list.path
                ? theme.palette.secondary.contrastText
                : "inherit",
            "&:hover": {
              backgroundColor: theme.palette.secondary.main,
              color: theme.palette.secondary.contrastText,
            },
          }}
        >
          <ListItemText
            primary={list.name}
            primaryTypographyProps={{
              fontWeight: "500",
              variant: "body1",
              fontSize: "14px",
            }}
          />
        </ListItem>
      ))}
    </List>
  );
}
