import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Layout from "../../src/components/layout";
import {
  getAdjacentEvents,
  getAllEvents,
  getEventBySlug,
} from "../../lib/events";

interface EventPageProps {
  params: Promise<{
    slug: string;
  }>;
}

const formatter = new Intl.DateTimeFormat("fr-FR", {
  year: "numeric",
  month: "long",
  day: "2-digit",
  hour: "numeric",
  minute: "2-digit",
});

export function generateStaticParams() {
  return getAllEvents().map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: EventPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getEventBySlug(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description || post.excerpt,
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.description || post.excerpt,
      type: "article",
    },
  };
}

export default async function EventPage({ params }: EventPageProps) {
  const { slug } = await params;
  const post = getEventBySlug(slug);

  if (!post) {
    notFound();
  }

  const { previous, next } = getAdjacentEvents(slug);

  return (
    <Layout>
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header className="blog-post-header">
          <div className="blog-post-meta">
            <time dateTime={post.frontmatter.date}>
              {formatter.format(new Date(post.frontmatter.date))}
            </time>
            {post.frontmatter.tags.length > 0 && (
              <p>{post.frontmatter.tags.join(" · ")}</p>
            )}
          </div>
          <h1 itemProp="headline">{post.frontmatter.title}</h1>
        </header>
        <div className="blog-post-layout">
          {post.imagePath && (
            <figure className="blog-post-poster">
              <img
                src={post.imagePath}
                alt={`Affiche de l’événement ${post.frontmatter.title}`}
                loading="lazy"
                decoding="async"
              />
            </figure>
          )}
          <div className="blog-post-main">
            <section
              className="blog-post-body"
              dangerouslySetInnerHTML={{
                __html: post.html || post.frontmatter.description || "",
              }}
              itemProp="articleBody"
            />
            {post.frontmatter.reservationEnabled && (
              <p className="reservation-note">
                <strong>Réservation conseillée: </strong>
                <a href="mailto:contact@lecedrebleu-px.fr">
                  contact@lecedrebleu-px.fr
                </a>
              </p>
            )}
          </div>
        </div>
      </article>
      <nav className="blog-post-nav" aria-label="Événements adjacents">
        <ul>
          <li>
            {previous && (
              <Link
                href={`/${previous.slug}/`}
                rel="prev"
                aria-label={`Événement précédent : ${previous.frontmatter.title}`}
              >
                <span aria-hidden="true">←</span>
                <span>{previous.frontmatter.title}</span>
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link
                href={`/${next.slug}/`}
                rel="next"
                aria-label={`Événement suivant : ${next.frontmatter.title}`}
              >
                <span>{next.frontmatter.title}</span>
                <span aria-hidden="true">→</span>
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  );
}
