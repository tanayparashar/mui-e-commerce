import React, { useState } from "react";
import {
  IconButton,
  Menu,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Rating,
  TextField,
  FormHelperText,
  Box,
} from "@mui/material";
import { MoreVert, Edit, AddPhotoAlternate } from "@mui/icons-material";
import { useForm, Controller } from "react-hook-form";

function ThreeDotMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEditClick = () => {
    setAnchorEl(null);
    setEditDialogOpen(true);
  };

  const handleEditClose = () => {
    setEditDialogOpen(false);
  };

  const handleDeleteClick = () => {
    setAnchorEl(null);
    setDeleteConfirmationOpen(true);
  };

  const handleDeleteConfirm = () => {
    setDeleteConfirmationOpen(false);
  };

  const handleDeleteCancel = () => {
    setDeleteConfirmationOpen(false);
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
    setEditDialogOpen(false);
  };

  return (
    <>
      <IconButton
        color="inherit"
        onClick={handleClick}
        style={{ backgroundColor: "rgba(0, 0, 0, 0.1)", borderRadius: "50%" }}
      >
        <MoreVert />
      </IconButton>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={handleEditClick}>Edit</MenuItem>
        <MenuItem onClick={handleDeleteClick}>Delete</MenuItem>
      </Menu>

      <Dialog open={editDialogOpen} onClose={handleEditClose}>
        <DialogTitle>Edit a Review</DialogTitle>
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
          <Button onClick={handleEditClose} color="error">
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

      <Dialog open={deleteConfirmationOpen} onClose={handleDeleteCancel}>
        <DialogTitle>Delete Confirmation</DialogTitle>
        <DialogContent>
          Are you sure you want to delete this item?
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteCancel}>Cancel</Button>
          <Button onClick={handleDeleteConfirm} color="error">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default ThreeDotMenu;
