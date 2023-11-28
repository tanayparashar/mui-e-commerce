import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import {
  Box,
  useMediaQuery,
  List,
  Divider,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import MuiDrawer from "@mui/material/Drawer";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

import { Outlet } from "react-router-dom";
import Logo from "../../../../components/Logo/Logo";
import Sidebar from "../../v1/components/Sidebar";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const NAV_WIDTH = 280;

export default function DashboardLayout() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const handleDrawerClose = () => {
    setOpen((prevOpen) => !prevOpen); // Toggle the open state
  };

  const [openNav, setOpenNav] = React.useState(false);

  const toggleNav = () => {
    setOpenNav((prevOpen) => !prevOpen);
  };

  return (
    <Box sx={{ display: "flex" }}>
      {!isMobile && (
        <Drawer variant="permanent" open={open}>
          <DrawerHeader
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              // px: 2.5,
            }}
          >
            <Box
              component={"img"}
              src={"https://i.ibb.co/DpK6Z0m/1673291260756.png"}
              alt="Logo"
              sx={{
                height: "40px",
                width: "40px",
                objectFit: "cover",
              }}
            />
          </DrawerHeader>
          <Divider />
          <List>
            {["Inbox", "Starred"].map((text, index) => (
              <ListItem key={text} disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    flexDirection: open ? "row" : "column",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText
                    primary={text}
                    sx={{
                      fontSize: open ? "2px" : "8px",
                      color: "red",
                      fontWeight: open ? "bold" : "light",
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
      )}

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {isMobile && (
          <>
            <IconButton edge="start" color="inherit" onClick={toggleNav}>
              <MenuOpenIcon />
            </IconButton>

            <Drawer
              open={openNav}
              onClose={() => setOpenNav(false)}
              ModalProps={{
                keepMounted: true,
              }}
              PaperProps={{
                sx: { width: NAV_WIDTH },
              }}
            >
              <Box p={0}>
                <Box sx={{ p: 2 }}>
                  <Logo jc={"left"} />
                </Box>
                <Sidebar />
              </Box>
            </Drawer>
          </>
        )}

        {!isMobile && (
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        )}
        <Outlet />
      </Box>
    </Box>
  );
}
