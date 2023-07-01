import { Avatar, Box, Chip, Divider } from "@mui/material";
import React from "react";

export default function Profile() {
  return (
    <>
      <Box sx={{ pl: 2 }}>
        <Chip
          sx={{ my: "15px" }}
          avatar={
            <Avatar
              alt="Logo"
              src={"https://i.ibb.co/DpK6Z0m/1673291260756.png"}
            />
          }
          label="Hi, User Name"
        />
      </Box>
      <Divider />
    </>
  );
}
