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
} from "@mui/material";
import styled from "@emotion/styled";
import { Visibility, VisibilityOff, Google } from "@mui/icons-material";
import { useForm } from "react-hook-form";

const NeedPadding = styled(Box)`
  padding-left: 80px;
  padding-right: 80px;

  @media (max-width: 600px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;
const GoogleButton = styled(Button)`
  background-color: #fff;
  color: #757575;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 16px;
  text-transform: none;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  &:hover {
    background-color: #f1f1f1;
  }
`;

function Login() {
  const [showPassword, setShowPassword] = useState(false);
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
  };

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
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
                <Typography color={"error"}>Password is required</Typography>
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
  );
}

export default Login;
