import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products";

type RelatedProductsProps = {
  currentId: number;
};

export default function RelatedProducts({
  currentId,
}: RelatedProductsProps) {

  const relatedProducts = products.filter(
    (product) => product.id !== currentId
  );

  return (
    <section className="mt-20">

      <h2 className="mb-8 text-3xl font-bold">
        Related Products
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

        {relatedProducts.map((product) => (

          <div
            key={product.id}
            className="rounded-2xl bg-white p-5 shadow-md"
          >

            <div className="relative mb-4 h-48 overflow-hidden rounded-xl">

              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover"
              />

            </div>

            <p className="text-sm text-pink-600">
              {product.category}
            </p>

            <h3 className="mt-2 text-xl font-bold">
              {product.title}
            </h3>

            <p className="mt-3 text-2xl font-bold text-pink-600">
              ${product.price}
            </p>

            <Link
              href={`/shop/${product.id}`}
              className="mt-5 block rounded-full bg-pink-600 py-3 text-center font-semibold text-white hover:bg-pink-700 transition"
            >
              View Details
            </Link>

          </div>

        ))}

      </div>

    </section>
  );
}