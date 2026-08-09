import ProductCard from "../ui/ProductCard";
const products = [
  {
    id: 1,
    title: "Alphabet Workbook",
    image: "/products/alphabet.png",
    price: "$3.99",
  },
  {
    id: 2,
    title: "Animals Workbook",
    image: "/products/animals.png",
    price: "$3.99",
  },
  {
    id: 3,
    title: "Coloring Workbook",
    image: "/products/coloring.png",
    price: "$3.99",
  },
  {
    id: 4,
    title: "Numbers Workbook",
    image: "/products/numbers.png",
    price: "$3.99",
  },
];

export default function Products() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      <div className="text-center">

        <h2 className="text-4xl font-bold">
          Featured Products
        </h2>

        <p className="mt-4 text-gray-600">
          Best selling printable workbooks.
        </p>

      </div>

      <div className="grid md:grid-cols-4 gap-8 mt-14">

        {products.map((product) => (
  <ProductCard
    key={product.id}
    title={product.title}
    image={product.image}
    price={product.price}
  />
))}

      </div>

    </section>
  );
}