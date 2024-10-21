import { Orders } from "./ordersTypes";

export interface User {
  username: string | null;
  isLoggedIn: boolean;
  orders: Orders[];
}
