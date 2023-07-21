import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
import { AuthContext } from "../../../../provider/AuthProvider";

import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import CustomDialog from "./CustomDialog";
import CustomWarning from "./CustomWarning";

const NeedPadding = styled(Box)`
  padding-left: 80px;
  padding-right: 80px;

  @media (max-width: 600px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

const img_hosting_token = import.meta.env.VITE_IMG_UPLOAD_API;

function Register() {
  const [confirmPassword, setConfirmPassword] = useState("123456Pp@");
  const [showPassword, setShowPassword] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [openWarning, setOpenWarning] = useState(false);
  const [imageFile, setImageFile] = useState(null);

  const theme = useTheme();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const { registerUser, fetchSignInMethods, updateUserProfile } =
    useContext(AuthContext);

  const onSubmit = async (data) => {
    console.log(data);

    // Check if the email is already registered
    try {
      const signInMethods = await fetchSignInMethods(data.email);

      if (signInMethods.length > 0) {
        setOpenWarning(true);
        return; // Stop the registration process
      }
    } catch (error) {
      console.log(error);
      return; // Stop the registration process
    }

    // If email is not registered, proceed with registration
    try {
      const result = await registerUser(data.email, data.password);

      const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

      const uploadImageToImgbb = async (imageFile) => {
        const formData = new FormData();
        formData.append("image", imageFile);

        const response = await fetch(img_hosting_url, {
          method: "POST",
          body: formData,
        });

        const data = await response.json();
        if (data.data && data.data.url) {
          return data.data.url; // Return the image URL from imgbb API
        } else {
          throw new Error("Image upload failed.");
        }
      };

      if (imageFile) {
        const photoURL = await uploadImageToImgbb(imageFile);
        await updateUserProfile(data.name, photoURL);
      } else {
        await updateUserProfile(data.name, null);
      }

      console.log("user profile info updated");
      reset();
      setOpenDialog(true);
      // navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <>
      <Helmet>
        <title> 👤 Registration | Online Aid </title>
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
                  Get started absolutely free
                </Typography>
                <Typography
                  variant="subtitle1"
                  display="flex"
                  mb={5}
                  sx={{ gap: "10px" }}
                >
                  Already have an account?
                  <Box
                    component={Link}
                    sx={{
                      textDecoration: "none",
                      color: theme.palette.primary.main,
                      fontWeight: "bold",
                    }}
                    to="/login"
                  >
                    Sign in
                  </Box>
                </Typography>
              </Box>
              <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
                <Box mb={3}>
                  <TextField
                    label="Name"
                    type="text"
                    fullWidth
                    {...register("name", { required: true })}
                    name="name"
                  />

                  {errors.name && (
                    <Typography variant="body2" color="error">
                      Name is required
                    </Typography>
                  )}
                </Box>
                <Box mb={3}>
                  <TextField
                    label="Email address"
                    type="email"
                    fullWidth
                    {...register("email", { required: true })}
                    name="email"
                  />
                  {errors.email && (
                    <Typography variant="body2" color="error">
                      Email is required
                    </Typography>
                  )}
                </Box>
                <Box mb={3}>
                  <TextField
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    fullWidth
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      maxLength: 20,
                      pattern:
                        /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                    })}
                    value={"123456Pp@"}
                  />
                  {errors.password?.type === "required" && (
                    <Typography variant="body2" color="error">
                      Password is required
                    </Typography>
                  )}
                </Box>
                <Box mb={3}>
                  <TextField
                    label="Confirm Password"
                    type={showPassword ? "text" : "password"}
                    fullWidth
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
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

                  {errors.password?.type === "required" && (
                    <Typography variant="body2" color="error">
                      Confirm password is required
                    </Typography>
                  )}
                  {errors.password?.type === "minLength" && (
                    <Typography variant="body2" color="error">
                      Password must be at least 6 characters
                    </Typography>
                  )}
                  {errors.password?.type === "maxLength" && (
                    <Typography variant="body2" color="error">
                      Password must be less than 20 characters
                    </Typography>
                  )}
                  {errors.password?.type === "pattern" && (
                    <Typography variant="body2" color="error">
                      Password must have one uppercase letter, one lowercase
                      letter, one number, and one special character.
                    </Typography>
                  )}
                </Box>

                <Box mb={3}>
                  <input
                    label="Photo Url"
                    type="file"
                    onChange={(e) => setImageFile(e.target.files[0])}
                    {...register("photoURL", { required: true })}
                    name="photoURL"
                  />
                  {errors.photoURL && (
                    <Typography variant="body2" color="error">
                      Profile picture is required
                    </Typography>
                  )}
                </Box>
                <Box mt={2}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ padding: "16px" }}
                  >
                    Register
                  </Button>
                </Box>
              </form>
            </NeedPadding>
          </Grid>
        </Grid>

        {/* Dialog  */}
        <CustomDialog open={openDialog} onClose={() => setOpenDialog(false)} />
        <CustomWarning
          open={openWarning}
          onClose={() => setOpenWarning(false)}
        />
      </Container>
    </>
  );
}

export default Register;
