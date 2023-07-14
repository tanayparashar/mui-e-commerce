import React from "react";
import { Box, Typography } from "@mui/material";

const descriptionData = [
  {
    title: "Specifications",
    content: (
      <>
        <Typography>Category: Shoes</Typography>
        <Typography>Manufacturer: Nike</Typography>
        <Typography>Serial Number: 358607726380311</Typography>
        <Typography>Ships From: United States</Typography>
      </>
    ),
  },
  {
    title: "Product Details",
    content: (
      <>
        <Typography>
          The foam sockliner feels soft and comfortable Pull tab
        </Typography>
        <Typography>
          Not intended for use as Personal Protective Equipment
        </Typography>
        <Typography>
          Color Shown: White/Black/Oxygen Purple/Action Grape
        </Typography>
        <Typography>Style: 921826-109</Typography>
        <Typography>Country/Region of Origin: China</Typography>
      </>
    ),
  },
  {
    title: "Benefits",
    content: (
      <>
        <Typography>
          Mesh and synthetic materials on the upper keep the fluid look of the
          OG while adding comfort and durability.
        </Typography>
        <Typography>
          Originally designed for performance running, the full-length Max Air
          unit adds soft, comfortable cushioning underfoot.
        </Typography>
        <Typography>The foam midsole feels springy and soft.</Typography>
        <Typography>
          The rubber outsole adds traction and durability.
        </Typography>
      </>
    ),
  },
  {
    title: "Delivery and Returns",
    content: (
      <>
        <Typography>
          Your order of $200 or more gets free standard delivery.
        </Typography>
        <Typography>Standard delivered 4-5 Business Days</Typography>
        <Typography>Express delivered 2-4 Business Days</Typography>
        <Typography>
          Orders are processed and delivered Monday-Friday (excluding public
          holidays)
        </Typography>
      </>
    ),
  },
];

function Description() {
  return (
    <div>
      {descriptionData.map((d, index) => (
        <Box key={index}>
          <Typography variant="h6" my={1}>
            {d.title}
          </Typography>
          {d.content}
        </Box>
      ))}
    </div>
  );
}

export default Description;
