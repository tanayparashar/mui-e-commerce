import React from "react";
import TitleBar from "./components/TitleBar";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Avatar,
  Button,
  Paper,
} from "@mui/material";

export default function Profile() {
  return (
    <>
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
                <Button variant="contained" color="primary">
                  Edit Profile
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Paper>
    </>
  );
}
