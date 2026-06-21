import { cn } from "@/lib/classname";
import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  title: string;
  description: string;
  href: string;
  cover: string;
  className?: string;
};

export default function ProjectCard({ title, description, href, cover, className }: ProjectCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group block overflow-hidden rounded-xl border bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg",
        className,
      )}
    >
      {/* Image */}
      <div className="relative aspect-4/3 overflow-hidden">
        <Image
          src={cover}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
