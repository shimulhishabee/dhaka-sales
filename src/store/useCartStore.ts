import { IProduct } from "@/types/product";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface CartState {
  cartItemNumber: number;
  increase: () => void;
  decrease: () => void;
  cartItems: IProduct[];
  setCartItems: (cartItem: IProduct[]) => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cartItemNumber: 0,
      cartItems: [],

      //actions
      increase: () =>
        set((state) => ({ cartItemNumber: state.cartItemNumber + 1 })),
      decrease: () =>
        set((state) => ({ cartItemNumber: state.cartItemNumber - 1 })),
      setCartItems: (cartItems) => set(() => ({ cartItems })),
    }),
    {
      name: "storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
