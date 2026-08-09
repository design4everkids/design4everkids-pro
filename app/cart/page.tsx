"use client";

import { useContext } from "react";
import Link from "next/link";
import { CartContext } from "@/components/context/CartContext";
import { products } from "@/data/products";

export default function CartPage() {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    return null;
  }

  const { cart, setCart } = cartContext;

  const cartProducts = cart
    .map((cartItem) => {
      const product = products.find(
        (item) => item.id === cartItem.id
      );

      if (!product) return null;

      return {
        ...product,
        quantity: cartItem.quantity,
      };
    })
    .filter(
      (product): product is NonNullable<typeof product> =>
        product !== null
    );

  function increaseQuantity(productId: number) {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === productId
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  }

  function decreaseQuantity(productId: number) {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === productId
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  function removeProduct(productId: number) {
    setCart((currentCart) =>
      currentCart.filter(
        (item) => item.id !== productId
      )
    );
  }

  function clearCart() {
    setCart([]);
  }

  const total = cartProducts.reduce(
    (sum, product) =>
      sum + product.price * product.quantity,
    0
  );

  const totalItems = cartProducts.reduce(
    (sum, product) =>
      sum + product.quantity,
    0
  );

  if (cartProducts.length === 0) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-pink-50 to-white px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">

          <h1 className="text-4xl font-bold text-gray-900">
            Shopping Cart
          </h1>

          <p className="mt-4 text-gray-600">
            Your cart is currently empty.
          </p>

          <Link
            href="/shop"
            className="inline-block mt-8 rounded-full bg-pink-600 px-8 py-4 font-semibold text-white hover:bg-pink-700 transition"
          >
            Continue Shopping
          </Link>

        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 to-white px-6 py-20">
      <div className="max-w-4xl mx-auto">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

          <div>
            <h1 className="text-4xl font-bold text-gray-900">
              Shopping Cart
            </h1>

            <p className="mt-2 text-gray-600">
              {totalItems} item{totalItems !== 1 ? "s" : ""} in your cart
            </p>
          </div>

          {/* Clear Cart */}
          <button
            type="button"
            onClick={clearCart}
            className="rounded-full border border-red-200 px-6 py-3 text-sm font-semibold text-red-500 hover:bg-red-50 transition"
          >
            Clear Cart
          </button>

        </div>

        {/* Cart Products */}
        <div className="mt-10 space-y-5">

          {cartProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl p-6 shadow"
            >

              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

                {/* Product Info */}
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">
                    {product.title}
                  </h2>

                  <p className="mt-2 text-sm text-gray-500">
                    ${product.price.toFixed(2)} each
                  </p>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center gap-3">

                  <button
                    type="button"
                    onClick={() =>
                      decreaseQuantity(product.id)
                    }
                    className="w-10 h-10 rounded-full border border-gray-300 text-xl font-bold hover:bg-gray-100"
                  >
                    −
                  </button>

                  <span className="w-8 text-center font-semibold">
                    {product.quantity}
                  </span>

                  <button
                    type="button"
                    onClick={() =>
                      increaseQuantity(product.id)
                    }
                    className="w-10 h-10 rounded-full bg-pink-600 text-white text-xl font-bold hover:bg-pink-700"
                  >
                    +
                  </button>

                </div>

                {/* Price + Remove */}
                <div className="text-right">

                  <p className="text-xl font-bold text-pink-600">
                    $
                    {(
                      product.price * product.quantity
                    ).toFixed(2)}
                  </p>

                  <button
                    type="button"
                    onClick={() =>
                      removeProduct(product.id)
                    }
                    className="mt-2 text-sm text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>

                </div>

              </div>

            </div>
          ))}

        </div>

        {/* Cart Summary */}
        <div className="mt-10 bg-white rounded-2xl p-6 shadow">

          <div className="flex items-center justify-between">

            <span className="text-lg font-medium text-gray-600">
              Cart Total
            </span>

            <span className="text-3xl font-bold text-pink-600">
              ${total.toFixed(2)}
            </span>

          </div>

          <Link
            href="/checkout"
            className="mt-6 block w-full rounded-full bg-pink-600 py-4 text-center font-semibold text-white hover:bg-pink-700 transition"
          >
            Checkout
          </Link>

        </div>

      </div>
    </main>
  );
}