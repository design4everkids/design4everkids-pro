import Button from "../ui/Button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="text-center">

        <span className="inline-block px-5 py-2 rounded-full bg-pink-100 text-pink-700 font-medium">
          Printable Learning Resources
        </span>

        <h1 className="mt-8 text-6xl font-extrabold text-gray-900 leading-tight">
          Learn Through Play
          <br />
          Starts Here
        </h1>

        <p className="mt-8 text-xl text-gray-600 max-w-2xl mx-auto">
          Preschool worksheets, tracing books, coloring pages and printable
          educational resources for kids.
        </p>

        <div className="mt-12 flex justify-center gap-5">

          {/* Shop Now */}
          <Link href="/shop">
            <Button>
              Shop Now
            </Button>
          </Link>

          {/* Explore */}
         <a
  href="/#categories"
  className="inline-block rounded-full border border-gray-300 bg-white px-8 py-4 font-semibold text-gray-700 hover:bg-gray-100"
>
  Explore
</a>

        </div>

      </div>
    </section>
  );
}