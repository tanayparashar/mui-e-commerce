import React, { Children } from "react";
import Header from "../../components/Header/v1/Header";
import Footer from "../../components/Footer/v1/Footer";
import { CssBaseline } from "@mui/material";

function Layout({ children }) {
  return (
    <>
      <CssBaseline />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
