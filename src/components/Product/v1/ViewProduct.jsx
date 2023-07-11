import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const items = [
  {
    image:
      "https://s.alicdn.com/@sc04/kf/Hd927703e6d4941aba4652c6cad1a5ce0M.jpg_480x480.jpg",
  },
  {
    image:
      "https://s.alicdn.com/@sc04/kf/Ha49943145d404c1e803b6da67c7d61cf9.jpg_480x480.jpg",
  },
  {
    image:
      "https://s.alicdn.com/@sc04/kf/He7bc700fa4874b59b9a9bd25985338afx.jpeg_480x480.jpg",
  },
  {
    image:
      "https://s.alicdn.com/@sc04/kf/H6f3716bbb2724bbe824a3d163389b3dfG.jpg_480x480.jpg",
  },
];

// https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_BOTTOMS_2x._SY232_CB624172947_.jpg

function ViewProduct() {
  return (
    <Box sx={{ mt: 5 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 2 }} elevation={10}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: 2,
              }}
            >
              <Typography variant="h6">Shop deals in Fashion</Typography>

              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: 2,
                }}
              >
                {items.map((catalog) => (
                  <Box
                    component={Link}
                    to="somewhere"
                    sx={{ textDecoration: "none", color: "inherit" }}
                  >
                    <img
                      src={catalog.image}
                      alt="Product Image"
                      style={{
                        width: "100%",
                        height: "150px",
                        objectFit: "cover",
                        borderRadius: "5px",
                      }}
                    />
                    <Typography>Title here</Typography>
                  </Box>
                ))}
              </Box>

              <Box>
                <Link component={Link} to="/seemore">
                  See More
                </Link>
              </Box>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 2 }} elevation={10}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: 2,
              }}
            >
              <Typography variant="h6">Shop deals in Fashion</Typography>

              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: 2,
                }}
              >
                {items.map((catalog) => (
                  <Box
                    component={Link}
                    to="somewhere"
                    sx={{ textDecoration: "none", color: "inherit" }}
                  >
                    <img
                      src={catalog.image}
                      alt="Product Image"
                      style={{
                        width: "100%",
                        height: "150px",
                        objectFit: "cover",
                        borderRadius: "5px",
                      }}
                    />
                    <Typography>Title here</Typography>
                  </Box>
                ))}
              </Box>

              <Box>
                <Link component={Link} to="/seemore">
                  See More
                </Link>
              </Box>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 2 }} elevation={10}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: 2,
              }}
            >
              <Typography variant="h6">Shop deals in Fashion </Typography>

              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: 2,
                }}
              >
                {items.map((catalog) => (
                  <Box
                    component={Link}
                    to="somewhere"
                    sx={{ textDecoration: "none", color: "inherit" }}
                  >
                    <img
                      src={catalog.image}
                      alt="Product Image"
                      style={{
                        width: "100%",
                        height: "150px",
                        objectFit: "cover",
                        borderRadius: "5px",
                      }}
                    />
                    <Typography>Title here</Typography>
                  </Box>
                ))}
              </Box>

              <Box>
                <Link component={Link} to="/seemore">
                  See More
                </Link>
              </Box>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 2 }} elevation={5}>
            <Typography variant="h6" mb={2}>
              Shop deals in Fashion
            </Typography>
            <Box>
              <Box>
                <img
                  src="https://s.alicdn.com/@sc04/kf/Hd927703e6d4941aba4652c6cad1a5ce0M.jpg_480x480.jpg"
                  alt=""
                  style={{
                    width: "100%",
                    height: "362px",
                    objectFit: "cover",
                    borderRadius: "5px",
                  }}
                />
                {/* <Typography>Title here</Typography> */}
              </Box>
            </Box>
            <Box sx={{ pt: 3 }}>
              <Link component={Link} to="/seemore">
                See More
              </Link>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ViewProduct;
