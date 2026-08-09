"use client";

import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Script from "next/script";

import { CartContext } from "@/components/context/CartContext";
import { products } from "@/data/products";

declare global {
  interface Window {
    Razorpay: any;
  }
}

export default function CheckoutPage() {
  const router = useRouter();
  const cartContext = useContext(CartContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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

  const total = cartProducts.reduce(
    (sum, product) =>
      sum + product.price * product.quantity,
    0
  );

  async function handlePlaceOrder() {
    setError("");

    if (!name.trim()) {
      setError("Please enter your full name.");
      return;
    }

    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      setError("Please enter a valid email address.");
      return;
    }

    try {
      setIsLoading(true);

      // Create Razorpay order
      const response = await fetch("/api/razorpay", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: total,
        }),
      });

      const order = await response.json();

      if (!response.ok) {
        throw new Error(
          order.error || "Unable to create order"
        );
      }

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,

        amount: order.amount,
        currency: order.currency,

        name: "Design4Ever Kids",
        description: "Printable Learning Resources",

        order_id: order.id,

        prefill: {
          name: name,
          email: email,
        },

        handler: async function (paymentResponse: any) {
  try {
    // Verify Razorpay payment
    const verifyResponse = await fetch(
      "/api/razorpay/verify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          razorpay_order_id: order.id,

          razorpay_payment_id:
            paymentResponse.razorpay_payment_id,

          razorpay_signature:
            paymentResponse.razorpay_signature,

          name: name,

          email: email,

          amount: total,

          productIds: cart.map(
            (item) => item.id
          ),
        }),
      }
    );

    const verification =
      await verifyResponse.json();

    if (
      !verifyResponse.ok ||
      !verification.success
    ) {
      throw new Error(
        verification.error ||
          "Payment verification failed"
      );
    }

    // Save purchased product IDs
    localStorage.setItem(
      "purchasedProductIds",
      JSON.stringify(
        cart.map((item) => item.id)
      )
    );

    // Save Razorpay payment ID
    localStorage.setItem(
      "razorpayPaymentId",
      paymentResponse.razorpay_payment_id
    );

    // Clear cart only after successful payment
    setCart([]);

    // Go to success page
    router.push("/order-success");
  } catch (error) {
    console.error(
      "Payment verification error:",
      error
    );

    setError(
      "Payment could not be verified. Please contact support."
    );

    setIsLoading(false);
  }
},

modal: {
  ondismiss: function () {
    setIsLoading(false);
  },
},
};
      if (!window.Razorpay) {
        throw new Error(
          "Razorpay SDK is not loaded."
        );
      }

      const razorpay = new window.Razorpay(options);

      razorpay.on(
        "payment.failed",
        function () {
          setError(
            "Payment failed. Please try again."
          );

          setIsLoading(false);
        }
      );

      razorpay.open();
    } catch (error) {
      console.error(error);

      setError(
        "Unable to start payment. Please try again."
      );

      setIsLoading(false);
    }
  }

  // Empty cart
  if (cartProducts.length === 0) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-pink-50 to-white px-6 py-16">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="text-4xl font-bold text-gray-900">
            Checkout
          </h1>

          <p className="mt-4 text-gray-600">
            Your cart is empty.
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
    <>
      {/* Razorpay Checkout Script */}
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="afterInteractive"
      />

      <main className="min-h-screen bg-gradient-to-b from-pink-50 to-white px-6 py-16">
        <div className="mx-auto max-w-5xl">

          <h1 className="text-4xl font-bold text-gray-900">
            Checkout
          </h1>

          <p className="mt-3 text-gray-600">
            Complete your order and get your printable resources.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-10">

            {/* Customer Details */}
            <div className="bg-white rounded-3xl p-6 shadow">

              <h2 className="text-2xl font-bold text-gray-900">
                Customer Information
              </h2>

              <div className="mt-6 space-y-5">

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>

                  <input
                    type="text"
                    value={name}
                    onChange={(e) =>
                      setName(e.target.value)
                    }
                    placeholder="Enter your name"
                    className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-pink-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>

                  <input
                    type="email"
                    value={email}
                    onChange={(e) =>
                      setEmail(e.target.value)
                    }
                    placeholder="Enter your email"
                    className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-pink-500"
                  />
                </div>

                {error && (
                  <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
                    {error}
                  </p>
                )}

              </div>
            </div>

            {/* Order Summary */}
            <div className="bg-white rounded-3xl p-6 shadow">

              <h2 className="text-2xl font-bold text-gray-900">
                Order Summary
              </h2>

              <div className="mt-6 space-y-4">

                {cartProducts.map((product) => (
                  <div
                    key={product.id}
                    className="flex justify-between gap-4 border-b border-gray-100 pb-4"
                  >
                    <div>
                      <p className="font-semibold text-gray-900">
                        {product.title}
                      </p>

                      <p className="text-sm text-gray-500">
                        Qty: {product.quantity}
                      </p>
                    </div>

                    <p className="font-semibold text-pink-600">
                      $
                      {(
                        product.price *
                        product.quantity
                      ).toFixed(2)}
                    </p>
                  </div>
                ))}

              </div>

              <div className="mt-6 flex justify-between">
                <span className="text-lg font-semibold">
                  Total
                </span>

                <span className="text-2xl font-bold text-pink-600">
                  ${total.toFixed(2)}
                </span>
              </div>

              <button
                type="button"
                onClick={handlePlaceOrder}
                disabled={isLoading}
                className="mt-6 block w-full rounded-full bg-pink-600 py-4 text-center font-semibold text-white hover:bg-pink-700 transition disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isLoading
                  ? "Opening Payment..."
                  : "Place Order"}
              </button>

            </div>

          </div>

        </div>
      </main>
    </>
  );
}