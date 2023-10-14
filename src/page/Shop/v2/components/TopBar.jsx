import React, { useEffect, useState } from "react";

import ViewModuleIcon from "@mui/icons-material/ViewModule";
import ViewListIcon from "@mui/icons-material/ViewList";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import {
  Box,
  Drawer,
  IconButton,
  Paper,
  Stack,
  Toolbar,
  useMediaQuery,
} from "@mui/material";

export default function TopBar() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const [viewMode, setViewMode] = useState(
    localStorage.getItem("viewMode") || "grid"
  );

  useEffect(() => {
    localStorage.setItem("viewMode", viewMode);
  }, [viewMode]);

  const handleViewModeChange = () => {
    setViewMode((prevMode) => (prevMode === "grid" ? "flat" : "grid"));
  };

  return (
    <Paper>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 3,
          py: 1,
          px: 1,
        }}
      >
        <Stack direction="row" spacing={1} alignItems="center">
          {isMobile && (
            <>
              <Toolbar sx={{ p: 0, ml: 2 }}>
                <IconButton edge="start" color="inherit" onClick={toggleNav}>
                  <MenuOpenIcon />
                </IconButton>
              </Toolbar>
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
                <Box sx={{ p: 2 }}>
                  <Sidebar />
                </Box>
              </Drawer>
            </>
          )}
          <IconButton
            onClick={handleViewModeChange}
            color={viewMode === "grid" ? "primary" : "default"}
          >
            {viewMode === "grid" ? (
              <ViewModuleIcon />
            ) : (
              <ViewListIcon color="primary" />
            )}
          </IconButton>
        </Stack>

        {/* Rendering the SortingSelect component */}
        {/* <SortingSelect productData={productData} onSort={handleSortingChange} /> */}
      </Box>
    </Paper>
  );
}
