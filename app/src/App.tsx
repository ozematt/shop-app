import { ThemeProvider } from "@mui/material";
import { Home } from "./pages/Home";
import theme from "./components/mui/theme";
import React from "react";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
};
