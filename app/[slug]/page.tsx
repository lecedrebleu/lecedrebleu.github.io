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
        <header>
          <h1 itemProp="headline">{post.frontmatter.title}</h1>
          <p>{formatter.format(new Date(post.frontmatter.date))}</p>
        </header>
        <section
          dangerouslySetInnerHTML={{
            __html: post.html || post.frontmatter.description || "",
          }}
          itemProp="articleBody"
        />
        <br />
        {post.frontmatter.reservationEnabled && (
          <p>
            <strong>Réservation conseillée: </strong>
            <a href="mailto:contact@lecedrebleu-px.fr">
              contact@lecedrebleu-px.fr
            </a>
          </p>
        )}

        <br />
        {post.imagePath && <img src={post.imagePath} alt="Affiche" />}
        <hr />
        <footer />
      </article>
      <nav className="blog-post-nav">
        <ul
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            listStyle: "none",
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link href={`/${previous.slug}/`} rel="prev">
                &lt; {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link href={`/${next.slug}/`} rel="next">
                {next.frontmatter.title} &gt;
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  );
}
