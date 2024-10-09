import { Orders } from "./ordersTypes";

export interface User {
  isLoggedIn: boolean;
  orders: Orders[];
}
