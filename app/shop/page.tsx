"use client";

import { useState } from "react";
import ShopHeader from "@/components/shop/ShopHeader";
import SearchBar from "@/components/shop/SearchBar";
import CategoryFilter from "@/components/shop/CategoryFilter";
import ProductGrid from "@/components/shop/ProductGrid";

export default function ShopPage() {
  const [search, setSearch] = useState("");

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <ShopHeader />

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <CategoryFilter />

      <ProductGrid
        search={search}
      />
    </main>
  );
}