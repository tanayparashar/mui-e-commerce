import { useEffect, useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  Box,
  Button,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Tooltip,
  Typography,
} from "@mui/material";
import List01 from "../List/List01";
import Slide from "@mui/material/Slide";
import { Link } from "react-router-dom";

const SectionOne = ({ title, categories, onClose, isOpening }) => {
  useEffect(() => {
    if (!isOpening) {
      const timeout = setTimeout(() => {
        onClose();
      }, 400);
      return () => clearTimeout(timeout);
    }
  }, [onClose, isOpening]);

  return (
    <Slide direction="left" in={isOpening} mountOnEnter unmountOnExit>
      <Box
        sx={{
          backgroundColor: "#f0f0f0",
          height: "100vw",
          flexGrow: 1,
          top: "0",
          width: "100%",
          position: "absolute",
          // overflowY: "scroll",
        }}
      >
        <Box
          sx={{
            display: "flex",
            // justifyContent: "space-between",
            alignItems: "center",
            px: 2,
            py: 2,
            gap: 2,
          }}
        >
          <Tooltip title="Back" arrow>
            <IconButton
              onClick={onClose}
              size="small"
              sx={{
                p: 0,
                borderRadius: "50%",
              }}
            >
              <ArrowBackIcon />
            </IconButton>
          </Tooltip>
          <Typography variant="subtitle1" fontWeight={"bold"}>
            {title}
          </Typography>
        </Box>

        <Divider component="div" />

        <List sx={{ mt: 0 }}>
          {categories.map((list) => (
            <ListItem
              button
              sx={{ py: 1 }}
              key={list.name}
              component={Link}
              to={list.path}
            >
              <ListItemText
                component={Link}
                to={`list.path`}
                primary={list.name}
                primaryTypographyProps={{
                  fontWeight: "medium",
                  variant: "body1",
                }}
              />
            </ListItem>
          ))}
        </List>
        <Box sx={{ px: 2 }}>
          <List01 />
        </Box>
      </Box>
    </Slide>
  );
};

export default SectionOne;
