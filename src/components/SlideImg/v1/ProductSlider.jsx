import {
  Box,
  Grid,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import "./arrow.css";
import SlideShow from "./SlideShow";
import { Link } from "react-router-dom";

export const products = [
  {
    id: 1,
    image: "https://wallpapercave.com/wp/wp3537545.jpg",
    price: "$10.99",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    price: "$12.99",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    price: "$8.99",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    price: "$14.99",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    price: "$9.99",
  },
];

function ProductSlider() {
  const theme = useTheme();
  const isSmallDevice = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box sx={{ mt: 5 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item xs={4} sm={4} md={4}>
          <Box
            sx={{
              bgcolor: theme.palette.grey["200"],
              borderRadius: 1,
              p: 2,
              boxShadow: 2,
            }}
          >
            <Typography variant="h6" sx={{ mb: 1 }}>
              New arrivals
            </Typography>
            {isSmallDevice ? (
              <Box
                sx={{
                  bgcolor: theme.palette.grey["200"],
                  borderRadius: 1,
                }}
              >
                <SlideShow products={products} />
              </Box>
            ) : (
              <Box
                sx={{
                  bgcolor: theme.palette.grey["200"],
                  borderRadius: 1,
                  display: "flex",
                  flexDirection: "row",
                  gap: 2,
                }}
              >
                {products.slice(0, 3).map((singleItem) => (
                  <Box key={singleItem.id} sx={{ textAlign: "center" }}>
                    <Link
                      to="/lol"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <img
                        src={singleItem.image}
                        alt=""
                        style={{
                          display: "block",
                          height: "100px",
                          width: "100px",
                          borderRadius: "4px",
                        }}
                      />
                      <Typography component={"div"} sx={{ fontWeight: 700 }}>
                        {singleItem.price}
                      </Typography>
                      <Typography variant="caption" component={"div"}>
                        10 pairs
                      </Typography>
                    </Link>
                  </Box>
                ))}
              </Box>
            )}
          </Box>
        </Grid>
        <Grid item xs={4} sm={4} md={4}>
          <Box
            sx={{
              bgcolor: theme.palette.grey["200"],
              borderRadius: 1,
              p: 2,
              boxShadow: 2,
            }}
          >
            <Typography variant="h6" sx={{ mb: 1 }}>
              New arrivals
            </Typography>
            {isSmallDevice ? (
              <Box
                sx={{
                  bgcolor: theme.palette.grey["200"],
                  borderRadius: 1,
                }}
              >
                <SlideShow products={products} />
              </Box>
            ) : (
              <Box
                sx={{
                  bgcolor: theme.palette.grey["200"],
                  borderRadius: 1,
                  display: "flex",
                  flexDirection: "row",
                  gap: 2,
                }}
              >
                {products.slice(0, 3).map((singleItem) => (
                  <Box key={singleItem.id} sx={{ textAlign: "center" }}>
                    <Link
                      to="/lol"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <img
                        src={singleItem.image}
                        alt=""
                        style={{
                          display: "block",
                          height: "100px",
                          width: "100px",
                          borderRadius: "4px",
                        }}
                      />
                      <Typography component={"div"} sx={{ fontWeight: 700 }}>
                        {singleItem.price}
                      </Typography>
                      <Typography variant="caption" component={"div"}>
                        10 pairs
                      </Typography>
                    </Link>
                  </Box>
                ))}
              </Box>
            )}
          </Box>
        </Grid>
        <Grid item xs={4} sm={4} md={4}>
          <Box
            sx={{
              bgcolor: theme.palette.grey["200"],
              borderRadius: 1,
              p: 2,
              boxShadow: 2,
            }}
          >
            <Typography variant="h6" sx={{ mb: 1 }}>
              New arrivals
            </Typography>
            {isSmallDevice ? (
              <Box
                sx={{
                  bgcolor: theme.palette.grey["200"],
                  borderRadius: 1,
                }}
              >
                <SlideShow products={products} />
              </Box>
            ) : (
              <Box
                sx={{
                  bgcolor: theme.palette.grey["200"],
                  borderRadius: 1,
                  display: "flex",
                  flexDirection: "row",
                  gap: 2,
                }}
              >
                {products.slice(0, 3).map((singleItem) => (
                  <Box key={singleItem.id} sx={{ textAlign: "center" }}>
                    <Link
                      to="/lol"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <img
                        src={singleItem.image}
                        alt=""
                        style={{
                          display: "block",
                          height: "100px",
                          width: "100px",
                          borderRadius: "4px",
                        }}
                      />
                      <Typography component={"div"} sx={{ fontWeight: 700 }}>
                        {singleItem.price}
                      </Typography>
                      <Typography variant="caption" component={"div"}>
                        10 pairs
                      </Typography>
                    </Link>
                  </Box>
                ))}
              </Box>
            )}
          </Box>
        </Grid>
        <Grid item xs={4} sm={4} md={4}>
          <Box
            sx={{
              bgcolor: theme.palette.grey["200"],
              borderRadius: 1,
              p: 2,
              boxShadow: 2,
            }}
          >
            <Typography variant="h6" sx={{ mb: 1 }}>
              New arrivals
            </Typography>
            {isSmallDevice ? (
              <Box
                sx={{
                  bgcolor: theme.palette.grey["200"],
                  borderRadius: 1,
                }}
              >
                <SlideShow products={products} />
              </Box>
            ) : (
              <Box
                sx={{
                  bgcolor: theme.palette.grey["200"],
                  borderRadius: 1,
                  display: "flex",
                  flexDirection: "row",
                  gap: 2,
                }}
              >
                {products.slice(0, 3).map((singleItem) => (
                  <Box key={singleItem.id} sx={{ textAlign: "center" }}>
                    <Link
                      to="/lol"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <img
                        src={singleItem.image}
                        alt=""
                        style={{
                          display: "block",
                          height: "100px",
                          width: "100px",
                          borderRadius: "4px",
                        }}
                      />
                      <Typography component={"div"} sx={{ fontWeight: 700 }}>
                        {singleItem.price}
                      </Typography>
                      <Typography variant="caption" component={"div"}>
                        10 pairs
                      </Typography>
                    </Link>
                  </Box>
                ))}
              </Box>
            )}
          </Box>
        </Grid>
        <Grid item xs={4} sm={4} md={4}>
          <Box
            sx={{
              bgcolor: theme.palette.grey["200"],
              borderRadius: 1,
              p: 2,
              boxShadow: 2,
            }}
          >
            <Typography variant="h6" sx={{ mb: 1 }}>
              New arrivals
            </Typography>
            {isSmallDevice ? (
              <Box
                sx={{
                  bgcolor: theme.palette.grey["200"],
                  borderRadius: 1,
                }}
              >
                <SlideShow products={products} />
              </Box>
            ) : (
              <Box
                sx={{
                  bgcolor: theme.palette.grey["200"],
                  borderRadius: 1,
                  display: "flex",
                  flexDirection: "row",
                  gap: 2,
                }}
              >
                {products.slice(0, 3).map((singleItem) => (
                  <Box key={singleItem.id} sx={{ textAlign: "center" }}>
                    <Link
                      to="/lol"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <img
                        src={singleItem.image}
                        alt=""
                        style={{
                          display: "block",
                          height: "100px",
                          width: "100px",
                          borderRadius: "4px",
                        }}
                      />
                      <Typography component={"div"} sx={{ fontWeight: 700 }}>
                        {singleItem.price}
                      </Typography>
                      <Typography variant="caption" component={"div"}>
                        10 pairs
                      </Typography>
                    </Link>
                  </Box>
                ))}
              </Box>
            )}
          </Box>
        </Grid>
        <Grid item xs={4} sm={4} md={4}>
          <Box
            sx={{
              bgcolor: theme.palette.grey["200"],
              borderRadius: 1,
              p: 2,
              boxShadow: 2,
            }}
          >
            <Typography variant="h6" sx={{ mb: 1 }}>
              New arrivals
            </Typography>
            {isSmallDevice ? (
              <Box
                sx={{
                  bgcolor: theme.palette.grey["200"],
                  borderRadius: 1,
                }}
              >
                <SlideShow products={products} />
              </Box>
            ) : (
              <Box
                sx={{
                  bgcolor: theme.palette.grey["200"],
                  borderRadius: 1,
                  display: "flex",
                  flexDirection: "row",
                  gap: 2,
                }}
              >
                {products.slice(0, 3).map((singleItem) => (
                  <Box key={singleItem.id} sx={{ textAlign: "center" }}>
                    <Link
                      to="/lol"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <img
                        src={singleItem.image}
                        alt=""
                        style={{
                          display: "block",
                          height: "100px",
                          width: "100px",
                          borderRadius: "4px",
                        }}
                      />
                      <Typography component={"div"} sx={{ fontWeight: 700 }}>
                        {singleItem.price}
                      </Typography>
                      <Typography variant="caption" component={"div"}>
                        10 pairs
                      </Typography>
                    </Link>
                  </Box>
                ))}
              </Box>
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ProductSlider;
