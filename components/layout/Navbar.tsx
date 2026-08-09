"use client";

import { useState, useContext } from "react";
import Link from "next/link";
import { Menu, X, ShoppingCart } from "lucide-react";
import { CartContext } from "@/components/context/CartContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const cartContext = useContext(CartContext);

  if (!cartContext) {
    return null;
  }

  const { cart } = cartContext;
  console.log("Navbar Cart:", cart);

  return (
    <header className="sticky top-0 z-[9999] bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-extrabold text-pink-600"
        >
          Design4Ever Kids
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="hover:text-pink-600">
            Home
          </Link>

          <Link href="/shop" className="hover:text-pink-600">
            Shop
          </Link>

          <Link href="#" className="hover:text-pink-600">
            Categories
          </Link>

          <Link href="#" className="hover:text-pink-600">
            About
          </Link>

          <Link href="#" className="hover:text-pink-600">
            Contact
          </Link>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          <Link href="/cart" className="relative">
            <ShoppingCart size={26} />

            {cart.length > 0 && (
  <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-pink-600 text-xs text-white">
    {cart.reduce((total, item) => total + item.quantity, 0)}
  </span>
)}
          </Link>

          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t">
          <nav className="flex flex-col p-5 gap-4">

            <Link href="/" onClick={() => setOpen(false)}>
              Home
            </Link>

            <Link href="/shop" onClick={() => setOpen(false)}>
              Shop
            </Link>

            <Link href="#" onClick={() => setOpen(false)}>
              Categories
            </Link>

            <Link href="#" onClick={() => setOpen(false)}>
              About
            </Link>

            <Link href="#" onClick={() => setOpen(false)}>
              Contact
            </Link>

          </nav>
        </div>
      )}
    </header>
  );
}