import { Button } from "@mui/material";

const RecommendedBtn = ({ onClickHandler, value, title, active }) => {
  return (
    <Button
      onClick={onClickHandler}
      value={value}
      variant={active ? "contained" : "outlined"} // Use 'contained' for active buttons
      color={active ? "primary" : "secondary"} // Use 'primary' color for active buttons
    >
      {title}
    </Button>
  );
};

export default RecommendedBtn;
