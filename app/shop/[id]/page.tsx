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
        <div className="mb-8 flex items-center gap-2 text-sm text-gray-500">
  <Link
    href="/"
    className="hover:text-pink-600 transition"
  >
    Home
  </Link>

  <span>→</span>

  <Link
    href="/shop"
    className="hover:text-pink-600 transition"
  >
    Shop
  </Link>

  <span>→</span>

  <span className="font-medium text-gray-800">
    {product.title}
  </span>
</div>

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
            <p className="mt-6 text-gray-600 leading-8 text-lg">
  {product.description}
</p>
<div className="mt-6 rounded-2xl border border-pink-200 bg-pink-50 p-5">
  <div className="flex items-start gap-3">
    <div className="text-2xl">
      📥
    </div>

    <div>
      <h3 className="font-bold text-gray-800">
        Digital Product
      </h3>

      <p className="mt-1 text-sm leading-6 text-gray-600">
        This is a digital printable product. No physical item will be shipped.
      </p>

      <div className="mt-3 flex flex-wrap gap-2">
        <span className="rounded-full bg-white px-3 py-1 text-sm font-medium">
          ⚡ Instant Download
        </span>

        <span className="rounded-full bg-white px-3 py-1 text-sm font-medium">
          📄 PDF
        </span>

        <span className="rounded-full bg-white px-3 py-1 text-sm font-medium">
          🖨️ Print at Home
        </span>
      </div>
    </div>
  </div>
</div>
<div className="mt-8 rounded-2xl bg-pink-50 p-6 border border-pink-100">

  <h3 className="text-xl font-bold text-gray-800">
    Product Features
  </h3>

  <ul className="mt-4 space-y-3 text-gray-700">

    <li>✅ Printable High-Quality PDF</li>

    <li>✅ Instant Digital Download</li>

    <li>✅ Unlimited Personal Printing</li>

    <li>✅ Perfect for Preschool Kids</li>

    <li>✅ Designed by Design4Ever Kids</li>

  </ul>

</div>
<div className="mt-8 rounded-2xl bg-white border border-gray-200 p-6 shadow-sm">

  <h3 className="text-xl font-bold text-gray-800">
    📦 What's Included
  </h3>

  <div className="mt-5 grid gap-4 md:grid-cols-2">

    <div className="rounded-xl bg-pink-50 p-4">
      📄 30 Printable Pages
    </div>

    <div className="rounded-xl bg-pink-50 p-4">
      ✏️ Tracing Activities
    </div>

    <div className="rounded-xl bg-pink-50 p-4">
      🎨 Coloring Pages
    </div>

    <div className="rounded-xl bg-pink-50 p-4">
      🧩 Fun Learning Exercises
    </div>

  </div>

</div>
<div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

  <h3 className="text-xl font-bold text-gray-800">
    📋 Product Information
  </h3>

  <div className="mt-5 space-y-4">

    <div className="flex justify-between border-b pb-2">
      <span className="font-medium text-gray-600">Age Group</span>
      <span className="font-semibold">3–6 Years</span>
    </div>

    <div className="flex justify-between border-b pb-2">
      <span className="font-medium text-gray-600">File Format</span>
      <span className="font-semibold">PDF</span>
    </div>

    <div className="flex justify-between border-b pb-2">
      <span className="font-medium text-gray-600">Download Type</span>
      <span className="font-semibold">Instant Download</span>
    </div>

    <div className="flex justify-between border-b pb-2">
      <span className="font-medium text-gray-600">Language</span>
      <span className="font-semibold">English</span>
    </div>

    <div className="flex justify-between">
      <span className="font-medium text-gray-600">Pages</span>
      <span className="font-semibold">30+</span>
    </div>

  </div>

</div>
            <AddToCartButton productId={product.id} />
            <Link
  href="/shop"
  className="mt-4 block w-full rounded-xl border-2 border-pink-600 py-4 text-center font-semibold text-pink-600 transition hover:bg-pink-50"
>
  Continue Shopping
</Link>

            <Link
  href="/shop"
  className="mt-4 block w-full rounded-xl border border-pink-600 py-4 text-center text-pink-600 font-semibold hover:bg-pink-50 transition"
>
  ← Back to Shop
</Link>

          </div>

        </div>
        {/* Customer Reviews */}
<section className="mt-16 rounded-3xl bg-white border border-gray-200 p-8 shadow-sm">

  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

    <div>
      <h2 className="text-3xl font-bold text-gray-800">
        Customer Reviews
      </h2>

      <p className="mt-2 text-gray-500">
        See what parents and educators think about this resource.
      </p>
    </div>

    <div className="text-left md:text-right">
      <p className="text-3xl text-yellow-500">
        ⭐⭐⭐⭐⭐
      </p>

      <p className="mt-1 font-semibold text-gray-700">
        5.0 out of 5
      </p>
    </div>

  </div>

  <div className="mt-8 grid gap-6 md:grid-cols-2">

    <div className="rounded-2xl bg-pink-50 p-6">
      <p className="text-yellow-500">
        ⭐⭐⭐⭐⭐
      </p>

      <p className="mt-3 text-gray-700 leading-7">
        "A lovely and easy-to-use workbook for preschool learning.
        My child really enjoyed the activities!"
      </p>

      <p className="mt-4 font-semibold text-gray-800">
        — Happy Parent
      </p>
    </div>

    <div className="rounded-2xl bg-purple-50 p-6">
      <p className="text-yellow-500">
        ⭐⭐⭐⭐⭐
      </p>

      <p className="mt-3 text-gray-700 leading-7">
        "The pages are colorful, simple and perfect for early learners."
      </p>

      <p className="mt-4 font-semibold text-gray-800">
        — Preschool Teacher
      </p>
    </div>

  </div>

</section>
 <RelatedProducts currentId={product.id} />
      </div>
    </main>
  );
}