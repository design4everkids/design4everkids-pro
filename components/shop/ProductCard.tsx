import Image from "next/image";
import Link from "next/link";
import AddToCartButton from "./AddToCartButton";

type ProductCardProps = {
  id: number;
  title: string;
  category: string;
  price: number;
  image: string;
};

export default function ProductCard({
  id,
  title,
  category,
  price,
  image,
}: ProductCardProps) {
  return (
    <div className="bg-white rounded-3xl p-5 shadow-md">

      {/* Product Image */}
      <div className="relative w-full h-64 rounded-2xl overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>

      {/* Product Details */}
      <div className="mt-5">

        <p className="text-sm text-pink-600">
          {category}
        </p>

        <h3 className="mt-2 text-xl font-bold">
          {title}
        </h3>

        <p className="mt-4 text-2xl font-bold text-pink-600">
          ${price.toFixed(2)}
        </p>

        {/* View Details */}
        <Link
          href={`/shop/${id}`}
          className="block w-full mt-5 rounded-full border border-pink-600 py-3 text-center font-semibold text-pink-600 hover:bg-pink-50 transition"
        >
          View Details
        </Link>

        {/* Add To Cart */}
        <div className="mt-3">
          <AddToCartButton productId={id} />
        </div>

      </div>
    </div>
  );
}