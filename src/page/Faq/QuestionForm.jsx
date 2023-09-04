import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";

function QuestionForm() {
  return (
    <div>
      <Box my={5}>
        <Typography variant="h4" mb={3}>
          Haven't found the right help?
        </Typography>
        <form>
          <TextField
            label="Name"
            variant="outlined"
            sx={{ width: "100%" }}
            type="text"
          />
          <TextField
            label="Email"
            variant="outlined"
            sx={{ width: "100%", mt: 2 }}
            type="email"
          />
          <TextField
            label="Subject"
            variant="outlined"
            sx={{ width: "100%", mt: 2 }}
            type="text"
          />
          <TextField
            variant="outlined"
            //   placeholder="Enter your message here."
            sx={{ width: "100%", my: 2 }}
            margin="dense"
            label="Enter your message here"
            fullWidth
            multiline
            type="text"
            rows={4}
          />
          <Button type="submit" variant="contained" color="info">
            Submit Now
          </Button>
        </form>
      </Box>
    </div>
  );
}

export default QuestionForm;
