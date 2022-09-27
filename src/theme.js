import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: "#DE6B48",
    primary: "#8B1E3F",
    secondary: "#6a3468" /* 3C153B */,
    neutral: "#7A8B99",
    neutralLight: "#E5EEF5",
    neutralDark: "#465058",
    white: "#fff",
    black: "#222",
  },
  fonts: {
    text: "'Asap Condensed', sans-serif",
    heading: "'Syncopate', sans-serif",
  },
  components: {
    Button: {
      baseStyle: {
        fontFamily: "'Asap Condensed', sans-serif",
        color: "#222",
      },
    },
  },
});

export default theme;
