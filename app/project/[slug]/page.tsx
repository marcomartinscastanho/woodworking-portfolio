import Image from "next/image";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";

import ProjectCarousel from "@/components/ProjectCarousel";
import { getProjectBySlug } from "@/lib/projects";

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) {
    notFound();
  }

  return (
    <article className="space-y-10 max-w-4xl mx-auto">
      {/* Hero image */}
      <div className="relative aspect-video overflow-hidden rounded-xl">
        <Image src={project.cover} alt={project.title} fill priority className="object-cover" />
      </div>

      {/* Title */}
      <header>
        <h1 className="text-4xl font-bold">{project.title}</h1>

        <p className="mt-2 text-gray-600">{project.description}</p>
      </header>

      {/* Markdown content */}
      <section className="prose max-w-none">
        <ReactMarkdown>{project.content}</ReactMarkdown>
      </section>

      {/* Gallery */}
      <section>
        <h2 className="mb-4 text-2xl font-semibold">Gallery</h2>
        <ProjectCarousel images={project.images} title={project.title} />
      </section>
    </article>
  );
}
