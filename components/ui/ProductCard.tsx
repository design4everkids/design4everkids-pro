import Image from "next/image";
type ProductCardProps = {
  title: string;
  image: string;
  price: string;
};

export default function ProductCard({
  title,
  image,
  price,
}: ProductCardProps) {
  return (
    <div className="rounded-3xl bg-white shadow-lg overflow-hidden hover:scale-105 transition">

     <Image
  src={image}
  alt={title}
  width={400}
  height={500}
  className="w-full h-64 object-cover"
/>

      <div className="p-6">

        <h3 className="text-xl font-bold">
          {title}
        </h3>

        <p className="mt-3 text-pink-600 font-semibold">
          {price}
        </p>

        <button className="mt-5 w-full rounded-full bg-pink-600 text-white py-3 hover:bg-pink-700 transition">
          Buy Now
        </button>

      </div>

    </div>
  );
}