import { CartItem } from "@/types/cart";
import { useCartStore } from "@/store/cartStore";

export const addToCart = (item: CartItem) => {
  const { addItem } = useCartStore.getState();
  addItem(item);
};

export const getCartItems = () => {
  const { items } = useCartStore.getState();
  return items;
};
