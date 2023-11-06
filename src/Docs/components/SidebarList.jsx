import * as React from "react";
import {
  List,
  Box,
  ListItem,
  ListItemText,
  Paper,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";

export default function SidebarList({ lists }) {
  const theme = useTheme();
  return (
    <>
      <List sx={{ mt: 0 }}>
        {lists.map((list) => (
          <ListItem
            button
            key={list.name}
            component={Link}
            to={list.path}
            sx={{
              px: 1,
              py: 0.3,
              mb: 0.5,
              borderRadius: "6px",
              transition: "0.5s",
              "&:hover": {
                backgroundColor: theme.palette.secondary.light,
                color: theme.palette.secondary.contrastText,
              },
            }}
          >
            <ListItemText
              to={`list.path`}
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
    </>
  );
}
