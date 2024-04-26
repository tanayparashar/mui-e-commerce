import React, { useEffect, useState } from "react";
import TitleBar from "./components/TitleBar";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Avatar,
  Button,
  Paper,
  TextField,
  Snackbar,
} from "@mui/material";
import { Helmet } from "react-helmet-async";

export default function Profile() {

  const [editing, setEditing] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleEditProfile = () => {
    setEditing(true);
  };

  const handleSaveProfile = () => {
    // Save profile data
    setEditing(false);
    setShowSuccessMessage(true);


    // You can add logic here to save the updated profile data
  };

  const handleCloseSuccessMessage = () => {
    setShowSuccessMessage(false);
  };

  useEffect(() => {
    if (showSuccessMessage) {
      window.scrollTo(0, 0); // Scroll to the top when showSuccessMessage changes
    }
  }, [showSuccessMessage]);

  return (
    <>
      <Helmet>
        <title>Profile section</title>
        <meta name="description" content="Your page description" />
      </Helmet>


      <TitleBar heading={"Profile"} btn={true} btnText={"Profile Info"} />

      <Paper>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            p: 3,
          }}
        >
          <Card sx={{ maxWidth: 400 }}>
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  mt: 2,
                }}
              >
                <Avatar
                  alt="User Avatar"
                  src="https://example.com/user-avatar.jpg"
                  sx={{ width: 100, height: 100 }}
                />
                <Typography variant="h6" mt={2}>
                  John Doe
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  johndoe@example.com
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  mt: 2,
                }}
              >
                <Button variant="contained" color="primary" onClick={handleEditProfile}>
                  Edit Profile
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Box>

        {/* Profile Information  */}
        {editing && (
          <Card>
            <Box my={0} p={2}>
              <Typography variant="h4" mb={3}>
                Profile information
              </Typography>
              <TextField
                label="Full name"
                variant="outlined"
                placeholder="Your first and last name"
                sx={{ width: "100%" }}
                type="text"
              />


              <TextField
                label="Email address"
                variant="outlined"
                placeholder="Enter your email address"
                sx={{ width: "100%", mt: 2 }}
                type="email"
              />
              <TextField
                label="Phone number"
                variant="outlined"
                placeholder="Enter your phone number"
                sx={{ width: "100%", mt: 2 }}
                type="number"
              />
              <TextField
                label="Address"
                variant="outlined"
                placeholder="Enter your address"
                sx={{ width: "100%", mt: 2 }}
                type="text"
              />

              <Box sx={{ display: "flex", mt: 2, gap: 2 }}>
                <TextField
                  label="Holding Number"
                  variant="outlined"
                  placeholder="Enter your holding number"
                  sx={{ width: "100%" }}
                />
                <TextField
                  label="City"
                  variant="outlined"
                  placeholder="Enter your city"
                  sx={{ width: "100%" }}
                />
              </Box>

              <Button
                sx={{ mt: 2, }}
                variant="contained"
                color="primary"
                onClick={handleSaveProfile}
              >
                Save
              </Button>


            </Box>
          </Card>
        )}
      </Paper>

      {/* Success message */}
      <Snackbar
        open={showSuccessMessage}
        autoHideDuration={6000}
        onClose={handleCloseSuccessMessage}
        message="Profile updated successfully"
      />
    </>
  );
}
