import { useMemo } from "react";
import PropTypes from "prop-types";

import {
  ThemeProvider as MUIThemeProvider,
  // createTheme,
  StyledEngineProvider,
} from "@mui/material/styles";

// @mui
import { CssBaseline, createTheme } from "@mui/material";
import palette from "./palette";
import shadows from "./shadows";
import typography from "./typography";
import RootGlobalStyles from "./globalStyles";
import customShadows from "./customShadows";
import componentsOverride from "./overrides";

// ----------------------------------------------------------------------

ThemeProvider.propTypes = {
  children: PropTypes.node,
};

export default function ThemeProvider({ children }) {
  const themeOptions = useMemo(
    () => ({
      palette,
      shape: { borderRadius: 6 },
      typography,
      shadows: shadows(),
      customShadows: customShadows(),
    }),
    []
  );

  const theme = createTheme(themeOptions);
  theme.components = componentsOverride(theme);

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        <RootGlobalStyles />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}
