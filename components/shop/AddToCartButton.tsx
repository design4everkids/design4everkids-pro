"use client";

type AddToCartButtonProps = {
  productId: number;
};

export default function AddToCartButton({
  productId,
}: AddToCartButtonProps) {
  function handleClick() {
  alert(`Added product: ${productId}`);
}

  return (
    <button
      onClick={handleClick}
      className="mt-8 w-full rounded-xl bg-pink-600 py-4 text-white font-semibold text-lg hover:bg-pink-700 transition"
    >
      Buy Now
    </button>
  );
}