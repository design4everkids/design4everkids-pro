"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
export default function Navbar() {
  const [open, setOpen] = useState(false);return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">

        {/* Logo */}
        <h1 className="text-2xl font-extrabold text-pink-600">
          Design4Ever Kids
        </h1>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-gray-700">
          <a href="#" className="hover:text-pink-600 transition">Home</a>
          <a href="#" className="hover:text-pink-600 transition">Shop</a>
          <a href="#" className="hover:text-pink-600 transition">Categories</a>
          <a href="#" className="hover:text-pink-600 transition">About</a>
          <a href="#" className="hover:text-pink-600 transition">Contact</a>
        </nav>

        {/* Button */}
        <div className="md:hidden">
  <button onClick={() => setOpen(!open)}>
    {open ? <X size={30} /> : <Menu size={30} />}
  </button>
</div>

<button className="hidden md:block rounded-full bg-pink-600 px-6 py-3 text-white font-semibold hover:bg-pink-700 transition">
  Shop Now
</button>

      </div>
      {open && (
  <div className="md:hidden border-t border-gray-200 bg-white">

    <nav className="flex flex-col p-6 gap-5">

      <a href="#">Home</a>
      <a href="#">Shop</a>
      <a href="#">Categories</a>
      <a href="#">About</a>
      <a href="#">Contact</a>

    </nav>

  </div>
)}
    </header>
  );
}