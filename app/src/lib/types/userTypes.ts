interface OrdersAddress {
  name: string;
  surname: string;
  street: string;
  houseNumber: number | null;
  apartmentNumber: number | null;
  zipCode: number | null;
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

export interface User {
  userId: number | null;
  isLoggedIn: boolean;
  orders: Orders[];
}

export interface UserFetchData {
  address: {
    geolocation: {
      lat: string;
      long: string;
    };
    city: string;
    street: string;
    number: number;
    zipcode: string;
  };
  id: number;
  email: string;
  username: string;
  password: string;
  name: {
    firstname: string;
    lastname: string;
  };
  phone: string;
  __v: number;
}
