export type Address = {
  name: string;
  surname: string;
  email: string;
  phone: number | null;
  street: string;
  houseNumber: number | null;
  apartmentNumber: number | null;
  zipCode: string | null;
  city: string;
  payOnDelivery: boolean | null;
  paymentCard: boolean | null;
  cardNumber: number | null;
  cardDate: string | null;
  cardCVV: string | null;
};

export type CartProduct = {
  id: number;
  title: string;
  image: string;
  price: number;
  pieces: number;
};

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

export type ProductProp = {
  product: Product;
};

export type OrdersProp = { order: Orders };
