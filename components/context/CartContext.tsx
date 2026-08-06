"use client";

import { createContext, useState } from "react";

type CartContextType = {
  cart: number[];
  setCart: React.Dispatch<React.SetStateAction<number[]>>;
};

export const CartContext = createContext<CartContextType | null>(null);

export default function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cart, setCart] = useState<number[]>([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}