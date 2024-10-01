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

//redux tool kit
import { Provider } from "react-redux";
import store from "./redux/store";
import { Cart } from "./pages/Cart";
import { Dashboard } from "./components/Dashboard";
import { Authorization } from "./pages/Authorization";
import { Finalization } from "./pages/Finalization";

import { OrdersHistory } from "./pages/OrdersHistory";

export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Dashboard />}>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<Authorization />} />
                <Route path="/finalization" element={<Finalization />} />
                <Route path="/orders" element={<OrdersHistory />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </QueryClientProvider>
    </Provider>
  );
};
