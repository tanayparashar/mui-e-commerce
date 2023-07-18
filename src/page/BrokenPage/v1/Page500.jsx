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

function Page500() {
  return (
    <>
      <Helmet>
        <title> 400 Internal Server Error </title>
      </Helmet>

      <Container>
        <StyledContent sx={{ textAlign: "center", alignItems: "center" }}>
          <Typography variant="h3" paragraph>
            500 Internal Server Error
          </Typography>

          <Typography sx={{ color: "text.secondary" }}>
            There was an error, please try again later.
          </Typography>

          <Box
            component="img"
            src="/illustration_404.svg"
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

export default Page500;
