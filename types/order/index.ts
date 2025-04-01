export interface IOrderItem {
  id: string;
  variant: string;
  quantity: number;
}

export interface IOrder {
  stripeId: string;
  userDetails: {
    email: string;
    name: string;
    address: {
      city: string;
      address: string;
      address2: string;
      postCode: string;
    };
  };
  items: IOrderItem[];
  totalAmount: string;
  createdAt: Date;
}
