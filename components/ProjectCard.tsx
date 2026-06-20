import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  title: string;
  description: string;
  href: string;
  cover: string;
};

export default function ProjectCard({ title, description, href, cover }: ProjectCardProps) {
  return (
    <Link
      href={href}
      className="
        group
        block
        overflow-hidden
        rounded-xl
        border
        bg-white
        shadow-sm
        transition-all
        duration-200
        hover:-translate-y-1
        hover:shadow-lg
      "
    >
      {/* Image */}
      <div className="relative aspect-4/3 overflow-hidden">
        <Image
          src={cover}
          alt={title}
          fill
          className="
            object-cover
            transition-transform
            duration-300
            group-hover:scale-105
          "
        />
      </div>

      {/* Text */}
      <div className="p-5">
        <h3 className="mb-2 text-xl font-semibold">{title}</h3>
        <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
      </div>
    </Link>
  );
}
