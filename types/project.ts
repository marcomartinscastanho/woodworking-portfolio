export type Category = "furniture" | "whittling" | "other";

export type Project = {
  title: string;
  category: Category;
  slug: string;
  date: string;
  featured: boolean;
  cover: string;
  images: string[];
  description: string;
  content: string;
};
