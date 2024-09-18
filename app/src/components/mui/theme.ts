import { createTheme } from "@mui/material";

const theme = createTheme({
  colorSchemes: {
    dark: true,
  },
  components: {
    MuiSelect: {
      styleOverrides: {
        root: {
          color: "#ffffff", // Ustawiasz kolor tekstu na biały (niezależnie od motywu)
        },
      },
    },
  },
});

export default theme;
