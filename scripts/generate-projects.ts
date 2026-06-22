import { Project } from "@/types/project";
import fs from "fs";
import matter from "gray-matter";
import path from "path";

const contentDir = path.join(process.cwd(), "content");

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

const tsContent = `
// This file is auto-generated. Do not edit manually.

import type { Project } from "@/types/project";

export const projects: Project[] = ${JSON.stringify(projects, null, 2)};
`;

fs.mkdirSync(path.join(process.cwd(), "generated"), { recursive: true });

fs.writeFileSync(path.join(process.cwd(), "generated/projects.ts"), tsContent);
