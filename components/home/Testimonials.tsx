const testimonials = [
  {
    name: "Sarah Johnson",
    review:
      "My daughter loves these worksheets! Learning has become so much more fun.",
  },
  {
    name: "Emily Davis",
    review:
      "Beautiful designs and very easy to print. Highly recommended!",
  },
  {
    name: "Michael Brown",
    review:
      "Excellent educational resources. Worth every penny.",
  },
];

export default function Testimonials() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      <div className="text-center">

        <h2 className="text-4xl font-bold">
          Happy Parents
        </h2>

        <p className="mt-4 text-gray-600">
          Here's what our customers say.
        </p>

      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-14">

        {testimonials.map((item) => (

          <div
            key={item.name}
            className="bg-white rounded-3xl shadow-lg p-8"
          >

            <div className="text-yellow-500 text-2xl">
              ⭐⭐⭐⭐⭐
            </div>

            <p className="mt-6 text-gray-600 italic">
              "{item.review}"
            </p>

            <h3 className="mt-6 font-bold text-pink-600">
              {item.name}
            </h3>

          </div>

        ))}

      </div>

    </section>
  );
}