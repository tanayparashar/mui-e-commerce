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
} from "@mui/material";
import styled from "@emotion/styled";
import { Visibility, VisibilityOff, Google } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../../../provider/AuthProvider";
import Swal from "sweetalert2";

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

  const from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    const { email, password } = data;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);

        Swal.fire({
          title: "User Login Successful.",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });

        reset(); // Reset the form after successful submission

        // Navigate to the desired location
        navigate(from, { replace: true });
      })
      .catch((error) => {
        if (error.code === "auth/wrong-password") {
          alert("Wrong password");
        } else {
          console.log("Firebase Error:", error.message);
          // Display a generic error message or handle other Firebase errors
        }
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
