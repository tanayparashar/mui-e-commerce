import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  FormControl,
  TextField,
  Typography,
  styled,
} from "@mui/material";
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

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const [loading, setLoading] = useState(false);

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
    <Container>
      <StyledContent sx={{ textAlign: "center", alignItems: "center" }}>
        <Box>
          <Typography variant="h3">Forgot your password?</Typography>
          <Typography sx={{ color: "text.secondary", mt: 2, mb: 3 }}>
            Please enter the email address associated with your account and We
            will email you a link to reset your password.
          </Typography>
          <FormControl onSubmit={handleSubmit}>
            <TextField
              type="email"
              id="email"
              label="Email Address"
              value={email}
              onChange={handleEmailChange}
              variant="outlined"
              sx={{ mb: 3, width: "480px" }}
            />
            {error && (
              <Typography color="error" sx={{ mt: 1 }}>
                {error}
              </Typography>
            )}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size={"large"}
              disabled={loading} // Disable the button when loading is true
            >
              {loading ? <CircularProgress size={24} /> : "Send Email"}
            </Button>
            {error && <Typography color="error">{error}</Typography>}
          </FormControl>

          <Box sx={{ mt: 3 }}>
            <Button component={Link} to={"/login"}>
              Return to sign in
            </Button>
          </Box>
        </Box>
      </StyledContent>
    </Container>
  );
}

export default ForgotPassword;
