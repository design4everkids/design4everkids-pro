"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";

import ShopHeader from "@/components/shop/ShopHeader";
import SearchBar from "@/components/shop/SearchBar";
import CategoryFilter from "@/components/shop/CategoryFilter";
import ProductGrid from "@/components/shop/ProductGrid";

export default function ShopPage() {
  const searchParams = useSearchParams();

  const categoryFromUrl = searchParams.get("category");

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(
    categoryFromUrl || "All"
  );

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <ShopHeader />

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <CategoryFilter
        category={category}
        setCategory={setCategory}
      />

      <ProductGrid
        search={search}
        category={category}
      />
    </main>
  );
}