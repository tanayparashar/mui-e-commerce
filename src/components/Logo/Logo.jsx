import React from "react";
import { Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const LogoResponsive = styled("img")`
  width: 50px;

  @media (max-width: 600px) {
    width: 45px;
  }
`;

function Logo() {
  const theme = useTheme();
  return (
    <Typography
      variant="h6"
      noWrap
      component={Link}
      to="/"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textDecoration: "none",
      }}
    >
      <LogoResponsive
        src={"https://i.ibb.co/DpK6Z0m/1673291260756.png"}
        alt=""
      />
    </Typography>
  );
}

export default Logo;
