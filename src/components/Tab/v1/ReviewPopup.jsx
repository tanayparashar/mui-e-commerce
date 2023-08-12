import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Rating,
  Box,
  IconButton,
  FormHelperText,
} from "@mui/material";
import { AddPhotoAlternate } from "@mui/icons-material";

function ReviewPopup({ btnText }) {
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  const onSubmit = (data) => {
    // Check if the rating is valid
    if (data.rating < 1) {
      return;
    }

    // Handle the submission of review here (e.g., send to server)
    console.log("Rating:", data.rating);
    console.log("Review Text:", data.reviewText);
    console.log("Selected Image:", selectedImage);

    // Close the dialog
    setOpen(false);
  };

  return (
    <>
      <Button variant="contained" onClick={handleOpen}>
        {btnText}
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Write a Review</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please share your feedback by writing a review.
          </DialogContentText>
          <form onSubmit={handleSubmit(onSubmit)} id="review-form">
            <Controller
              name="rating"
              control={control}
              rules={{ required: "Rating is required" }} // Add the required rule
              render={({ field }) => (
                <Box display="flex" alignItems="center" mb={2}>
                  <Rating
                    name="rating"
                    value={rating}
                    onChange={(event, newValue) => {
                      setRating(newValue);
                      field.onChange(newValue); // Manually trigger onChange for validation
                    }}
                  />
                  <Box ml={2}>{rating}</Box>
                  <Box ml={2}>
                    {errors.rating && (
                      <FormHelperText error>
                        {errors.rating.message}
                      </FormHelperText>
                    )}
                  </Box>
                </Box>
              )}
            />
            <TextField
              margin="dense"
              label="Your Review"
              fullWidth
              multiline
              rows={4}
              {...register("reviewText", { required: true })}
            />
            {errors.reviewText && (
              <FormHelperText error>Review text is required</FormHelperText>
            )}
            <input
              accept="image/*"
              style={{ display: "none" }}
              id="image-upload"
              type="file"
              onChange={handleImageUpload}
            />
            <label htmlFor="image-upload">
              <IconButton color="primary" component="span">
                <AddPhotoAlternate />
              </IconButton>
              Upload Image
            </label>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="error">
            Cancel
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            form="review-form"
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default ReviewPopup;
