// import React from "react";
// import { Box, Paper } from "@mui/material";
// import { Link } from "react-router-dom";

// export default function Sidebar() {
//   return (
//     <Paper>
//       <Box sx={{ display: "flex", flexDirection: "column", p: 2 }}>
//         <Link to={"/user"}>Home</Link>
//         <Link to={"/user/profile"}>Profile</Link>
//         <Link to={"/user/orders"}>Order</Link>
//         <Link to={"/user/address"}>Address</Link>
//         <Link to={"/user/save"}>Save</Link>
//         <Link to={"/user/setting"}>Setting</Link>
//         <Link to={"/user/logout"}>Log out</Link>
//       </Box>
//     </Paper>
//   );
// }

import React from "react";
import {
  Box,
  Paper,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import AssignmentIcon from "@mui/icons-material/Assignment";
// Import other icons as needed

export default function Sidebar() {
  return (
    <Paper>
      <Box sx={{ display: "flex", flexDirection: "column", p: 2 }}>
        <ListItemButton component={Link} to="/user" sx={{ borderRadius: 1 }}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemButton>
        <ListItemButton
          component={Link}
          to="/user/profile"
          sx={{ borderRadius: 1 }}
        >
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItemButton>
        <ListItemButton
          component={Link}
          to="/user/orders"
          sx={{ borderRadius: 1 }}
        >
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary="Order" />
        </ListItemButton>
        {/* Add more list items with icons */}
      </Box>
    </Paper>
  );
}
