import RelatedProducts from "@/components/shop/RelatedProducts";
import AddToCartButton from "@/components/shop/AddToCartButton";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";

type ProductDetailsPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductDetailsPage({
  params,
}: ProductDetailsPageProps) {
  const { id } = await params;

  const product = products.find(
    (item) => item.id === Number(id)
  );

  // Product Not Found
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold text-red-500">
          Product Not Found
        </h1>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 to-white py-12 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="grid gap-10 md:grid-cols-2 items-center">

          {/* Left Side */}
          <div className="relative h-96 overflow-hidden rounded-3xl">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Right Side */}
          <div>

            <h1 className="text-4xl font-bold text-gray-800">
              {product.title}
            </h1>

            <p className="mt-4 text-yellow-500 text-2xl">
              ⭐⭐⭐⭐⭐
            </p>

            <p className="mt-4 text-lg">
              Category:
              <span className="ml-2 font-semibold text-pink-600">
                {product.category}
              </span>
            </p>

            <p className="mt-4 text-4xl font-bold text-green-600">
              ${product.price}
            </p>

            <AddToCartButton productId={product.id} />

            <Link
  href="/shop"
  className="mt-4 block w-full rounded-xl border border-pink-600 py-4 text-center text-pink-600 font-semibold hover:bg-pink-50 transition"
>
  ← Back to Shop
</Link>

          </div>

        </div>
 <RelatedProducts currentId={product.id} />
      </div>
    </main>
  );
}