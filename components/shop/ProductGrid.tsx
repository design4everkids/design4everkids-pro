import { products } from "@/data/products";
import ProductCard from "./ProductCard";

type ProductGridProps = {
  search: string;
  category: string;
};

export default function ProductGrid({
  search,
  category,
}: ProductGridProps) {

const filteredProducts = products.filter((product) => {
  const matchesSearch = product.title
    .toLowerCase()
    .includes(search.toLowerCase());

  const matchesCategory =
    category === "All" || product.category === category;

  return matchesSearch && matchesCategory;
});
  return (
    <section className="max-w-7xl mx-auto px-6 pb-20">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

        {filteredProducts.map((product) => (
          <ProductCard
  key={product.id}
  id={product.id}
  title={product.title}
  category={product.category}
  price={product.price}
  image={product.image}
/>
        ))}

      </div>
    </section>
  );
}