import Image from "next/image";
import Link from "next/link";

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
          {/** # FIXME: Replace this with a real introduction */}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consectetur nulla nec rhoncus vulputate.
          Nunc vehicula eget sapien eget efficitur. Suspendisse tincidunt velit ac nibh sollicitudin, nec cursus nisl
          ultricies.
        </p>
      </section>
      {/* Categories */}
      <section>
        <div className="grid gap-6 md:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.href}
              href={category.href}
              className="group overflow-hidden rounded-xl border bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-4/3 overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="mb-2 text-xl font-semibold">{category.title}</h3>
                <p className="text-sm text-gray-600">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
