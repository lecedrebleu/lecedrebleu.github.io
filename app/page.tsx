import Link from "next/link";
import Layout from "../src/components/layout";
import Newsletter from "../src/components/newsletter";
import { getEventsByDateDescending, type EventPost } from "../lib/events";

export const dynamic = "force-static";

const formatter = new Intl.DateTimeFormat("fr-FR", {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
});

export default function HomePage() {
  const posts = getEventsByDateDescending(10);
  const now = new Date();
  const futureEvents = posts
    .filter((post) => new Date(post.frontmatter.date) >= now)
    .reverse();
  const pastEvents = posts
    .filter((post) => new Date(post.frontmatter.date) < now)
    .slice(0, 4);

  return (
    <Layout isRootPath>
      <section className="home-hero">
        <div className="home-hero-heading">
          <p className="eyebrow">Pont-Croix · Cap Sizun</p>
          <h1>Le Cèdre bleu</h1>
        </div>
        <div className="home-hero-image">
          <img
            src="/le-cedre-bleu-entree.webp"
            alt="L’entrée arborée du Cèdre bleu, à Pont-Croix"
            width="1800"
            height="1350"
            fetchPriority="high"
          />
        </div>
        <div className="home-hero-content">
          <p className="home-hero-copy">
            Une maison à Pont-Croix pour les concerts, les spectacles et les
            pratiques de la musique, de la danse et du mouvement.
          </p>
          <div className="button-row">
            <a className="button" href="#programmation">
              Voir la programmation
            </a>
            <Link className="button button-secondary" href="/activites/">
              Découvrir les activités
            </Link>
          </div>
        </div>
      </section>

      <section className="content-section" id="programmation">
        <div className="section-heading compact">
          <h2>Programmation</h2>
        </div>

        {futureEvents.length > 0 ? (
          <div className="event-grid">
            {futureEvents.map((post) => (
              <EventCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <h3>Aucun prochain événement n’est encore annoncé.</h3>
            <Link href="/activites/">Voir les activités régulières →</Link>
          </div>
        )}
      </section>

      {pastEvents.length > 0 && (
        <section className="content-section past-events">
          <div className="section-heading compact">
            <h2>Programmation passée</h2>
          </div>
          <div className="event-grid event-grid-compact">
            {pastEvents.map((post) => (
              <EventCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      )}

      <Newsletter />
    </Layout>
  );
}

function EventCard({ post }: { post: EventPost }) {
  const title = post.frontmatter.title || post.slug;
  const description =
    post.frontmatter.shortDescription ||
    post.frontmatter.description ||
    post.excerpt;

  return (
    <article className="event-card">
      <div className="event-card-image">
        {post.thumbnailPath ? (
          <img
            src={post.thumbnailPath}
            alt={`Affiche de l’événement ${title}`}
            loading="lazy"
            decoding="async"
          />
        ) : (
          <span aria-hidden="true">Cèdre bleu</span>
        )}
      </div>
      <div className="event-card-content">
        <time className="event-date" dateTime={post.frontmatter.date}>
          {formatter.format(new Date(post.frontmatter.date))}
        </time>
        <h3>{title}</h3>
        <p className="event-tags">{post.frontmatter.tags.join(" · ")}</p>
        <p
          className="event-description"
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <Link
          className="event-card-link"
          href={`/${post.slug}/`}
          aria-label={`Découvrir ${title}`}
        >
          Découvrir →
        </Link>
      </div>
    </article>
  );
}
