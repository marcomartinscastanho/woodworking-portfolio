import ProjectCard from "@/components/ProjectCard";
import { getProjectsByCategory } from "@/lib/projects";
import { Category } from "@/types/project";
import { notFound } from "next/navigation";

export const dynamic = "force-static";

export async function generateStaticParams() {
  return [{ slug: "furniture" }, { slug: "whittling" }, { slug: "other" }];
}

const categoryTitles: Record<string, string> = {
  furniture: "Furniture",
  whittling: "Whittling",
  other: "Other",
};

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const categoryTitle = categoryTitles[slug] ?? slug;
  const projects = getProjectsByCategory(slug as Category);
  if (!projects || projects.length === 0) {
    notFound();
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <section>
        <h1 className="text-3xl font-bold">{categoryTitle}</h1>
        <p className="text-gray-600">Projects in the {categoryTitle.toLowerCase()} category.</p>
      </section>

      {/* Grid */}
      <section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              title={project.title}
              description={project.description}
              cover={project.cover}
              priority={index === 0}
              href={`/project/${project.slug}`}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
