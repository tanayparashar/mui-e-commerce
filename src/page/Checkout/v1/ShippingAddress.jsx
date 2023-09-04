import React from "react";

function ShippingAddress() {
  return (
    <div>
      {/* Previous Address  */}

      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 3,
          }}
        >
          <Typography variant="h4">Shipping address</Typography>
          <Button variant="contained">Add new address</Button>
        </Box>
        <Grid container spacing={2}>
          <Grid item md={4}>
            <Paper sx={{ p: 1 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography variant="h6">Home</Typography>
                <Box sx={{ display: "flex" }}>
                  <IconButton>
                    <EditIcon />
                  </IconButton>
                  <IconButton>
                    <DeleteOutlineIcon color="error" />
                  </IconButton>
                </Box>
              </Box>
              <Typography variant="body2">Address rs 705 90875</Typography>
              <Typography>++979797979797</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default ShippingAddress;
