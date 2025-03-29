import type { CartItem } from "@/types/cart";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CartStore {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  updateItemQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  totalPrice: number;
  totalItems: number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items:
        typeof window !== "undefined"
          ? JSON.parse(localStorage.getItem("cart") || "{}").state.items
          : [],
      addItem: (newItem: CartItem) =>
        set((state) => {
          const existingItem = state.items.find(
            (item) =>
              item.id === newItem.id && item.variant === newItem.variant,
          );
          if (existingItem) {
            return {
              items: state.items.map((item) =>
                item.id === newItem.id && item.variant === newItem.variant
                  ? { ...item, quantity: item.quantity + newItem.quantity }
                  : item,
              ),
            };
          }
          return { items: [...state.items, newItem] };
        }),
      removeItem: (id: string) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        })),
      updateItemQuantity: (id: string, quantity: number) =>
        set((state) => ({
          items: state.items.map((item) =>
            item.id === id ? { ...item, quantity } : item,
          ),
        })),
      clearCart: () => set({ items: [] }),
      get totalPrice() {
        return typeof window !== "undefined"
          ? get().items.reduce(
              (total, item) => total + item.price * item.quantity,
              0,
            )
          : 0;
      },
      get totalItems() {
        return typeof window !== "undefined"
          ? get().items.reduce((total, item) => total + item.quantity, 0)
          : 0;
      },
    }),
    {
      name: "cart",
      skipHydration: true,
    },
  ),
);
