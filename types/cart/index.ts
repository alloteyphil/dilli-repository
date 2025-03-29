export type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  slug: string;
  variant: string;
};

export type Cart = {
  items: CartItem[];
  totalPrice: number;
  totalItems: number;
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  updateItemQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
};
