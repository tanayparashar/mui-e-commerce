import React from "react";
import {
  Box,
  Paper,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import { Link } from "react-router-dom";

// Import other icons as needed
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import AssignmentIcon from "@mui/icons-material/Assignment";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ContactsIcon from "@mui/icons-material/Contacts";
import PaymentIcon from "@mui/icons-material/Payment";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

export default function Sidebar() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <Paper>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          position: "fixed",
          left: 0,
          //   background: "#f5f5f5",
          width: !isMobile ? "20%" : "280px",
          overflow: "auto",
          pb: 20,
        }}
      >
        <ListItemButton component={Link} to="/setup" sx={{ borderRadius: 1 }}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Setup" />
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

        <ListItemButton
          component={Link}
          to="/user/wishlist"
          sx={{ borderRadius: 1 }}
        >
          <ListItemIcon>
            <FavoriteIcon />
          </ListItemIcon>
          <ListItemText primary="Wishlist" />
        </ListItemButton>

        <ListItemButton
          component={Link}
          to="/user/bookmark"
          sx={{ borderRadius: 1 }}
        >
          <ListItemIcon>
            <BookmarkIcon />
          </ListItemIcon>
          <ListItemText primary="Bookmark" />
        </ListItemButton>

        <ListItemButton
          component={Link}
          to="/user/address"
          sx={{ borderRadius: 1 }}
        >
          <ListItemIcon>
            <ContactsIcon />
          </ListItemIcon>
          <ListItemText primary="Address" />
        </ListItemButton>

        <ListItemButton
          component={Link}
          to="/user/payment"
          sx={{ borderRadius: 1 }}
        >
          <ListItemIcon>
            <PaymentIcon />
          </ListItemIcon>
          <ListItemText primary="Payment Methods" />
        </ListItemButton>

        <ListItemButton
          component={Link}
          to="/user/support"
          sx={{ borderRadius: 1 }}
        >
          <ListItemIcon>
            <SupportAgentIcon />
          </ListItemIcon>
          <ListItemText primary="Support" />
        </ListItemButton>

        <ListItemButton
          component={Link}
          to="/user/setting"
          sx={{ borderRadius: 1 }}
        >
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Setting" />
        </ListItemButton>

        <ListItemButton
          component={Link}
          to="/user/logout"
          sx={{ borderRadius: 1 }}
        >
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItemButton>
        <ListItemButton
          component={Link}
          to="/user/payment"
          sx={{ borderRadius: 1 }}
        >
          <ListItemIcon>
            <PaymentIcon />
          </ListItemIcon>
          <ListItemText primary="Payment Methods" />
        </ListItemButton>

        <ListItemButton
          component={Link}
          to="/user/support"
          sx={{ borderRadius: 1 }}
        >
          <ListItemIcon>
            <SupportAgentIcon />
          </ListItemIcon>
          <ListItemText primary="Support" />
        </ListItemButton>

        <ListItemButton
          component={Link}
          to="/user/setting"
          sx={{ borderRadius: 1 }}
        >
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Setting" />
        </ListItemButton>

        <ListItemButton
          component={Link}
          to="/user/logout"
          sx={{ borderRadius: 1 }}
        >
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItemButton>
        <ListItemButton
          component={Link}
          to="/user/payment"
          sx={{ borderRadius: 1 }}
        >
          <ListItemIcon>
            <PaymentIcon />
          </ListItemIcon>
          <ListItemText primary="Payment Methods" />
        </ListItemButton>

        <ListItemButton
          component={Link}
          to="/user/support"
          sx={{ borderRadius: 1 }}
        >
          <ListItemIcon>
            <SupportAgentIcon />
          </ListItemIcon>
          <ListItemText primary="Support" />
        </ListItemButton>

        <ListItemButton
          component={Link}
          to="/user/setting"
          sx={{ borderRadius: 1 }}
        >
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Setting" />
        </ListItemButton>

        <ListItemButton
          component={Link}
          to="/user/logout"
          sx={{ borderRadius: 1 }}
        >
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItemButton>

        <ListItemButton
          component={Link}
          to="/user/payment"
          sx={{ borderRadius: 1 }}
        >
          <ListItemIcon>
            <PaymentIcon />
          </ListItemIcon>
          <ListItemText primary="Payment Methods" />
        </ListItemButton>

        <ListItemButton
          component={Link}
          to="/user/support"
          sx={{ borderRadius: 1 }}
        >
          <ListItemIcon>
            <SupportAgentIcon />
          </ListItemIcon>
          <ListItemText primary="Support" />
        </ListItemButton>

        <ListItemButton
          component={Link}
          to="/user/setting"
          sx={{ borderRadius: 1 }}
        >
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Setting" />
        </ListItemButton>

        <ListItemButton
          component={Link}
          to="/user/logout"
          sx={{ borderRadius: 1 }}
        >
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItemButton>
        <ListItemButton
          component={Link}
          to="/user/payment"
          sx={{ borderRadius: 1 }}
        >
          <ListItemIcon>
            <PaymentIcon />
          </ListItemIcon>
          <ListItemText primary="Payment Methods" />
        </ListItemButton>

        <ListItemButton
          component={Link}
          to="/user/support"
          sx={{ borderRadius: 1 }}
        >
          <ListItemIcon>
            <SupportAgentIcon />
          </ListItemIcon>
          <ListItemText primary="Support" />
        </ListItemButton>

        <ListItemButton
          component={Link}
          to="/user/setting"
          sx={{ borderRadius: 1 }}
        >
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Setting" />
        </ListItemButton>

        <ListItemButton
          component={Link}
          to="/user/logout"
          sx={{ borderRadius: 1 }}
        >
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItemButton>
        <ListItemButton
          component={Link}
          to="/user/payment"
          sx={{ borderRadius: 1 }}
        >
          <ListItemIcon>
            <PaymentIcon />
          </ListItemIcon>
          <ListItemText primary="Payment Methods" />
        </ListItemButton>

        <ListItemButton
          component={Link}
          to="/user/support"
          sx={{ borderRadius: 1 }}
        >
          <ListItemIcon>
            <SupportAgentIcon />
          </ListItemIcon>
          <ListItemText primary="Support" />
        </ListItemButton>

        <ListItemButton
          component={Link}
          to="/user/setting"
          sx={{ borderRadius: 1 }}
        >
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Setting" />
        </ListItemButton>

        <ListItemButton
          component={Link}
          to="/user/logout"
          sx={{ borderRadius: 1 }}
        >
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItemButton>
        <ListItemButton
          component={Link}
          to="/user/payment"
          sx={{ borderRadius: 1 }}
        >
          <ListItemIcon>
            <PaymentIcon />
          </ListItemIcon>
          <ListItemText primary="Payment Methods" />
        </ListItemButton>

        <ListItemButton
          component={Link}
          to="/user/support"
          sx={{ borderRadius: 1 }}
        >
          <ListItemIcon>
            <SupportAgentIcon />
          </ListItemIcon>
          <ListItemText primary="Support" />
        </ListItemButton>

        <ListItemButton
          component={Link}
          to="/user/setting"
          sx={{ borderRadius: 1 }}
        >
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Setting" />
        </ListItemButton>

        <ListItemButton
          component={Link}
          to="/user/logout"
          sx={{ borderRadius: 1 }}
        >
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItemButton>
        <ListItemButton
          component={Link}
          to="/user/support"
          sx={{ borderRadius: 1 }}
        >
          <ListItemIcon>
            <SupportAgentIcon />
          </ListItemIcon>
          <ListItemText primary="Support" />
        </ListItemButton>

        <ListItemButton
          component={Link}
          to="/user/setting"
          sx={{ borderRadius: 1 }}
        >
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Setting" />
        </ListItemButton>

        <ListItemButton
          component={Link}
          to="/user/logout"
          sx={{ borderRadius: 1 }}
        >
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItemButton>
        <ListItemButton
          component={Link}
          to="/user/support"
          sx={{ borderRadius: 1 }}
        >
          <ListItemIcon>
            <SupportAgentIcon />
          </ListItemIcon>
          <ListItemText primary="Support" />
        </ListItemButton>

        <ListItemButton
          component={Link}
          to="/user/setting"
          sx={{ borderRadius: 1 }}
        >
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Setting" />
        </ListItemButton>

        <ListItemButton
          component={Link}
          to="/user/logout"
          sx={{ borderRadius: 1 }}
        >
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItemButton>
        <ListItemButton
          component={Link}
          to="/user/support"
          sx={{ borderRadius: 1 }}
        >
          <ListItemIcon>
            <SupportAgentIcon />
          </ListItemIcon>
          <ListItemText primary="Support" />
        </ListItemButton>

        <ListItemButton
          component={Link}
          to="/user/setting"
          sx={{ borderRadius: 1 }}
        >
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Setting" />
        </ListItemButton>

        <ListItemButton
          component={Link}
          to="/user/logout"
          sx={{ borderRadius: 1 }}
        >
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItemButton>
        <ListItemButton
          component={Link}
          to="/user/support"
          sx={{ borderRadius: 1 }}
        >
          <ListItemIcon>
            <SupportAgentIcon />
          </ListItemIcon>
          <ListItemText primary="Support" />
        </ListItemButton>
      </Box>
    </Paper>
  );
}
