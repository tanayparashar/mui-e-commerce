import React, { useRef } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Paper,
  Rating,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";

function FlatView({ result }) {
  const theme = useTheme();

  return (
    <Stack spacing={2} width={"100%"}>
      {result.map((product) => (
        <Paper key={product.id} sx={{ p: 0.5 }}>
          <Card sx={{ display: "flex", gap: 3 }}>
            <Box component={Link} to={"/product"}>
              <CardMedia
                component="img"
                alt={product.title}
                // height="auto"
                image={product.img}
                sx={{
                  width: "150px",
                  height: "150px",
                  borderRadius: theme.shape,
                  objectFit: "contain",
                }}
              />
            </Box>
            <CardContent sx={{ p: 0.8 }}>
              <Typography>{product.title}</Typography>
              <Box sx={{ mb: 1 }}>
                <Rating
                  readOnly
                  defaultValue={product.rating.rate}
                  precision={0.5}
                />
                <Typography variant="body2" color="text.secondary">
                  {product.reviews}
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary">
                <del>{product.prevPrice}</del> {product.newPrice}
              </Typography>
            </CardContent>
          </Card>
        </Paper>
      ))}
    </Stack>
  );
}

export default FlatView;
