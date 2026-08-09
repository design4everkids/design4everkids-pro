"use client";

import { useContext } from "react";
import { CartContext } from "@/components/context/CartContext";

type AddToCartButtonProps = {
  productId: number;
};

export default function AddToCartButton({
  productId,
}: AddToCartButtonProps) {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    return null;
  }

  const { cart, setCart } = cartContext;

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    e.stopPropagation();

    const existingProduct = cart.find(
      (item) => item.id === productId
    );

    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === productId
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        )
      );
    } else {
      setCart([
        ...cart,
        {
          id: productId,
          quantity: 1,
        },
      ]);
    }

    alert("Product Added To Cart ✅");
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="w-full rounded-full bg-pink-600 px-6 py-3 font-semibold text-white transition hover:bg-pink-700"
    >
      Add to Cart
    </button>
  );
}