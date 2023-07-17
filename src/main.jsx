import React from "react";
import ReactDOM from "react-dom/client";

// React router dom
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router.jsx";

// Core third party css
import "react-multi-carousel/lib/styles.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// Provider context
import ThemeProvider from "./theme/index.jsx";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </HelmetProvider>
  </React.StrictMode>
);
