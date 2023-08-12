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

import VerifiedIcon from "@mui/icons-material/Verified";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ThreeDotMenu from "./ThreeDotMenu";
import ReviewPagination from "./ReviewPagination";

export default function ShowReviews() {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          display: "flex",
          gap: 10,
          alignItems: "flex-start",
          mt: 3,
          "@media (max-width: 600px)": {
            flexDirection: "column",
            gap: 1,
          },
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            my: 2,
            "@media (max-width: 600px)": {
              display: "flex",
              flexDirection: "row",
              textAlign: "left",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              mb: 0,
            },
          }}
        >
          <Box
            sx={{
              "@media (max-width: 600px)": {
                display: "flex",
                gap: 1,
              },
            }}
          >
            <Box
              component={"img"}
              src="https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_1.jpg"
              alt=""
              sx={{
                borderRadius: "50%",
                mb: 2,
                //   height: "100px",
                //   width: "100px",
                //   objectFit: "cover",
                "@media (max-width: 600px)": {
                  width: "40px",
                  mb: 0,
                },
              }}
            />
            <Box>
              <Typography variant="subtitle2">Jayvion Simon</Typography>
              <Typography variant="caption" color={theme.palette.text.disabled}>
                11 Aug 2023
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <ThreeDotMenu />
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            // alignItems: "center",
            gap: 2,
            my: 2,
          }}
        >
          <Box>
            <Rating
              name="half-rating-read"
              defaultValue={4.5}
              precision={0.5}
              readOnly
            />

            <Box sx={{ display: "flex", gap: 1, mb: 1 }}>
              <VerifiedIcon color="primary" />
              <Typography color={"primary"}>{"Verified purchase "}</Typography>
            </Box>

            <Typography mb={1}>
              The sun slowly set over the horizon, painting the sky in vibrant
              hues of orange and pink.
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <IconButton color="secondary">
                  <ThumbUpOffAltIcon />
                </IconButton>
                <Typography>123</Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center" }}>
                <IconButton color="secondary">
                  <ThumbDownOffAltIcon />
                </IconButton>
                <Typography>123</Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <ThreeDotMenu />
          </Box>
        </Box>
      </Box>

      {/* 2nd review  */}
      <Box
        sx={{
          display: "flex",
          gap: 10,
          alignItems: "flex-start",
          mt: 3,
          "@media (max-width: 600px)": {
            flexDirection: "column",
            gap: 1,
          },
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            my: 2,
            "@media (max-width: 600px)": {
              display: "flex",
              flexDirection: "row",
              textAlign: "left",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              mb: 0,
            },
          }}
        >
          <Box
            sx={{
              "@media (max-width: 600px)": {
                display: "flex",
                gap: 1,
              },
            }}
          >
            <Box
              component={"img"}
              src="https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_1.jpg"
              alt=""
              sx={{
                borderRadius: "50%",
                mb: 2,
                //   height: "100px",
                //   width: "100px",
                //   objectFit: "cover",
                "@media (max-width: 600px)": {
                  width: "40px",
                  mb: 0,
                },
              }}
            />
            <Box>
              <Typography variant="subtitle2">Jayvion Simon</Typography>
              <Typography variant="caption" color={theme.palette.text.disabled}>
                11 Aug 2023
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <ThreeDotMenu />
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            // alignItems: "center",
            gap: 2,
            my: 2,
          }}
        >
          <Box>
            <Rating
              name="half-rating-read"
              defaultValue={4.5}
              precision={0.5}
              readOnly
            />

            <Box sx={{ display: "flex", gap: 1, mb: 1 }}>
              <VerifiedIcon color="primary" />
              <Typography color={"primary"}>{"Verified purchase "}</Typography>
            </Box>

            <Typography mb={1}>
              The sun slowly set over the horizon, painting the sky in vibrant
              hues of orange and pink.
            </Typography>

            {/* Review image that use upload  */}

            <img
              src="https://static-01.daraz.com.bd/p/a4366436b467ecf07590abb13c6e85ac.jpg_400x400q75-product.jpg_.webp"
              alt=""
              style={{ width: "100px", height: "100px" }}
            />

            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <IconButton color="secondary">
                  <ThumbUpOffAltIcon />
                </IconButton>
                <Typography>123</Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center" }}>
                <IconButton color="secondary">
                  <ThumbDownOffAltIcon />
                </IconButton>
                <Typography>123</Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <ThreeDotMenu />
          </Box>
        </Box>
      </Box>

      <ReviewPagination />
    </>
  );
}
