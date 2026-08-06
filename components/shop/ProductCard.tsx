type ProductCardProps = {
  title: string;
  category: string;
  price: number;
};

export default function ProductCard({
  title,
  category,
  price,
}: ProductCardProps) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-md transition hover:shadow-xl">
      <div className="mb-4 h-48 rounded-xl bg-pink-100"></div>

      <p className="text-sm text-pink-600">{category}</p>

      <h3 className="mt-2 text-xl font-bold">{title}</h3>

      <p className="mt-4 text-2xl font-bold text-pink-600">
        ${price}
      </p>

      <button className="mt-5 w-full rounded-full bg-pink-600 py-3 font-semibold text-white hover:bg-pink-700">
        View Details
      </button>
    </div>
  );
}