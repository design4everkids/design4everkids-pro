"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { products } from "@/data/products";

export default function OrderSuccessPage() {
  const [purchasedProducts, setPurchasedProducts] = useState<
    typeof products
  >([]);

  const [paymentId, setPaymentId] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedIds = localStorage.getItem(
      "purchasedProductIds"
    );

    const savedPaymentId = localStorage.getItem(
      "razorpayPaymentId"
    );

    if (savedPaymentId) {
      setPaymentId(savedPaymentId);
    }

    if (!savedIds) {
      setIsLoading(false);
      return;
    }

    try {
      const productIds: number[] =
        JSON.parse(savedIds);

      const purchased = products.filter(
        (product) =>
          productIds.includes(product.id)
      );

      setPurchasedProducts(purchased);
    } catch (error) {
      console.error(
        "Unable to load purchased products:",
        error
      );
    }

    setIsLoading(false);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 to-white px-6 py-16">
      <div className="mx-auto max-w-4xl text-center">

        {/* Success Icon */}
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-green-100 text-5xl">
          🎉
        </div>

        {/* Heading */}
        <h1 className="mt-8 text-4xl font-extrabold text-gray-900">
          Order Successful!
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          Thank you for your purchase!
        </p>

        <p className="mt-2 text-gray-500">
          Your printable learning resources are ready.
        </p>

        {/* Download Box */}
        <div className="mt-10 rounded-3xl bg-white p-8 shadow-lg text-left">

          <h2 className="text-2xl font-bold text-gray-900">
            Your Products
          </h2>

          <div className="mt-6 space-y-4">

            {isLoading ? (
              <p className="text-gray-500">
                Loading your products...
              </p>
            ) : purchasedProducts.length === 0 ? (
              <p className="text-gray-500">
                No purchased products found.
              </p>
            ) : (
              purchasedProducts.map((product) => (
                <div
                  key={product.id}
                  className="flex flex-col gap-4 rounded-2xl border border-gray-100 p-5 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <h3 className="font-bold text-gray-900">
                      {product.title}
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      {product.category}
                    </p>
                  </div>

                  {paymentId ? (
                    <a
                      href={`/api/download/${product.id}?paymentId=${encodeURIComponent(
                        paymentId
                      )}`}
                      className="rounded-full bg-pink-600 px-6 py-3 text-center font-semibold text-white transition hover:bg-pink-700"
                    >
                      Download 📥
                    </a>
                  ) : (
                    <span className="rounded-full bg-gray-200 px-6 py-3 text-center font-semibold text-gray-500">
                      Download Unavailable
                    </span>
                  )}
                </div>
              ))
            )}

          </div>
        </div>

        {/* Continue Shopping */}
        <Link
          href="/shop"
          className="mt-8 inline-block rounded-full border border-gray-300 bg-white px-8 py-4 font-semibold text-gray-700 transition hover:bg-gray-100"
        >
          Continue Shopping
        </Link>

      </div>
    </main>
  );
}