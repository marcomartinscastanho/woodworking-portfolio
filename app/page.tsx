import CategoryCard from "@/components/CategoryCard";

const categories = [
  {
    title: "Furniture",
    description: "Cabinets and other furniture projects.",
    href: "/category/furniture",
    image: "/categories/furniture.png",
  },
  {
    title: "Whittling",
    description: "Small carving projects, figurines and experiments.",
    href: "/category/whittling",
    image: "/categories/whittling.png",
  },
  {
    title: "Other",
    description: "Miscellaneous woodworking projects.",
    href: "/category/other",
    image: "/categories/other.png",
  },
];

export default function HomePage() {
  return (
    <div className="space-y-12">
      {/* Introduction */}
      <section className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">My Woodworking Portfolio</h1>
        <p className="max-w-3xl text-lg text-gray-600">
          Welcome to my woodworking portfolio! Here, I share my projects as an amateur woodworker. From furniture to
          small whittling pieces, this portfolio is a reflection of my favourite hobby.
        </p>
      </section>
      {/* Categories */}
      <section>
        <div className="grid gap-6 md:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard key={category.href} {...category} />
          ))}
        </div>
      </section>
    </div>
  );
}
