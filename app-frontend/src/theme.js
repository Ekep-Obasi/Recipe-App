import { ThemeProvider } from "styled-components";

const theme = {
  color: {
    primary: {
      light: "",
      main: "",
      dark: "",
    },
    secondary: {
      light: "",
      main: "",
      dark: "",
    },
    error: {
      light: "",
      main: "",
      dark: "",
    },
    warning: {
      light: "",
      main: "",
      dark: "",
    },
    info: {
      light: "",
      main: "",
      dark: "",
    },
    succes: {
      light: "",
      main: "",
      dark: "",
    },
    random: {
      rand1: "#f3f3f3",
      lightgrey: "#e7e7e7",
      darkgrey: "#7F7F7F",
      dark: "#000",
    },
  },
  fontFamily: ["'Inter', sans-serif", "'Playfair Display', serif"],
  fontSizes: {
    xsmall: "",
    small: "",
    medium: "",
    large: "",
    xlarge: "",
  },
  fontWeights: {
    light: 100,
    normal: 300,
    bold: 500,
  },
  backgroundShadow:
    "box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;",
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
