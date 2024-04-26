import React from "react";
import ReactDOM from "react-dom/client";

// React router dom
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router.jsx";

// Core third party css
import "react-multi-carousel/lib/styles.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./index.css";

// Provider context
import { HelmetProvider } from "react-helmet-async";
import SettingsProvider from "./contexts/SettingsContext.jsx";
import ThemeProvider from './theme/index.jsx'
import ThemeSettings from './components/settings/index.jsx'
import AuthProvider from "./contexts/AuthProvider.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <SettingsProvider>
        <ThemeProvider>
          <ThemeSettings>
            <AuthProvider>
              <RouterProvider router={router} />
            </AuthProvider>
          </ThemeSettings>
        </ThemeProvider>
      </SettingsProvider>
    </HelmetProvider>
  </React.StrictMode>
);

