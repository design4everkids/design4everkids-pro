"use client";

const categories = [
  "All",
  "Alphabet",
  "Numbers",
  "Animals",
  "Coloring",
];

export default function CategoryFilter() {
  return (
    <section className="max-w-7xl mx-auto px-6 mb-12">
      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((category) => (
          <button
            key={category}
            className="rounded-full border border-pink-300 px-6 py-3 font-medium text-pink-600 transition hover:bg-pink-600 hover:text-white"
          >
            {category}
          </button>
        ))}
      </div>
    </section>
  );
}