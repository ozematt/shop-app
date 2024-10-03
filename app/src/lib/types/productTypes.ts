interface Rating {
  rate: number;
  count: number;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating: Rating;
}

export interface ProductsState {
  items: Product[];
  filteredItems: Product[];
  category: string;
  sortingMethod: string;
}
