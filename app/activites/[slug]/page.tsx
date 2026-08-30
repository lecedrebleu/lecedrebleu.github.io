import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Layout from "../../../src/components/layout";
import {
  getPracticeActivity,
  practiceActivities,
} from "../../../lib/practice-activities";

interface PracticeActivityPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return practiceActivities.map((activity) => ({ slug: activity.slug }));
}

export async function generateMetadata({
  params,
}: PracticeActivityPageProps): Promise<Metadata> {
  const { slug } = await params;
  const activity = getPracticeActivity(slug);

  if (!activity) {
    return {};
  }

  return {
    title: activity.title,
    description: activity.description,
  };
}

export default async function PracticeActivityPage({
  params,
}: PracticeActivityPageProps) {
  const { slug } = await params;
  const activity = getPracticeActivity(slug);

  if (!activity) {
    notFound();
  }

  const subject = encodeURIComponent(`Informations — ${activity.title}`);

  return (
    <Layout>
      <article className="practice-page">
        <header className="practice-page-header">
          <div className="practice-page-meta">
            <p>Pratique musicale</p>
            <p>Avec {activity.leader}</p>
          </div>
          <h1>{activity.title}</h1>
        </header>

        <div className="practice-page-layout">
          <aside
            className="practice-page-facts"
            aria-label="Informations pratiques"
          >
            <dl>
              <div>
                <dt>Avec</dt>
                <dd>{activity.leader}</dd>
              </div>
              <div>
                <dt>Quand</dt>
                <dd>{activity.schedule}</dd>
              </div>
              {activity.dates && (
                <div className="practice-page-fact-dates">
                  <dt>Dates</dt>
                  <dd>
                    <p className="practice-page-dates-label">
                      {activity.dates.label}
                    </p>
                    <ul className="practice-page-dates">
                      {activity.dates.items.map((date) => (
                        <li key={date.dateTime}>
                          <time dateTime={date.dateTime}>{date.label}</time>
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
              )}
              <div>
                <dt>Pour qui</dt>
                <dd>{activity.audience}</dd>
              </div>
              <div className="practice-page-fact-contact">
                <dt>Contact</dt>
                <dd>
                  <address className="practice-page-contact">
                    <a href={`mailto:${activity.contact.email}`}>
                      {activity.contact.email}
                    </a>
                    {activity.contact.phone.href ? (
                      <a href={activity.contact.phone.href}>
                        {activity.contact.phone.label} :{" "}
                        {activity.contact.phone.display}
                      </a>
                    ) : (
                      <span>
                        {activity.contact.phone.label} :{" "}
                        {activity.contact.phone.display}
                      </span>
                    )}
                  </address>
                </dd>
              </div>
            </dl>
            <a
              className="button"
              href={`mailto:${activity.contact.email}?subject=${subject}`}
            >
              Demander des informations
            </a>
          </aside>

          <div className="practice-page-body">
            {activity.paragraphs.map((paragraph, index) => (
              <p
                className={index === 0 ? "practice-page-lead" : undefined}
                key={paragraph}
              >
                {paragraph}
              </p>
            ))}

            {activity.topics && (
              <section className="practice-page-topics">
                <h2>{activity.topics.title}</h2>
                <ul>
                  {activity.topics.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            )}

            {activity.afterTopics?.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            {activity.closing && (
              <p className="practice-page-closing">{activity.closing}</p>
            )}

            <Link className="practice-page-back" href="/activites/#musique">
              ← Retour aux activités
            </Link>
          </div>
        </div>
      </article>
    </Layout>
  );
}
