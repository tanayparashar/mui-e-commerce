import * as React from "react";
import {
  Box,
  Toolbar,
  AppBar,
  IconButton,
  Typography,
  Badge,
  MenuItem,
  Menu,
  useMediaQuery,
  Avatar,
  useScrollTrigger,
  Slide,
} from "@mui/material";
import PropTypes from "prop-types";

import styled from "@emotion/styled";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import SearchBar from "../../Search/v1/SearchBar";
import Logo from "../../Logo/Logo";
import SearchIconClick from "../../Search/SearchIcon";
import CartIcon from "../../Cart/CartIcon";
import MenuDrawer from "../../Menu/v1/MenuDrawer";
import { Link } from "react-router-dom";
import ShowCartDrawer from "./ShowCartDrawer";
import { AuthContext } from "../../../provider/AuthProvider";
import BottomHeader from "./BottomHeader";
import TopHeader from "./TopHeader";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: theme.palette.secondary.main,
  // [theme.breakpoints.down("sm")]: {
  //   flexDirection: "column",
  //   justifyContent: "center",
  // },
}));

const MOBILE_WIDTH = 280;

export default function Header(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const [isOpening, setIsOpening] = React.useState(false);
  const { user, logOut } = React.useContext(AuthContext);

  const handleToggleDrawer = () => {
    setIsOpening(true);
    setIsDrawerOpen(!isDrawerOpen);
  };

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCartMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const logoutHandler = () => {
    logOut()
      .then(() => {
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
        }, 1000);
      })
      .catch((error) => console.log(error));
  };

  const menuId = "primary-search-account-menu";
  const cartId = "primary-cart-menu";

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <Box sx={{ width: MOBILE_WIDTH }} />
      <MenuItem component={Link} to={"/user"} onClick={handleMenuClose}>
        Profile
      </MenuItem>
      <MenuItem component={Link} to={"/"} onClick={handleMenuClose}>
        My account
      </MenuItem>
      <MenuItem component={Link} to={"/dashboard"} onClick={handleMenuClose}>
        Dashboard
      </MenuItem>

      {user ? (
        <MenuItem onClick={logoutHandler} component={Link} color="inherit">
          Logout
        </MenuItem>
      ) : (
        <MenuItem component={Link} to="/login" color="inherit">
          Login
        </MenuItem>
      )}
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <Box sx={{ width: MOBILE_WIDTH }} />

      <MenuItem component={Link} to="/addtocart">
        <ShowCartDrawer />
        <p style={{ marginLeft: "12px" }}>Cart</p>
      </MenuItem>

      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  // function HideOnScroll(props) {
  //   const { children, window } = props;
  //   // Note that you normally won't need to set the window ref as useScrollTrigger
  //   // will default to window.
  //   // This is only being set here because the demo is in an iframe.
  //   const trigger = useScrollTrigger({
  //     target: window ? window() : undefined,
  //   });

  //   return (
  //     <Slide appear={false} direction="down" in={!trigger}>
  //       {children}
  //     </Slide>
  //   );
  // }

  // HideOnScroll.propTypes = {
  //   children: PropTypes.element.isRequired,
  //   window: PropTypes.func,
  // };

  return (
    <>
      {/* <TopHeader /> */}
      <Box sx={{ flexGrow: 1 }} component={"header"}>
        {/* <HideOnScroll {...props}> */}
        <AppBar position="static">
          <StyledToolbar>
            <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
              <Logo />
              {/* <MenuDrawer /> */}
            </Box>

            {isMobile ? null : <SearchBar />}

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {isMobile ? <SearchIconClick /> : null}
              {isMobile ? <ShowCartDrawer /> : null}

              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <IconButton
                  size="large"
                  aria-label="show 4 new mails"
                  color="inherit"
                >
                  <Badge badgeContent={4} color="error">
                    <MailIcon />
                  </Badge>
                </IconButton>
                <IconButton
                  size="large"
                  aria-label="show 17 new notifications"
                  color="inherit"
                >
                  <Badge badgeContent={17} color="error">
                    <NotificationsIcon />
                  </Badge>
                </IconButton>

                <ShowCartDrawer />

                <IconButton
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                  sx={{ marginLeft: "10px" }}
                >
                  {user ? (
                    <div>
                      {user.photoURL && (
                        <Avatar
                          alt={user.displayName}
                          src={user.photoURL}
                          sx={{ width: 22, height: 22, borderRadius: "50%" }}
                        />
                      )}
                    </div>
                  ) : (
                    <AccountCircle />
                  )}
                </IconButton>
              </Box>
              <Box sx={{ display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="show more"
                  aria-controls={mobileMenuId}
                  aria-haspopup="true"
                  onClick={handleMobileMenuOpen}
                  color="inherit"
                >
                  <MoreIcon />
                </IconButton>
              </Box>
            </Box>
          </StyledToolbar>
        </AppBar>
        {/* </HideOnScroll> */}

        {renderMobileMenu}
        {renderMenu}
      </Box>

      <BottomHeader />
    </>
  );
}
