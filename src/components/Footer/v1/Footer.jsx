import React from "react";
import {
  Box,
  Container,
  Divider,
  Grid,
  Paper,
  Typography,
  styled,
} from "@mui/material";
import { Link } from "react-router-dom";

const AnchorControl = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.common.black,
  fontWeight: "500",
  padding: 5,
  display: "block",
}));

function Footer() {
  return (
    <Paper sx={{ py: 10, mt: 10 }}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <Typography variant="h6">Section title</Typography>
            <Divider sx={{ my: 2 }} />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <AnchorControl to={"/page"}>Gift cards</AnchorControl>
              <AnchorControl to={"/page"}>Sitemap</AnchorControl>
              <AnchorControl to={"/page"}>Online blog</AnchorControl>
              <AnchorControl to={"/page"}>Online Aid UK</AnchorControl>
              <AnchorControl to={"/page"}>Online Aid DE</AnchorControl>
              <AnchorControl to={"/page"}>Online Aid USA</AnchorControl>
              <AnchorControl to={"/page"}>Online Aid CA</AnchorControl>
              <AnchorControl to={"/page"}>Online Aid AUS</AnchorControl>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h6">Section title</Typography>
            <Divider sx={{ my: 2 }} />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <AnchorControl to={"/page"}>Gift cards</AnchorControl>
              <AnchorControl to={"/page"}>Sitemap</AnchorControl>
              <AnchorControl to={"/page"}>Online blog</AnchorControl>
              <AnchorControl to={"/page"}>Online Aid UK</AnchorControl>
              <AnchorControl to={"/page"}>Online Aid DE</AnchorControl>
              <AnchorControl to={"/page"}>Online Aid USA</AnchorControl>
              <AnchorControl to={"/page"}>Online Aid CA</AnchorControl>
              <AnchorControl to={"/page"}>Online Aid AUS</AnchorControl>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h6">Section title</Typography>
            <Divider sx={{ my: 2 }} />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <AnchorControl to={"/page"}>Gift cards</AnchorControl>
              <AnchorControl to={"/page"}>Sitemap</AnchorControl>
              <AnchorControl to={"/page"}>Online blog</AnchorControl>
              <AnchorControl to={"/page"}>Online Aid UK</AnchorControl>
              <AnchorControl to={"/page"}>Online Aid DE</AnchorControl>
              <AnchorControl to={"/page"}>Online Aid USA</AnchorControl>
              <AnchorControl to={"/page"}>Online Aid CA</AnchorControl>
              <AnchorControl to={"/page"}>Online Aid AUS</AnchorControl>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h6">Section title</Typography>
            <Divider sx={{ my: 2 }} />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <AnchorControl to={"/page"}>Gift cards</AnchorControl>
              <AnchorControl to={"/page"}>Sitemap</AnchorControl>
              <AnchorControl to={"/page"}>Online blog</AnchorControl>

              {/* Payment  */}
              <Paper elevation={8}>
                <Box sx={{ p: 1 }}>
                  <Box sx={{ display: "flex", gap: 2 }}>
                    <img
                      src="https://res.cloudinary.com/onlineaid/image/upload/v1656973670/theme.0.0.1/apple_rvciye.svg"
                      alt=""
                      style={{ width: "100px" }}
                    />
                    <img
                      src="https://res.cloudinary.com/onlineaid/image/upload/v1656973670/theme.0.0.1/google_juramb.svg"
                      alt=""
                      style={{ width: "100px" }}
                    />
                  </Box>

                  <Box
                    component={"img"}
                    src="https://res.cloudinary.com/onlineaid/image/upload/v1656973670/theme.0.0.1/payment-logo_rlpqrt.png"
                    alt=""
                    sx={{
                      width: "100px",
                      mt: 1,
                    }}
                  />
                </Box>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
}

export default Footer;
