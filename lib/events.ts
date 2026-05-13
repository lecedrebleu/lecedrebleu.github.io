import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

const contentDirectory = path.join(process.cwd(), "content", "blog");

export interface EventFrontmatter {
  title: string;
  date: string;
  tags: string[];
  shortDescription?: string;
  description?: string;
  reservationEnabled?: boolean;
  image?: string;
}

export interface EventPost {
  slug: string;
  frontmatter: EventFrontmatter;
  html: string;
  excerpt: string;
  imagePath?: string;
}

function stripHtml(value: string) {
  return value
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function prune(value: string, length = 160) {
  if (value.length <= length) {
    return value;
  }

  return `${value.slice(0, length).replace(/\s+\S*$/, "")}...`;
}

function getPostDirectoryNames() {
  return fs
    .readdirSync(contentDirectory, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);
}

export function getAllEvents() {
  return getPostDirectoryNames()
    .map((slug) => {
      const markdownPath = path.join(contentDirectory, slug, "index.md");
      const source = fs.readFileSync(markdownPath, "utf8");
      const { data, content } = matter(source);
      const html = marked.parse(content, { async: false }) as string;
      const frontmatter = {
        title: data.title,
        date: data.date,
        tags: data.tags || [],
        shortDescription: data.shortDescription,
        description: data.description,
        reservationEnabled: data.reservationEnabled,
        image: data.image,
      } satisfies EventFrontmatter;

      return {
        slug,
        frontmatter,
        html,
        excerpt: prune(stripHtml(html)),
        imagePath: frontmatter.image
          ? `/events/${slug}/${frontmatter.image}`
          : undefined,
      };
    })
    .sort(
      (left, right) =>
        new Date(left.frontmatter.date).getTime() -
        new Date(right.frontmatter.date).getTime()
    );
}

export function getEventsByDateDescending(limit?: number) {
  const posts = [...getAllEvents()].sort(
    (left, right) =>
      new Date(right.frontmatter.date).getTime() -
      new Date(left.frontmatter.date).getTime()
  );

  return typeof limit === "number" ? posts.slice(0, limit) : posts;
}

export function getEventBySlug(slug: string) {
  return getAllEvents().find((post) => post.slug === slug);
}

export function getAdjacentEvents(slug: string) {
  const posts = getAllEvents();
  const index = posts.findIndex((post) => post.slug === slug);

  return {
    previous: index > 0 ? posts[index - 1] : null,
    next: index >= 0 && index < posts.length - 1 ? posts[index + 1] : null,
  };
}
