import React, { useState } from "react";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  FormControl,
  Paper,
  TextField,
  Typography,
  styled,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import YearCounter from "../../../components/YearCounter/YearCounter";
import EmailSubscription from "../../../components/EmailSubscription/EmailSubscription";

// ----------------------------------------------------------------------

const StyledContent = styled("div")(({ theme }) => ({
  maxWidth: 400,
  margin: "auto",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

function ComingSoon() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const [loading, setLoading] = useState(false);
  const theme = useTheme();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError(""); // Clear any previous error message
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle form submission and reset password here
    // For this example, we'll just show an error message if the email is empty
    if (!email) {
      setError("Please enter your email.");
    } else {
      setError(""); // Clear the error message if email is provided successfully
      setLoading(true); // Set loading state to true
      // Simulate form submission or API call with a setTimeout (replace this with your actual logic)
      setTimeout(() => {
        setLoading(false); // Set loading state back to false after 2 seconds (simulating success)
        console.log("Form submitted with email:", email);
      }, 2000);
    }
  };

  return (
    <>
      <Helmet>
        <title>💡Coming Soon</title>
      </Helmet>
      <Container>
        <StyledContent sx={{ textAlign: "center", alignItems: "center" }}>
          <Typography variant="h3" paragraph>
            Coming Soon!
          </Typography>

          <Typography sx={{ color: "text.secondary" }}>
            We are currently working hard on this page!
          </Typography>

          <Box
            component="img"
            src="/illustration_404.svg"
            sx={{ height: 260, mx: "auto", my: { xs: 5, sm: 10 } }}
          />

          <YearCounter />

          <EmailSubscription />
        </StyledContent>
      </Container>
    </>
  );
}

export default ComingSoon;
