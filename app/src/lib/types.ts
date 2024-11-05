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
