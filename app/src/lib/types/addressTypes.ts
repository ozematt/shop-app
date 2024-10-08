export interface Address {
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
}
