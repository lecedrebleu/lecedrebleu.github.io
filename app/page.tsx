import Link from "next/link";
import Layout from "../src/components/layout";
import Newsletter from "../src/components/newsletter";
import { getEventsByDateDescending, type EventPost } from "../lib/events";

export const dynamic = "force-static";

const formatter = new Intl.DateTimeFormat("fr-FR", {
  weekday: "short",
  year: "numeric",
  month: "long",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
});

export default function HomePage() {
  const posts = getEventsByDateDescending(6);

  if (posts.length === 0) {
    return (
      <Layout isRootPath>
        <p>Aucun prochain événement n&apos;est prévu pour l&apos;instant.</p>
      </Layout>
    );
  }

  const beforeNowIndex = posts.findIndex(
    (post) => new Date(post.frontmatter.date) < new Date()
  );

  let pastEvents: EventPost[];
  let futureEvents: EventPost[];

  if (beforeNowIndex === 0 || beforeNowIndex === -1) {
    pastEvents = posts;
    futureEvents = [];
  } else {
    futureEvents = posts.slice(0, beforeNowIndex).reverse();
    pastEvents = posts.slice(beforeNowIndex);
  }

  return (
    <Layout isRootPath>
      <Newsletter />
      {futureEvents.length > 0 && (
        <div>
          <h1>Programmation</h1>
          <ol style={{ listStyle: "none" }}>
            {futureEvents.map((post) => (
              <li key={post.slug}>
                <EventItem post={post} />
              </li>
            ))}
          </ol>
        </div>
      )}
      {pastEvents.length > 0 && (
        <div>
          <h3>Évènements passés</h3>
          <ol style={{ listStyle: "none" }}>
            {pastEvents.map((post) => (
              <li key={post.slug}>
                <EventItem post={post} />
              </li>
            ))}
          </ol>
        </div>
      )}
    </Layout>
  );
}

function EventItem({ post }: { post: EventPost }) {
  const title = post.frontmatter.title || post.slug;
  const description =
    post.frontmatter.shortDescription ||
    post.frontmatter.description ||
    post.excerpt;

  return (
    <article className="post-list-item-container">
      {post.thumbnailPath && (
        <div className="post-list-item-image">
          <Link href={`/${post.slug}/`}>
            <img
              src={post.thumbnailPath}
              alt={`Affiche de l'événement ${title}`}
            />
          </Link>
        </div>
      )}
      <div className="post-list-item">
        <header>
          <h2>
            <Link href={`/${post.slug}/`}>
              <span>{title}</span>
            </Link>
          </h2>
          <p>
            <small>{formatter.format(new Date(post.frontmatter.date))}</small>
          </p>
          <p>
            <small>{post.frontmatter.tags.join(" / ")}</small>
          </p>
        </header>
        <section>
          <p dangerouslySetInnerHTML={{ __html: description }} />
        </section>
      </div>
    </article>
  );
}
