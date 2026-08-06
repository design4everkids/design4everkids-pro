"use client";

import { Search } from "lucide-react";

type SearchBarProps = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

export default function SearchBar({
  search,
  setSearch,
}: SearchBarProps) {
  return (
    <section className="max-w-7xl mx-auto px-6 mb-8">
      <div className="relative max-w-xl mx-auto">
        <Search
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          size={20}
        />

        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search workbooks..."
          className="w-full rounded-full border border-gray-300 bg-white py-4 pl-12 pr-4 text-gray-700 shadow-sm outline-none transition focus:border-pink-500 focus:ring-2 focus:ring-pink-200"
        />
      </div>
    </section>
  );
}