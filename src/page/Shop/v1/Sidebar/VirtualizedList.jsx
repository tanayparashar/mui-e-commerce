import * as React from "react";
import { List, Box, ListItem, ListItemText, Paper } from "@mui/material";
import { Link } from "react-router-dom";

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

export default function VirtualizedList() {
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
                backgroundColor: "#f0f0f0", // Add your desired hover background color here
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
