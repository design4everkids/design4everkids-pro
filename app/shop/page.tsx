"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";

import ShopHeader from "@/components/shop/ShopHeader";
import SearchBar from "@/components/shop/SearchBar";
import CategoryFilter from "@/components/shop/CategoryFilter";
import ProductGrid from "@/components/shop/ProductGrid";

function ShopContent() {
  const searchParams = useSearchParams();

  const categoryFromUrl = searchParams.get("category");

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(
    categoryFromUrl || "All"
  );

  return (
    <>
      <ShopHeader />

      <main className="min-h-screen bg-pink-50 px-6 py-12">
        <div className="mx-auto max-w-7xl">
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
        </div>
      </main>
    </>
  );
}

export default function ShopPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-gray-600">
            Loading shop...
          </p>
        </div>
      }
    >
      <ShopContent />
    </Suspense>
  );
}