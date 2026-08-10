import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-12">
      <div className="mx-auto max-w-7xl px-6 text-center">

        <h2 className="text-3xl font-bold text-pink-400">
          Design4Ever Kids
        </h2>

        <p className="mt-4 text-gray-400">
          Printable Learning Resources for Happy Kids
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-4 text-gray-300">

          <Link
            href="/"
            className="transition hover:text-pink-400"
          >
            Home
          </Link>

          <Link
            href="/shop"
            className="transition hover:text-pink-400"
          >
            Shop
          </Link>

          <Link
            href="/about"
            className="transition hover:text-pink-400"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="transition hover:text-pink-400"
          >
            Contact
          </Link>

          <Link
            href="/privacy"
            className="transition hover:text-pink-400"
          >
            Privacy Policy
          </Link>

          <Link
            href="/terms"
            className="transition hover:text-pink-400"
          >
            Terms & Conditions
          </Link>

        </div>

        <div className="mt-10 border-t border-gray-800 pt-6">
          <p className="text-sm text-gray-500">
            © 2026 Design4Ever Kids. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}