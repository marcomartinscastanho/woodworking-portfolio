import fs from "fs";
import matter from "gray-matter";
import path from "path";

const contentDir = path.join(process.cwd(), "content");

export type Project = {
  title: string;
  category: "furniture" | "whittling" | "other";
  slug: string;
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
        cover: data.cover,
        images: data.images || [],
        description: data.description,
        content,
      });
    }
  }

  return projects;
}

export function getProjectsByCategory(category: string): Project[] {
  return getAllProjects().filter((p) => p.category === category);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return getAllProjects().find((p) => p.slug === slug);
}
