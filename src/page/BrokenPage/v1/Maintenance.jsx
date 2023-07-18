import React from "react";
import { Box, Button, Container, Typography, styled } from "@mui/material";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

// ----------------------------------------------------------------------

const StyledContent = styled("div")(({ theme }) => ({
  maxWidth: 480,
  margin: "auto",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

function Maintenance() {
  return (
    <>
      <Helmet>
        <title> Under Maintenance </title>
      </Helmet>

      <Container>
        <StyledContent sx={{ textAlign: "center", alignItems: "center" }}>
          <Typography variant="h3" paragraph>
            Website Currently Under Maintenance
          </Typography>

          <Typography sx={{ color: "text.secondary" }}>
            We are currently working hard on this page!
          </Typography>

          <Box
            component="img"
            src="https://5.imimg.com/data5/KW/XI/MY-5514661/under-maintenance-sign-250x250.jpg"
            sx={{ height: 260, mx: "auto", my: { xs: 5, sm: 10 } }}
          />

          <Button to="/" size="large" variant="contained" component={Link}>
            Go to Home
          </Button>
        </StyledContent>
      </Container>
    </>
  );
}

export default Maintenance;
