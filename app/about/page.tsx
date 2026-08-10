import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 to-white px-6 py-16">
      <div className="mx-auto max-w-5xl">

        <div className="text-center">
          <p className="font-semibold text-pink-600">
            Welcome to Design4Ever Kids
          </p>

          <h1 className="mt-3 text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Learning Can Be Fun! 🎨
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-600">
            We create fun, simple and engaging printable learning resources
            designed to make early learning enjoyable for children.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">

          <div className="rounded-3xl bg-white p-7 text-center shadow-lg">
            <div className="text-4xl">📚</div>
            <h2 className="mt-4 text-xl font-bold text-gray-900">
              Learning Resources
            </h2>
            <p className="mt-3 text-gray-600">
              Printable worksheets and workbooks for early learners.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-7 text-center shadow-lg">
            <div className="text-4xl">🎨</div>
            <h2 className="mt-4 text-xl font-bold text-gray-900">
              Fun Activities
            </h2>
            <p className="mt-3 text-gray-600">
              Tracing, coloring and engaging activities that encourage learning.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-7 text-center shadow-lg">
            <div className="text-4xl">❤️</div>
            <h2 className="mt-4 text-xl font-bold text-gray-900">
              Made With Care
            </h2>
            <p className="mt-3 text-gray-600">
              Resources created with children, parents and learning in mind.
            </p>
          </div>

        </div>

        <div className="mt-10 rounded-3xl bg-white p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900">
            Our Mission
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            Our mission is to make children's early learning experience
            enjoyable, creative and accessible through high-quality printable
            educational resources.
          </p>

          <Link
            href="/shop"
            className="mt-7 inline-block rounded-full bg-pink-600 px-7 py-3 font-semibold text-white transition hover:bg-pink-700"
          >
            Explore Our Workbooks
          </Link>
        </div>

      </div>
    </main>
  );
}