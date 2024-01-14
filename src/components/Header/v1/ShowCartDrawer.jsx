import React, { useState } from "react";
import {
  Box,
  Drawer,
  Toolbar,
  Typography,
  Paper,
  IconButton,
  Button,
  Divider,
  Grid,
} from "@mui/material";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import RemoveCircleRoundedIcon from "@mui/icons-material/RemoveCircleRounded";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import CartIcon from "../../Cart/CartIcon";

import { Link } from "react-router-dom";
import DeleteSingleCart from "../../../page/AddToCart/v1/DeleteSingleCart";
const NAV_WIDTH = 240; // Set the width of the nav drawer

function ShowCartDrawer() {
  const [openNav, setOpenNav] = useState(false);
  const [count, setCount] = useState(1);
  const toggleNav = () => {
    setOpenNav((prevOpen) => !prevOpen);
  };

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };
  return (
    <Box sx={{ position: "relative" }}>
      <CartIcon badgeCount={14} onClick={toggleNav} />

      <Drawer
        open={openNav}
        anchor="right"
        onClose={() => setOpenNav(false)}
        ModalProps={{
          keepMounted: true,
        }}
        PaperProps={{
          sx: { width: NAV_WIDTH },
        }}
      >
        <Box sx={{ p: 0.5 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h6" p={1}>
              Your cart
            </Typography>

            <IconButton variant="contained" component={Link} to="/addtocart">
              <KeyboardDoubleArrowRightIcon />
            </IconButton>
          </Box>

          <Divider sx={{ mb: 1 }} />

          <Grid container spacing={0.5}>
            <Grid item xs={6}>
              <Paper sx={{ p: 1 }}>
                <Box sx={{ position: "relative" }}>
                  <img
                    src="https://static-01.daraz.com.bd/p/94363c8615aa1dc254673584d3ba9f88.jpg"
                    alt=""
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "cover",
                      borderRadius: "5px",
                      margin: "auto",
                    }}
                  />

                  <Box
                    sx={{
                      mt: 1,
                      display: "flex",
                      gap: 2,
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 0.5,
                        width: "100px",
                      }}
                    >
                      <IconButton onClick={handleDecrement}>
                        <RemoveCircleRoundedIcon />
                      </IconButton>
                      <Typography>{count}</Typography>
                      <IconButton onClick={handleIncrement}>
                        <AddCircleRoundedIcon />
                      </IconButton>
                    </Box>
                  </Box>

                  <Paper
                    sx={{
                      position: "absolute",
                      top: "-5%",
                      right: "-8%",
                      borderRadius: "50px",
                    }}
                  >
                    <DeleteSingleCart color={"error"} />
                  </Paper>
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper sx={{ p: 1 }}>
                <Box sx={{ position: "relative" }}>
                  <img
                    src="https://static-01.daraz.com.bd/p/94363c8615aa1dc254673584d3ba9f88.jpg"
                    alt=""
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "cover",
                      borderRadius: "5px",
                      margin: "auto",
                    }}
                  />

                  <Box
                    sx={{
                      mt: 1,
                      display: "flex",
                      gap: 2,
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 0.5,
                        width: "100px",
                      }}
                    >
                      <IconButton onClick={handleDecrement}>
                        <RemoveCircleRoundedIcon />
                      </IconButton>
                      <Typography>{count}</Typography>
                      <IconButton onClick={handleIncrement}>
                        <AddCircleRoundedIcon />
                      </IconButton>
                    </Box>
                  </Box>

                  <Paper
                    sx={{
                      position: "absolute",
                      top: "-5%",
                      right: "-8%",
                      borderRadius: "50px",
                    }}
                  >
                    <DeleteSingleCart color={"error"} />
                  </Paper>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Box>

        {/* Button sticky */}
        <Box sx={{ position: "relative" }}>
          <Box
            variant="h6"
            component="div"
            sx={{
              // display: "block",
              width: "100%",
              textAlign: "center",
              p: 1,
              position: "sticky",
              left: 0,
              bottom: "0%",
              // background: "#f5f5f5",
            }}
          >
            <Button
              component={Link}
              to="/addtocart"
              variant="contained"
              size="small"
              sx={{ width: "100%" }}
            >
              Go to cart page
            </Button>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
}

export default ShowCartDrawer;
