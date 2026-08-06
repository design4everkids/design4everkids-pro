import { products } from "@/data/products";
import ProductCard from "./ProductCard";

type ProductGridProps = {
  search: string;
};

export default function ProductGrid({
  search,
}: ProductGridProps) {

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="max-w-7xl mx-auto px-6 pb-20">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            category={product.category}
            price={product.price}
          />
        ))}

      </div>
    </section>
  );
}