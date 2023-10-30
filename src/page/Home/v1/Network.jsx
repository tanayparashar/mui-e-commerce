import * as React from "react";
import { Snackbar, Box, Button } from "@mui/material";

// Icon
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import WifiIcon from "@mui/icons-material/Wifi";
import WifiOffIcon from "@mui/icons-material/WifiOff";

export default function Network() {
  const [snackOpen, setSnackOpen] = React.useState(false);
  const [snackMessage, setSnackMessage] = React.useState("");

  const handleClose = () => {
    setSnackOpen(false);
    setSnackMessage("");
  };

  const handleRefresh = () => {
    window.location.reload(); // Refresh the page
  };

  React.useEffect(() => {
    const handleOffline = () => {
      setSnackMessage(
        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          <WifiOffIcon /> You are currently offline.
          <Button
            variant="text"
            sx={{ fontWeight: "light" }}
            color="info"
            onClick={handleRefresh}
          >
            Refresh
          </Button>
        </Box>
      );
      setSnackOpen(true);
    };

    const handleOnline = () => {
      setSnackMessage(
        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          <WifiIcon color="primary" /> Your connection has been restored.
        </Box>
      );
      setSnackOpen(true);
    };

    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);

    return () => {
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, []);

  return (
    <div>
      <Snackbar
        open={snackOpen}
        autoHideDuration={6000}
        onClose={handleClose}
        message={snackMessage}
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            sx={{ p: 0.5 }}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
        }
      />
    </div>
  );
}
