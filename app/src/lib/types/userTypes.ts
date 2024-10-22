import { Orders } from "./ordersTypes";

export interface User {
  username: string | null;
  orders: Orders[];
}
