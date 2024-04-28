import React from "react";
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
  IconButton,
  Stack,
} from "@mui/material";

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export default function Address() {
  return <div>

    <Paper sx={{ mb: 2 }} elevation={3}>
      <Card >
        <CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box>
            <Typography variant="h6" gutterBottom>
              Address Name <Box component={'span'}>(home)</Box> <Button sx={{ fontWeight: "semi-bold" }} variant="outlined" size="small" disableRipple> Default</Button>
            </Typography>

            <Typography> 430 Luettgen Motorway</Typography>
            <Typography> 706.271.9208</Typography>
            <Typography> Zip code: 18710</Typography>
            <Typography> City: Tianaland, State: California</Typography>
          </Box>

          <Box>
            <Stack direction="row" alignItems="center" spacing={1}>

              <IconButton aria-label="delete" size="small">
                <DeleteIcon fontSize="inherit" />
              </IconButton>

              <IconButton aria-label="edit" size="small">
                <EditIcon fontSize="inherit" />
              </IconButton>
            </Stack>
          </Box>
        </CardContent>
      </Card>
    </Paper>


    <Paper sx={{ mb: 2 }} elevation={3}>
      <Card >
        <CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box>
            <Typography variant="h6" gutterBottom>
              Address Name <Box component={'span'}>(home)</Box>
            </Typography>

            <Typography> 430 Luettgen Motorway</Typography>
            <Typography> 706.271.9208</Typography>
            <Typography> Zip code: 18710</Typography>
            <Typography> City: Tianaland, State: California</Typography>
          </Box>

          <Box>
            <Stack direction="row" alignItems="center" spacing={1}>

              <IconButton aria-label="delete" size="small">
                <DeleteIcon fontSize="inherit" />
              </IconButton>

              <IconButton aria-label="edit" size="small">
                <EditIcon fontSize="inherit" />
              </IconButton>
            </Stack>
          </Box>
        </CardContent>
      </Card>
    </Paper>
    <Paper sx={{ mb: 2 }} elevation={3}>
      <Card >
        <CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box>
            <Typography variant="h6" gutterBottom>
              Address Name <Box component={'span'}>(home)</Box>
            </Typography>

            <Typography> 430 Luettgen Motorway</Typography>
            <Typography> 706.271.9208</Typography>
            <Typography> Zip code: 18710</Typography>
            <Typography> City: Tianaland, State: California</Typography>
          </Box>

          <Box>
            <Stack direction="row" alignItems="center" spacing={1}>

              <IconButton aria-label="delete" size="small">
                <DeleteIcon fontSize="inherit" />
              </IconButton>

              <IconButton aria-label="edit" size="small">
                <EditIcon fontSize="inherit" />
              </IconButton>
            </Stack>
          </Box>
        </CardContent>
      </Card>
    </Paper>
    <Paper sx={{ mb: 2 }} elevation={3}>
      <Card >
        <CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box>
            <Typography variant="h6" gutterBottom>
              Address Name <Box component={'span'}>(home)</Box>
            </Typography>

            <Typography> 430 Luettgen Motorway</Typography>
            <Typography> 706.271.9208</Typography>
            <Typography> Zip code: 18710</Typography>
            <Typography> City: Tianaland, State: California</Typography>
          </Box>

          <Box>
            <Stack direction="row" alignItems="center" spacing={1}>

              <IconButton aria-label="delete" size="small">
                <DeleteIcon fontSize="inherit" />
              </IconButton>

              <IconButton aria-label="edit" size="small">
                <EditIcon fontSize="inherit" />
              </IconButton>
            </Stack>
          </Box>
        </CardContent>
      </Card>
    </Paper>





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
        // onClick={handleSaveProfile}
        >
          Save
        </Button>


      </Box>
    </Card>

  </div>;
}
