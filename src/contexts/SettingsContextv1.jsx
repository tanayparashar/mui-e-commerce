import React, { createContext, useEffect, useReducer } from "react";
import { defaultSettings } from "../config";
import useLocalStorage from "../hooks/useLocalStorage";
import getColorPresets, {
  defaultPreset,
  colorPresets,
} from "../utils/getColorPresets";

const initialState = {
  ...defaultSettings,
  themeColorPresets: defaultPreset, // Set initial theme color preset
};

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_MODE":
      return {
        ...state,
        themeMode: state.themeMode === "light" ? "dark" : "light",
      };
    case "CHANGE_MODE":
      return {
        ...state,
        themeMode: action.payload,
      };
    case "TOGGLE_DIRECTION":
      return {
        ...state,
        themeDirection: state.themeDirection === "rtl" ? "ltr" : "rtl",
      };
    case "CHANGE_DIRECTION":
      return {
        ...state,
        themeDirection: action.payload,
      };
    case "TOGGLE_LAYOUT":
      return {
        ...state,
        themeLayout: state.themeLayout === "vertical" ? "horizontal" : "vertical",
      };
    case "CHANGE_LAYOUT":
      return {
        ...state,
        themeLayout: action.payload,
      };
    case "TOGGLE_CONTRAST":
      return {
        ...state,
        themeContrast: state.themeContrast === "default" ? "bold" : "default",
      };
    case "CHANGE_CONTRAST":
      return {
        ...state,
        themeContrast: action.payload,
      };
    case "TOGGLE_STRETCH":
      return {
        ...state,
        themeStretch: !state.themeStretch,
      };
    case "CHANGE_COLOR":
      return {
        ...state,
        themeColorPresets: action.payload,
      };
    case "RESET_SETTING":
      return {
        ...initialState,
        themeColorPresets: state.themeColorPresets, // Preserve color preset
      };
    default:
      return state;
  }
};

const SettingsContext = createContext();

const SettingsProvider = ({ children }) => {
  const [settings, dispatch] = useReducer(reducer, initialState);
  const [storedSettings, setStoredSettings] = useLocalStorage("settings", settings);

  useEffect(() => {
    setStoredSettings(settings);
  }, [settings, setStoredSettings]);

  // Mode
  const onToggleMode = () => dispatch({ type: "TOGGLE_MODE" });
  const onChangeMode = (mode) => dispatch({ type: "CHANGE_MODE", payload: mode });

  // Direction
  const onToggleDirection = () => dispatch({ type: "TOGGLE_DIRECTION" });
  const onChangeDirection = (direction) =>
    dispatch({ type: "CHANGE_DIRECTION", payload: direction });
  const onChangeDirectionByLang = (lang) =>
    dispatch({ type: "CHANGE_DIRECTION", payload: lang === "ar" ? "rtl" : "ltr" });

  // Layout
  const onToggleLayout = () => dispatch({ type: "TOGGLE_LAYOUT" });
  const onChangeLayout = (layout) => dispatch({ type: "CHANGE_LAYOUT", payload: layout });

  // Contrast
  const onToggleContrast = () => dispatch({ type: "TOGGLE_CONTRAST" });
  const onChangeContrast = (contrast) => dispatch({ type: "CHANGE_CONTRAST", payload: contrast });

  // Stretch
  const onToggleStretch = () => dispatch({ type: "TOGGLE_STRETCH" });

  // Color
  const onChangeColor = (color) => dispatch({ type: "CHANGE_COLOR", payload: color });

  // Reset
  const onResetSetting = () => dispatch({ type: "RESET_SETTING" });

  return (
    <SettingsContext.Provider
      value={{
        ...settings,
        onToggleMode,
        onChangeMode,
        onToggleDirection,
        onChangeDirection,
        onChangeDirectionByLang,
        onToggleLayout,
        onChangeLayout,
        onToggleContrast,
        onChangeContrast,
        onToggleStretch,
        onChangeColor,
        setColor: getColorPresets(settings.themeColorPresets),
        colorOption: colorPresets.map((color) => ({
          name: color.name,
          value: color.main,
        })),
        onResetSetting,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export { SettingsContext };
export default SettingsProvider;
