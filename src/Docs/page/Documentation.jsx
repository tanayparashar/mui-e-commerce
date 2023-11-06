import React from "react";
import {
  Box,
  Divider,
  List,
  ListItem,
  Paper,
  Typography,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";

import useScrollToTopOnMount from "../../hook/useScrollToTopOnMount";
export default function Documentation() {
  const theme = useTheme();
  useScrollToTopOnMount();
  return (
    <Box>
      <Box>
        <img
          style={{
            borderRadius: "10px",
            boxShadow: theme.customShadows.z24,
          }}
          src="https://i.ibb.co/1JdbK8x/onlineaid.png"
        />
      </Box>
      <Typography variant="h3" mt={10}>
        OnlineAId - E-commerce React Template
      </Typography>
      <Typography fontWeight={"bold"} mt={3} mb={1}>
        A professional React Kit that comes with plenty of ready-to-use
        Material-UI components that will help you to build more beautiful
        frontend pages.
      </Typography>
      {/* -----------------------  */}
      <List>
        <ListItem sx={{ px: 0, mx: 0, display: "block" }}>
          ⭕ Built with {""}
          <Link to={"https:mui.com"} style={{ textDecoration: "none" }}>
            MUI v5
          </Link>{" "}
          with two versions{" "}
          <Box component={"span"} fontWeight={"bold"}>
            React.js | Vite.
          </Box>
        </ListItem>
        <ListItem sx={{ px: 0, mx: 0 }}>
          ⭕ Includes a complete design component Figma file to extend your
          project development.
        </ListItem>
        <ListItem sx={{ px: 0, mx: 0 }}>
          ⭕ The theme is ready to change to any style you want.
        </ListItem>
      </List>

      {/* ------------------------- */}

      <Typography sx={{ fontWeight: "bold", mt: 5 }}>
        Learn more: {""}
        <Box component={Link} color={"error"} to="/package">
          package
        </Box>
      </Typography>

      <Box sx={{ py: 5 }}>
        <Divider />
      </Box>

      <Typography variant="h4">Documents</Typography>
      <Typography mt={2}>
        In addition to the documentation provided from Minimal you can refer to
        other relevant documents regarding the components used in this template.
      </Typography>

      <Typography variant="h6" my={3}>
        🔸MUI
      </Typography>

      <Typography>
        Because minimal is built on top of MUI components. You can read the
        documentation and use all of the MUI components here:{" "}
        <Box
          component={Link}
          color="error.main"
          to={"https://mui.com/components"}
        >
          https://mui.com/components/
        </Box>
        .
      </Typography>

      <Typography variant="h6" my={3}>
        🔸3rd party libraries
      </Typography>

      <Typography>
        We include direct links to third-party used libraries:
      </Typography>

      <Typography variant="h6" my={3}>
        Example:{" "}
      </Typography>

      <List>
        <ListItem sx={{ px: 0, mx: 0 }}>
          ⭕ Chart (https://apexcharts.com) Reference from
        </ListItem>
        <ListItem sx={{ px: 0, mx: 0 }}>⭕ Reference from</ListItem>
      </List>

      {/* _________________________--  */}
      <Box sx={{ py: 5 }}>
        <Divider />
      </Box>
      {/* _________________________--  */}

      <Typography variant="h4">Feedback</Typography>

      <Typography mt={2}>
        We are always open to your feedback at onlineaid.info@gmail.com
      </Typography>

      <Typography my={2}>
        If something is missing in the documentation, or if you found some part
        confusing, contact us with your suggestions for improvement.
      </Typography>
      <Typography>We love hearing from you!</Typography>

      {/* _________________________--  */}
      <Box sx={{ py: 5 }}>
        <Divider />
      </Box>
      {/* _________________________--  */}

      <Paper sx={{ p: 5 }}>
        <Typography variant="h3" color={"secondary.main"}>
          "This project is just the user interface not including the backend and
          database."
        </Typography>
      </Paper>
    </Box>
  );
}
