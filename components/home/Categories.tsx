import Link from "next/link";

export default function Categories() {
  const categories = [
    {
      title: "Alphabet",
      emoji: "🔤",
      color: "bg-pink-100",
    },
    {
      title: "Numbers",
      emoji: "🔢",
      color: "bg-blue-100",
    },
    {
      title: "Animals",
      emoji: "🦁",
      color: "bg-green-100",
    },
    {
      title: "Coloring",
      emoji: "🎨",
      color: "bg-yellow-100",
    },
  ];

  return (
    <section
      id="categories"
      className="max-w-7xl mx-auto px-6 py-20"
    >
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-900">
          Browse Categories
        </h2>

        <p className="mt-4 text-gray-600">
          Find printable activities your kids will love.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
        {categories.map((item) => (
          <Link
            key={item.title}
            href={`/shop?category=${item.title}`}
          >
            <div
              className={`${item.color} rounded-3xl p-8 text-center shadow hover:scale-105 transition cursor-pointer`}
            >
              <div className="text-5xl">
                {item.emoji}
              </div>

              <h3 className="mt-5 text-xl font-semibold">
                {item.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}