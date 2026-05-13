import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import matter from "gray-matter";
import sharp from "sharp";

interface EventFrontmatter {
  image?: string;
}

interface ThumbnailFailure {
  slug: string;
  error: unknown;
}

const thumbnailWidth = 200;
const thumbnailFilename = "thumbnail.webp";
const rootDirectory = process.cwd();
const contentDirectory = path.join(rootDirectory, "content", "blog");
const publicEventsDirectory = path.join(rootDirectory, "public", "events");

async function getEventSlugs() {
  const entries = await fs.readdir(contentDirectory, { withFileTypes: true });

  return entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();
}

async function generateThumbnail(slug: string) {
  const markdownPath = path.join(contentDirectory, slug, "index.md");
  const source = await fs.readFile(markdownPath, "utf8");
  const { data } = matter(source);
  const frontmatter = data as EventFrontmatter;

  if (!frontmatter.image) {
    return false;
  }

  const posterPath = path.join(publicEventsDirectory, slug, frontmatter.image);
  const thumbnailPath = path.join(
    publicEventsDirectory,
    slug,
    thumbnailFilename,
  );

  await fs.access(posterPath);
  await sharp(posterPath)
    .resize({
      width: thumbnailWidth,
      withoutEnlargement: true,
    })
    .webp({ quality: 100 })
    .toFile(thumbnailPath);

  return true;
}

async function main() {
  const failures: ThumbnailFailure[] = [];
  let generated = 0;

  for (const slug of await getEventSlugs()) {
    try {
      if (await generateThumbnail(slug)) {
        generated += 1;
      }
    } catch (error) {
      failures.push({ slug, error });
    }
  }

  if (failures.length > 0) {
    for (const { slug, error } of failures) {
      console.error(`Failed to generate thumbnail for ${slug}:`);
      console.error(error);
    }

    process.exitCode = 1;
  } else {
    console.log(`Generated ${generated} event thumbnails.`);
  }
}

void main();
