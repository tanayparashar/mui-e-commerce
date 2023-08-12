import React, { useState } from "react";
import {
  Typography,
  Pagination,
  Stack,
  PaginationItem,
  useMediaQuery,
} from "@mui/material";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function ReviewPagination() {
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  // Use useMediaQuery to check if the screen width is small
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <Stack
      spacing={1}
      sx={{ textAlign: "center", alignItems: "center", my: 5 }}
    >
      {/* <Typography>Page: {page}</Typography> */}
      <Pagination
        count={10}
        onChange={handleChange}
        size={isSmallScreen ? "small" : "large"} // Use conditional rendering for the size prop
        renderItem={(item) => (
          <PaginationItem
            slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
            {...item}
            sx={{ fontWeight: "bold" }}
          />
        )}
      />
    </Stack>
  );
}
