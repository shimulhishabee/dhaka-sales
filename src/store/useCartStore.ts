import { IProduct } from "@/types/product";
import { create } from "zustand";

interface CartState {
  cartItemNumber: number;
  increase: () => void;
  decrease: () => void;
  cartItems: IProduct[];
  setCartItems: (cartItem: IProduct[]) => void;
}
export const useCartStore = create<CartState>()((set) => ({
  cartItemNumber: 0,
  cartItems: [],
  increase: () =>
    set((state) => ({ cartItemNumber: state.cartItemNumber + 1 })),
  decrease: () =>
    set((state) => ({ cartItemNumber: state.cartItemNumber - 1 })),
  setCartItems: (cartItems) => set(() => ({ cartItems })),
}));
