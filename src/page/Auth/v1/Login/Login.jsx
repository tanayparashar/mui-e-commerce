import React, { useContext, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  InputAdornment,
  IconButton,
  useTheme,
  Container,
  Snackbar,
  Alert,
} from "@mui/material";
import styled from "@emotion/styled";
import { Visibility, VisibilityOff, Google } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../../../contexts/AuthProvider";

const NeedPadding = styled(Box)`
  padding-left: 80px;
  padding-right: 80px;

  @media (max-width: 600px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertSeverity, setAlertSeverity] = useState("success");
  const { signIn } = useContext(AuthContext);
  const theme = useTheme();

  const navigate = useNavigate();
  const location = useLocation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleCloseAlert = () => {
    setOpenAlert(false);
  };

  const from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    const { email, password } = data;

    signIn(email, password)
      .then((result) => {
        // const user = result.user;
        // console.log(user);
        setOpenAlert(true);
        setAlertSeverity("success");
        setAlertMessage("User Login Successful.");
        reset();
        // Navigate to the desired location
        setTimeout(() => {
          navigate(from, { replace: true });
        }, 200);
      })
      .catch((error) => {
        let message = "";

        if (error.code === "auth/wrong-password") {
          message = "Wrong password";
        } else if (error.code === "auth/user-not-found") {
          message = "User not found";
        } else {
          console.log("Firebase Error:", error.message);
          message = "An error occurred. Please try again later.";
        }

        setOpenAlert(true);
        setAlertSeverity("error");
        setAlertMessage(message);
      });
  };

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <>
      <Helmet>
        <title> 👤 Login | Online Aid </title>
      </Helmet>

      <Snackbar
        open={openAlert}
        autoHideDuration={6000}
        onClose={handleCloseAlert}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert
          elevation={6}
          variant="filled"
          onClose={handleCloseAlert}
          severity={alertSeverity}
        >
          {alertMessage}
        </Alert>
      </Snackbar>

      <Container>
        <Grid
          container
          spacing={2}
          justifyContent="center"
          alignItems="center"
          py={8}
        >
          <Grid item xs={12} sm={6}>
            <img
              src={`https://i.ibb.co/WPJFwCC/illustration-dashboard.png`}
              alt=""
              style={{ width: "100%", height: "auto" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <NeedPadding marginTop={4}>
              <Box>
                <Typography variant="h5" mb={2} sx={{ fontWeight: "bold" }}>
                  Sign in to my App
                </Typography>
                <Typography
                  variant="subtitle1"
                  display="flex"
                  mb={5}
                  sx={{ gap: "10px" }}
                >
                  New user?
                  <Box
                    component={Link}
                    to="/register"
                    sx={{
                      textDecoration: "none",
                      color: theme.palette.primary.main,
                      fontWeight: "bold",
                    }}
                  >
                    Create an account
                  </Box>
                </Typography>
              </Box>
              <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
                <Box mb={3}>
                  <TextField
                    label="Email address"
                    type="email"
                    fullWidth
                    {...register("email", { required: true })}
                  />

                  {errors.email && (
                    <Typography color={"error"}>Email is required</Typography>
                  )}
                </Box>
                <Box mb={3}>
                  <TextField
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    fullWidth
                    value="123456Pp@"
                    {...register("password", { required: true })}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={handleTogglePassword}>
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />

                  {errors.password && (
                    <Typography color={"error"}>
                      Password is required
                    </Typography>
                  )}
                </Box>
                <Typography
                  variant="subtitle2"
                  mt={3}
                  display="flex"
                  justifyContent="flex-end"
                >
                  <Box
                    component={Link}
                    to="/forgot"
                    sx={{
                      color: theme.palette.secondary.main,
                      fontWeight: "bold",
                    }}
                  >
                    Forgot password?
                  </Box>
                </Typography>
                <Box mt={2}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ padding: "16px" }}
                  >
                    Login
                  </Button>
                </Box>
              </form>
            </NeedPadding>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Login;