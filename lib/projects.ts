import { projects } from "@/generated/projects";
import { Category, Project } from "@/types/project";

export function getAllProjects() {
  return projects;
}

function sortProjects(projects: Project[]): Project[] {
  return [...projects].sort((a, b) => {
    // Featured first
    if (a.featured !== b.featured) {
      return a.featured ? -1 : 1;
    }

    // Then newest first
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

export function getProjectsByCategory(category: Category): Project[] {
  return sortProjects(getAllProjects().filter((p) => p.category === category));
}

export function getProjectBySlug(slug: string): Project | undefined {
  return getAllProjects().find((p) => p.slug === slug);
}
