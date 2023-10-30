import * as React from "react";
import { Box, Toolbar, AppBar, useMediaQuery } from "@mui/material";

import styled from "@emotion/styled";

import Logo from "../../Logo/Logo";
import SearchIconClick from "../../Search/SearchIcon";
import SearchBar from "../../Search/v1/SearchBar";
import ShowCartDrawer from "./ShowCartDrawer";
import BottomHeader from "./BottomHeader";
import UserAccount from "./UserAccount";
import Notification from "./Notification";
import UserSetting from "./UserSetting";
import MenuDrawer from "../../Menu/v1/MenuDrawer";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: theme.palette.secondary.main,
}));

export default function Header() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <>
      {/* <TopHeader /> */}
      <Box sx={{ flexGrow: 1 }} component={"header"}>
        <AppBar position="static">
          <StyledToolbar>
            <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
              <Logo />
              {!isMobile ? null : <MenuDrawer />}
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
              {isMobile ? <Notification /> : null}
              {isMobile ? <UserAccount /> : null}

              <Box sx={{ display: { xs: "none", md: "flex", gap: 1 } }}>
                <UserSetting />
                <Notification />
                <ShowCartDrawer />
                <UserAccount />
              </Box>
            </Box>
          </StyledToolbar>
        </AppBar>
      </Box>

      <BottomHeader />
    </>
  );
}
