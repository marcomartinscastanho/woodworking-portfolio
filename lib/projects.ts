import fs from "fs";
import matter from "gray-matter";
import path from "path";

const contentDir = path.join(process.cwd(), "content");

export type Project = {
  title: string;
  category: "furniture" | "whittling" | "other";
  slug: string;
  date: string;
  featured: boolean;
  cover: string;
  images: string[];
  description: string;
  content: string;
};

export function getAllProjects(): Project[] {
  const categories = fs.readdirSync(contentDir);

  const projects: Project[] = [];

  for (const category of categories) {
    const categoryPath = path.join(contentDir, category);
    const files = fs.readdirSync(categoryPath);

    for (const file of files) {
      const filePath = path.join(categoryPath, file);
      const raw = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(raw);

      projects.push({
        title: data.title,
        category: data.category,
        slug: data.slug,
        date: data.date,
        featured: data.featured ?? false,
        cover: data.cover,
        images: data.images || [],
        description: data.description,
        content,
      });
    }
  }

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

export function getProjectsByCategory(category: string): Project[] {
  return sortProjects(getAllProjects().filter((p) => p.category === category));
}

export function getProjectBySlug(slug: string): Project | undefined {
  return getAllProjects().find((p) => p.slug === slug);
}
