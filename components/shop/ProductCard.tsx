import Image from "next/image";
import Link from "next/link";
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
    <div className="rounded-2xl bg-white p-6 shadow-md transition hover:shadow-xl">
      <div className="relative mb-4 h-48 overflow-hidden rounded-xl">
  <Image
    src={image}
    alt={title}
    fill
    className="object-cover"
  />
</div>

      <p className="text-sm text-pink-600">{category}</p>

      <h3 className="mt-2 text-xl font-bold">{title}</h3>

      <p className="mt-4 text-2xl font-bold text-pink-600">
        ${price}
      </p>

      <Link
  href={`/shop/${id}`}
  className="block w-full rounded-full bg-pink-600 py-3 text-center font-semibold text-white hover:bg-pink-700 transition"
>
  View Details
</Link>
    </div>
  );
}