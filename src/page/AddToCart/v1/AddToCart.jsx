import React, { useState } from "react";
import Layout from "../../../layout/GlobalLayout/Layout";
import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  Grid,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";

import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import RemoveCircleRoundedIcon from "@mui/icons-material/RemoveCircleRounded";
import EastIcon from "@mui/icons-material/East";

import { Link } from "react-router-dom";
import Bookmark from "./Bookmark";
import DeleteSingleCart from "./DeleteSingleCart";
import DeleteWholeCart from "./DeleteWholeCart";
import OrderSummery from "./OrderSummery";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function AddToCart() {
  const [count, setCount] = useState(1);
  const [selectAll, setSelectAll] = useState(false);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  const handleSelectAll = (event) => {
    setSelectAll(event.target.checked);
  };
  return (
    <Layout>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8} mt={5}>
            <Paper>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  p: 2,
                  pl: 0,
                  gap: 2,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Checkbox
                    {...label}
                    size="small"
                    checked={selectAll}
                    onChange={handleSelectAll}
                  />
                  <Typography>Select All {5}</Typography>
                </Box>
                <DeleteWholeCart />
              </Box>
            </Paper>
            <Box sx={{ mt: 2 }}>
              <Paper>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Checkbox
                      {...label}
                      size="small"
                      checked={selectAll}
                      onChange={handleSelectAll}
                    />
                    <Typography
                      component={Link}
                      to={"/store"}
                      sx={{
                        textDecoration: "none",
                        color: "inherit",
                        display: "flex",
                        alignItems: "center",
                        "&:hover": {
                          "& > svg": {
                            marginLeft: "10px",
                            transition: "margin-left 0.3s ease",
                          },
                        },
                      }}
                    >
                      Store Name
                      <EastIcon sx={{ marginLeft: "4px" }} />
                    </Typography>
                  </Box>

                  <Box>
                    <Bookmark />
                    <DeleteSingleCart />
                  </Box>
                </Box>

                <Divider />

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    justifyContent: "space-between",
                    p: 2,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                    }}
                  >
                    <img
                      src="https://static-01.daraz.com.bd/p/94363c8615aa1dc254673584d3ba9f88.jpg"
                      alt=""
                      style={{
                        height: "150px",
                        borderRadius: "5px",
                      }}
                    />

                    <Box>
                      <Typography variant={"h6"}>Product Title</Typography>
                      <Typography
                        variant={"subtitle1"}
                        fontSize={12}
                        fontWeight={"normal"}
                      >
                        No Brand, Size:Int:L, Color Family:White
                      </Typography>
                      <Typography variant={"h6"} fontSize={12}>
                        $100
                      </Typography>

                      <Box sx={{ mt: 1 }}>
                        <Paper
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
                        </Paper>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Paper>
            </Box>
            <Box sx={{ mt: 2 }}>
              <Paper>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Checkbox
                      {...label}
                      size="small"
                      checked={selectAll}
                      onChange={handleSelectAll}
                    />
                    <Typography
                      component={Link}
                      to={"/store"}
                      sx={{
                        textDecoration: "none",
                        color: "inherit",
                        display: "flex",
                        alignItems: "center",
                        "&:hover": {
                          "& > svg": {
                            marginLeft: "10px",
                            transition: "margin-left 0.3s ease",
                          },
                        },
                      }}
                    >
                      Store Name
                      <EastIcon sx={{ marginLeft: "4px" }} />
                    </Typography>
                  </Box>

                  <Box>
                    <Bookmark />
                    <DeleteSingleCart />
                  </Box>
                </Box>

                <Divider />

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    justifyContent: "space-between",
                    p: 2,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                    }}
                  >
                    <img
                      src="https://static-01.daraz.com.bd/p/3077618aa97a56a1a316e4a4fa7ac5de.jpg"
                      alt=""
                      style={{
                        height: "150px",
                        borderRadius: "5px",
                      }}
                    />

                    <Box>
                      <Typography variant={"h6"}>Product Title</Typography>
                      <Typography
                        variant={"subtitle1"}
                        fontSize={12}
                        fontWeight={"normal"}
                      >
                        No Brand, Size:Int:L, Color Family:White
                      </Typography>
                      <Typography variant={"h6"} fontSize={12}>
                        $100
                      </Typography>

                      <Box sx={{ mt: 1 }}>
                        <Paper
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
                        </Paper>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Paper>
            </Box>
            <Box sx={{ mt: 2 }}>
              <Paper>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Checkbox
                      {...label}
                      size="small"
                      checked={selectAll}
                      onChange={handleSelectAll}
                    />
                    <Typography
                      component={Link}
                      to={"/store"}
                      sx={{
                        textDecoration: "none",
                        color: "inherit",
                        display: "flex",
                        alignItems: "center",
                        "&:hover": {
                          "& > svg": {
                            marginLeft: "10px",
                            transition: "margin-left 0.3s ease",
                          },
                        },
                      }}
                    >
                      Store Name
                      <EastIcon sx={{ marginLeft: "4px" }} />
                    </Typography>
                  </Box>

                  <Box>
                    <Bookmark />
                    <DeleteSingleCart />
                  </Box>
                </Box>

                <Divider />

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    justifyContent: "space-between",
                    p: 2,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                    }}
                  >
                    <img
                      src="https://static-01.daraz.com.bd/p/3077618aa97a56a1a316e4a4fa7ac5de.jpg"
                      alt=""
                      style={{
                        height: "150px",
                        borderRadius: "5px",
                      }}
                    />

                    <Box>
                      <Typography variant={"h6"}>Product Title</Typography>
                      <Typography
                        variant={"subtitle1"}
                        fontSize={12}
                        fontWeight={"normal"}
                      >
                        No Brand, Size:Int:L, Color Family:White
                      </Typography>
                      <Typography variant={"h6"} fontSize={12}>
                        $100
                      </Typography>

                      <Box sx={{ mt: 1 }}>
                        <Paper
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
                        </Paper>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Paper>
            </Box>
          </Grid>
          <Grid item xs={12} md={4} mt={5}>
            <Paper>
              <OrderSummery />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}

export default AddToCart;
