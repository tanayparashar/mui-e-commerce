import React from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Paper,
  Typography,
  styled,
} from "@mui/material";
import { Link } from "react-router-dom";
import GetYear from "./GetYear";
import SocialNetwork from "./SocialNetwork";

const AnchorControl = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.common.black,
  fontWeight: "500",
  padding: 5,
  display: "block",
}));

function Footer() {
  return (
    <Box component={"footer"}>
      <Paper sx={{ pt: 10, mt: 10 }}>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} md={3}>
              <Typography variant="h6">Section title</Typography>
              <Divider sx={{ my: 2 }} />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <AnchorControl to={"/introduction"}>
                  Documentation
                </AnchorControl>
                <AnchorControl to={"/faqs"}>Faq</AnchorControl>
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
                <AnchorControl to={"/success"}>success</AnchorControl>
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
                <AnchorControl to={"/faqs"}>FAQ</AnchorControl>
                <AnchorControl to={"/emptycart"}>Empty Order</AnchorControl>
                <AnchorControl to={"/page"}>Online blog</AnchorControl>

                {/* Payment  */}
                <Paper>
                  <Box sx={{ p: 1 }}>
                    <Box sx={{ display: "flex", gap: 0.5 }}>
                      <Button>
                        <img
                          src="https://res.cloudinary.com/onlineaid/image/upload/v1656973670/theme.0.0.1/apple_rvciye.svg"
                          alt="Apple store"
                        />
                      </Button>
                      <Button>
                        <img
                          src="https://res.cloudinary.com/onlineaid/image/upload/v1656973670/theme.0.0.1/google_juramb.svg"
                          alt="Google play"
                        />
                      </Button>
                    </Box>

                    <Button>
                      <Box
                        component={"img"}
                        src="https://www.pngitem.com/pimgs/m/179-1792550_payment-methods-images-png-transparent-png.png"
                        alt=""
                        sx={{
                          width: "100%",
                          borderRadius: "2px",
                        }}
                      />
                    </Button>
                  </Box>
                </Paper>

                <SocialNetwork />
              </Box>
            </Grid>
          </Grid>

          <Divider sx={{ mt: 5 }} />

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
              py: 5,
              "@media (min-width: 600px)": {
                flexDirection: "row",
                // gap: 3,
                // justifyContent: "center",
              },
            }}
          >
            <Box sx={{ display: "flex", gap: 1 }}>
              <Typography>United kingdom</Typography>
              <Typography>English</Typography>
              <Typography>Pound</Typography>
            </Box>
            <GetYear />

            <Box sx={{ display: "flex", gap: 1 }}>
              <AnchorControl to="/term-of-use">Terms of Use</AnchorControl>
              <AnchorControl to="/privacy">Privacy</AnchorControl>
              <AnchorControl to="/ads">Interest-based ads</AnchorControl>
            </Box>
          </Box>
        </Container>
      </Paper>
    </Box>
  );
}

export default Footer;
