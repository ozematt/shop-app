interface OrdersAddress {
  name: string;
  surname: string;
  street: string;
  houseNumber: number | null;
  apartmentNumber: number | null;
  zipCode: string | null;
  city: string;
  payOnDelivery: boolean | null;
  paymentCard: boolean | null;
}

export interface OrdersItem {
  id: number | null;
  title: string;
  image: string;
  price: number;
  pieces: number;
}

export interface Orders {
  id: string | null;
  date: string | null;
  totalPrice: number | null;
  quantity: number | null;
  address: OrdersAddress;
  items: OrdersItem[];
}
