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

export default function VirtualizedList({ lists }) {
  const theme = useTheme();
  return (
    <>
      <List sx={{ mt: 0, p: 0.7 }}>
        {lists.map((list) => (
          <ListItem
            button
            key={list.name}
            component={Link}
            to={list.path}
            sx={{
              p: 1,
              borderRadius: "6px",
              transition: "0.5s",
              "&:hover": {
                backgroundColor: theme.palette.grey[200],
                pl: 1.5,
              },
            }}
          >
            <ListItemText
              component={Link}
              to={`list.path`}
              primary={list.name}
              primaryTypographyProps={{
                fontWeight: "normal",
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
