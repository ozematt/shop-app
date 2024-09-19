//mui
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./components/mui/theme";

//router
import { BrowserRouter, Route, Routes } from "react-router-dom";

//pages
import { NotFound } from "./pages/NotFound";
import { Home } from "./pages/Home";

//tanstack-query
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "./context/queryClient";
import React from "react";

export const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
};
