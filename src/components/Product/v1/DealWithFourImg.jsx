import React from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import LazyLoadImg from "../../Lazyload/LazyLoadImg";

export default function DealWithFourImg({
  items,
  SectionTitle,
  ProductTitle,
  RouteLink,
  BtnText,
}) {
  return (
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
          <Typography variant="h6">{SectionTitle}</Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 2,
            }}
          >
            {items.map((catalog, index) => (
              <Box
                key={index}
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

                {/* <Box
                  component={LazyLoadImg}
                  image={{
                    alt: "Image alt text",
                    // height: 300, // Replace with the desired height
                    // width: 300, // Replace with the desired width
                    style: {
                      width: "150px",
                      height: "150px",
                      objectFit: "cover",
                      borderRadius: "5px",
                    },
                    src: catalog.image, // Replace with the image URL
                  }}
                /> */}

                <Typography variant="caption" fontWeight={"bold"}>
                  {ProductTitle}
                </Typography>
              </Box>
            ))}
          </Box>

          <Box>
            <Link component={Link} to={`/${RouteLink}`}>
              {BtnText}
            </Link>
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
}
