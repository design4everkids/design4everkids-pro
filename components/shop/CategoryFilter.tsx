"use client";

type CategoryFilterProps = {
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
};

const categories = [
  "All",
  "Alphabet",
  "Numbers",
  "Animals",
  "Coloring",
];

export default function CategoryFilter({
  category,
  setCategory,
}: CategoryFilterProps) {
  return (
    <section className="max-w-7xl mx-auto px-6 mb-12">
      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((item) => (
          <button
            key={item}
            onClick={() => setCategory(item)}
            className={`rounded-full px-6 py-3 font-medium transition ${
              category === item
                ? "bg-pink-600 text-white"
                : "border border-pink-300 text-pink-600 hover:bg-pink-600 hover:text-white"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
    </section>
  );
}