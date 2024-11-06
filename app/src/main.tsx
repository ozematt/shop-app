import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App";

//mui
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./mui/theme";

//redux tool kit
import { Provider } from "react-redux";
import store from "./redux/store";

//tanstack-query
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "./api/queryClient";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </QueryClientProvider>
    </Provider>
  </StrictMode>
);
