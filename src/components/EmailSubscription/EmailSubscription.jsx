import React, { useState } from "react";
import {
  Box,
  Radio,
  TextField,
  Button,
  useMediaQuery,
  useTheme,
  Paper,
  Typography,
} from "@mui/material";

const EmailSubscription = () => {
  const [email, setEmail] = useState("");
  const [subscriptionType, setSubscriptionType] = useState("daily");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscriptionTypeChange = (e) => {
    setSubscriptionType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Subscription Type:", subscriptionType);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ mb: 4 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: isMobile ? "column" : "row",
            gap: 1,
            p: 1,
          }}
        >
          <TextField
            type="email"
            id="email"
            placeholder="Your email address"
            value={email}
            onChange={handleEmailChange}
            size="small"
            fullWidth
            variant="outlined"
            InputProps={{
              sx: {
                borderRadius: "50px",
              },
            }}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{
              borderRadius: "50px",
              px: 4,
              width: "auto",
            }}
          >
            Sent
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default EmailSubscription;
