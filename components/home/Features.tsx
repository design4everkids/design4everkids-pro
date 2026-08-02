import {
  BookOpen,
  Palette,
  Download,
  Star,
} from "lucide-react";
const features = [
  {
    icon: <BookOpen size={48} />,
    title: "High Quality",
    description: "Professionally designed printable workbooks.",
  },
  {
    icon: <Palette size={48} />,
    title: "Fun Activities",
    description: "Learning through games and creativity.",
  },
  {
    icon: <Download size={48} />,
    title: "Instant Download",
    description: "Download immediately after purchase.",
  },
  {
    icon: <Star size={48} />,
    title: "Trusted by Parents",
    description: "Thousands of happy families love our resources.",
  },
];

export default function Features() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      <div className="text-center">

        <h2 className="text-4xl font-bold text-gray-900">
          Why Parents Love Design4Ever
        </h2>

        <p className="mt-4 text-gray-600">
          Everything your child needs to learn while having fun.
        </p>

      </div>

      <div className="grid md:grid-cols-4 gap-8 mt-14">

        {features.map((feature) => (

          <div
            key={feature.title}
            className="bg-white rounded-3xl shadow-lg p-8 text-center hover:-translate-y-2 transition"
          >

            <div className="flex justify-center text-pink-600">
  {feature.icon}
</div>

            <h3 className="mt-5 text-xl font-bold">
              {feature.title}
            </h3>

            <p className="mt-4 text-gray-600">
              {feature.description}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}