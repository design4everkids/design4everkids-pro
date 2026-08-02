import Button from "../ui/Button";
export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="text-center">
        <span className="inline-block px-5 py-2 rounded-full bg-pink-100 text-pink-700 font-medium">
          Printable Learning Resources
        </span>

        <h1 className="mt-8 text-6xl font-extrabold text-gray-900 leading-tight">
          Learn Through Play
          <br />
          Starts Here
        </h1>

        <p className="mt-8 text-xl text-gray-600 max-w-2xl mx-auto">
          Preschool worksheets, tracing books, coloring pages and printable educational resources for kids.
        </p>

        <div className="mt-12 flex justify-center gap-5">

  <Button>
    Shop Now
  </Button>

  <Button variant="secondary">
    Explore
  </Button>

</div>
      </div>
    </section>
  );
}