import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Tooltip,
  Typography,
  Slide,
  useTheme,
} from "@mui/material";
import List01 from "./List/List01";
import { Link } from "react-router-dom";

const ReusableList = ({ title, lists, onClose, isOpening }) => {

  const theme = useTheme()

  return (
    <Slide direction="right" in={isOpening} mountOnEnter unmountOnExit>
      <Box
        sx={{
          backgroundColor: theme.palette.mode === "dark" ? theme.palette.grey[800] : theme.palette.common.white,
          height: "100%",
          flexGrow: 1,
          top: "0",
          width: "280px",
          position: "fixed",
          overflowY: "scroll",
        }}
      >
        <Box
          sx={{
            display: "flex",
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
          {lists.map((list) => (
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
                  fontWeight: "normal",
                  variant: "body1",
                }}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Slide>
  );
};

export default ReusableList;
