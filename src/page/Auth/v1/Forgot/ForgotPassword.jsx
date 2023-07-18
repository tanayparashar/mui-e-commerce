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

function ForgotPassword() {
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
    <Container>
      <StyledContent sx={{ textAlign: "center", alignItems: "center" }}>
        <Paper>
          <Box p={2}>
            <Typography variant="h3">Forgot your password?</Typography>
            <Typography sx={{ color: "text.secondary", mt: 2, mb: 3 }}>
              Please enter the email address associated with your account and We
              will email you a link to reset your password.
            </Typography>
            <form onSubmit={handleSubmit}>
              <FormControl sx={{ width: "100%" }}>
                <TextField
                  type="email"
                  id="email"
                  label="Email Address"
                  value={email}
                  onChange={handleEmailChange}
                  variant="outlined"
                  InputLabelProps={{
                    style: {
                      fontSize: 14,
                      marginTop: "3px",
                    },
                  }}
                />
                {error && (
                  <Typography
                    color="error"
                    sx={{ textAlign: "left", fontSize: 12 }}
                  >
                    {error}
                  </Typography>
                )}
                <Box mt={3}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size={"large"}
                    disabled={loading} // Disable the button when loading is true
                    sx={{ width: "100%" }}
                  >
                    {loading ? <CircularProgress size={18} /> : "Send Email"}
                  </Button>
                </Box>
              </FormControl>
            </form>

            <Box sx={{ mt: 3 }}>
              <Button
              startIcon={<DeleteIcon />
                component={Link}
                to={"/login"}
                sx={{
                  color: theme.palette.secondary.main,
                  fontWeight: "bold",
                }}
              >
                Return to sign in
              </Button>
            </Box>
          </Box>
        </Paper>
      </StyledContent>
    </Container>
  );
}

export default ForgotPassword;
