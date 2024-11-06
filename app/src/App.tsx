//router
import { BrowserRouter, Route, Routes } from "react-router-dom";

//components
import { NotFound } from "./pages/NotFound";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { Dashboard } from "./components/Dashboard";
import { Authorization } from "./pages/Authorization";
import { Finalization } from "./pages/Finalization";
import { OrdersHistory } from "./pages/OrdersHistory";
import { Success } from "./pages/Success";
import { ProductDetails } from "./pages/ProductDetails";
import { MobileSearchView } from "./components/MobileSearchView";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/mSearch" element={<MobileSearchView />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Authorization />} />
          <Route path="/finalization" element={<Finalization />} />
          <Route path="/orders" element={<OrdersHistory />} />
          <Route path="/success" element={<Success />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
