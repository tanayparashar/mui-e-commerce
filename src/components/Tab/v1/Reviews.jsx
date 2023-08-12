import React from "react";
import {
  Box,
  Divider,
  Grid,
  IconButton,
  LinearProgress,
  Rating,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import ReviewProgress from "./ReviewProgress";
import ReviewPopup from "./ReviewPopup";
import VerifiedIcon from "@mui/icons-material/Verified";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ThreeDotMenu from "./ThreeDotMenu";
import ShowReviews from "./ShowReviews";

function Reviews() {
  const theme = useTheme();
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={4} my={2}>
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="subtitle2">Average rating</Typography>
            <Typography variant="h2">3.7/5</Typography>
            <Box>
              <Rating
                name="half-rating-read"
                defaultValue={4.5}
                precision={0.5}
                readOnly
              />
            </Box>
            <Typography
              variant="caption"
              sx={{ color: theme.palette.text.disabled }}
            >
              (9.12k reviews)
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={4} my={2}>
          <ReviewProgress />
        </Grid>
        <Grid item xs={12} md={6} lg={4} my={2}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              alignContent: "center",
              height: "100%",
            }}
          >
            <ReviewPopup btnText={"Write a Review"} />
          </Box>
        </Grid>
      </Grid>

      <Divider />

      <ShowReviews />
    </>
  );
}

export default Reviews;
