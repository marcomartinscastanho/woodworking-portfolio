import Image from "next/image";
import Link from "next/link";

type CategoryCardProps = {
  title: string;
  description: string;
  href: string;
  image: string;
};

export default function CategoryCard({ title, description, href, image }: CategoryCardProps) {
  return (
    <Link
      href={href}
      className="group block overflow-hidden rounded-xl border bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
    >
      {/* Image */}
      <div className="relative aspect-4/3 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Text */}
      <div className="p-5">
        <h3 className="mb-2 text-xl font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </Link>
  );
}
