import React, { useContext } from "react";
import { Avatar, Box, Chip, Divider } from "@mui/material";
import { AuthContext } from "../../../../provider/AuthProvider";

export default function Profile() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <Box sx={{ pl: 2 }}>
        <Chip
          sx={{ my: "15px" }}
          avatar={
            user && user.photoURL ? (
              <Avatar alt="Logo" src={user.photoURL} />
            ) : (
              <Avatar
                alt="Default Logo"
                src="https://i.ibb.co/DpK6Z0m/1673291260756.png"
              />
            )
          }
          label={`Hi, ${user?.displayName || "Guest"}`}
        />
      </Box>
      <Divider />
    </>
  );
}
