import { createTheme } from "@mui/material";

const theme = createTheme({
  colorSchemes: {
    dark: true,
  },
  palette: {
    mode: "light",
    primary: {
      light: "#757ce8",
      main: "#0091ea", //// main kolo in light mode
      dark: "#0054a1", // button hover color
      contrastText: "#ffffff", // white
    },
    secondary: {
      light: "#ff7961",
      main: "#ff9800", // color accent cart quantity
      dark: "#ba000d",
      contrastText: "#000",
    },
    background: {
      default: "#eeeded", // Kolor tła aplikacji
      paper: "#ffffff", // Kolor tła dla kart
    },
  },
});

export default theme;
