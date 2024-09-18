import { CssBaseline, ThemeProvider } from "@mui/material";
import { Home } from "./pages/Home";
import theme from "./components/mui/theme";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NotFound } from "./pages/NotFound";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};
