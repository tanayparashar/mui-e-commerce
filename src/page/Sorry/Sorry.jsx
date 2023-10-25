import {
  Box,
  Container,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function Sorry() {
  return (
    <div>
      <Container sx={{ textAlign: "center", mt: 4 }}>
        <Box mb={5}>
          <Typography variant="h2" fontWeight={"light"}>
            Sorry, you have been blocked
          </Typography>
          <Box fontSize={20}>
            You are unable to access https://onlineaid.vercel.app
          </Box>
        </Box>
        <img
          src="https://i.ibb.co/SJ8SBSz/Block.png"
          alt="Block Image"
          style={{ objectFit: "cover" }}
        />

        <Grid container spacing={2}>
          <Grid item sm={12} md={6}>
            <Paper sx={{ padding: 5 }}>
              <Typography variant="h3" fontWeight={"light"}>
                Why have I been blocked?
              </Typography>
              <Box>
                This website is using a security service to protect itself from
                online attacks. The action you just performed triggered the
                security solution. There are several actions that could trigger
                this block including submitting a certain word or phrase, a SQL
                command or malformed data.
              </Box>
            </Paper>
          </Grid>

          <Grid item sm={12} md={6}>
            <Paper sx={{ padding: 5 }}>
              <Typography variant="h3" fontWeight={"light"}>
                What can I do to resolve this?
              </Typography>
              <Box>
                What can I do to resolve this? You can email the site owner to
                let them know you were blocked. Please include what you were
                doing when this page came up and the Cloudflare Ray ID found at
                the bottom of this page. Please contact with us our support
                system. Which king problem you face :)
              </Box>
            </Paper>
          </Grid>
        </Grid>

        <Box pt={10}>
          <Divider />

          <Box py={10}>
            2023 <Link to={"https://onlineaid.vercel.app"}>Online aid</Link>,
            inc.
          </Box>
        </Box>
      </Container>
    </div>
  );
}
