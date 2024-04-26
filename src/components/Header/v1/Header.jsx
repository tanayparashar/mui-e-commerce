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
// import UserSetting from "./UserSetting";
import MenuDrawer from "../../Menu/v1/MenuDrawer";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

export default function Header() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <>
      {/* <TopHeader /> */}
      <Box sx={{ flexGrow: 1 }} component={"header"}>
        <AppBar position="static">
          <StyledToolbar>
            {/* Left  */}
            <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
              <Logo />
              {!isMobile ? null : <MenuDrawer />}
            </Box>

            {/* Center  */}
            {isMobile ? null : <SearchBar />}

            {/* Right  */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* <Box sx={{ display: { xs: "flex", gap: 8 } }}> */}
              {isMobile ? <SearchIconClick /> : null}
              {isMobile ? <ShowCartDrawer /> : null}
              {isMobile ? (
                <Box sx={{ mx: 1.3 }}>
                  <Notification />
                </Box>
              ) : null}
              {isMobile ? <UserAccount /> : null}
              {/* </Box> */}

              <Box sx={{ display: { xs: "none", md: "flex", gap: 3 } }}>
                {/* <UserSetting /> */}
                <Notification />
                <ShowCartDrawer />
                <UserAccount />
              </Box>
            </Box>
          </StyledToolbar>
        </AppBar>
      </Box>

      {/* Bottom  */}
      <BottomHeader />
    </>
  );
}
