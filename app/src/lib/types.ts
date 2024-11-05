type OrdersAddress = {
  name: string;
  surname: string;
  street: string;
  houseNumber: number | null;
  apartmentNumber: number | null;
  zipCode: string | null;
  city: string;
  payOnDelivery: boolean | null;
  paymentCard: boolean | null;
};

export type OrdersItem = {
  id: number | null;
  title: string;
  image: string;
  price: number;
  pieces: number;
};

export type Orders = {
  id: string | null;
  date: string | null;
  totalPrice: number | null;
  quantity: number | null;
  address: OrdersAddress;
  items: OrdersItem[];
};

type Rating = {
  rate: number;
  count: number;
};

export type Product = {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating: Rating;
};

export type ProductsState = {
  items: Product[];
  filteredItems: Product[];
  category: string;
  sortingMethod: string;
};

export type User = {
  username: string | null;
  orders: Orders[];
};
