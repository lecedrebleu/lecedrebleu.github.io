import type { Metadata } from "next";
import Link from "next/link";
import Layout from "../../src/components/layout";
import { practiceActivities } from "../../lib/practice-activities";
import { siteMetadata } from "../../lib/site";

export const metadata: Metadata = {
  title: "Cours et activités",
  description:
    "Cours de musique, ateliers, jams, yoga, Pilates et pratiques collectives au Cèdre bleu à Pont-Croix.",
};

function asSentenceFragment(value: string) {
  return value.charAt(0).toLocaleLowerCase("fr-FR") + value.slice(1);
}

export default function ActivitiesPage() {
  return (
    <Layout>
      <header className="page-heading activities-heading">
        <p className="eyebrow">Pont-Croix · Cap Sizun</p>
        <h1>Cours et activités</h1>
      </header>
      <section className="schedule-panel" aria-labelledby="schedule-title">
        <div>
          <p className="eyebrow">La semaine en un coup d’œil</p>
          <h2 id="schedule-title">Les rendez-vous réguliers</h2>
        </div>
        <dl className="schedule-list">
          <div>
            <dt>Lundi matin</dt>
            <dd>Pilates avec Franziska, 9 h 30–10 h 30</dd>
          </div>
          <div>
            <dt>Lundi soir</dt>
            <dd>Fanfare ou prépaJAM, 19 h 30–21 h</dd>
          </div>
          <div>
            <dt>Mardi soir</dt>
            <dd>Yoga, selon le planning de la semaine</dd>
          </div>
          <div>
            <dt>Mercredi</dt>
            <dd>Cours et ateliers de musique</dd>
          </div>
          <div>
            <dt>Un jeudi soir sur deux</dt>
            <dd>LaboBal</dd>
          </div>
          <div>
            <dt>Vendredi matin</dt>
            <dd>Yoga, selon le planning de la semaine</dd>
          </div>
          <div>
            <dt>Un samedi par mois</dt>
            <dd>Improvisation musique-danse, 10 h–12 h</dd>
          </div>
        </dl>
        <p className="schedule-note">
          Écrivez-nous avant de venir : certains créneaux fonctionnent sur
          inscription.
        </p>
      </section>

      <section className="activity-section" id="musique">
        <div className="section-heading compact">
          <h2>Pratique musicale</h2>
        </div>
        <div className="activity-grid">
          {practiceActivities.map((activity, index) => (
            <article className="activity-card" key={activity.slug}>
              <span className="activity-number" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="activity-meta">
                Avec {activity.leader} · {asSentenceFragment(activity.schedule)}
              </p>
              <h3>{activity.title}</h3>
              <p>{activity.cardDescription}</p>
              <p className="activity-note">{activity.audience}</p>
              <Link
                aria-label={`Lire la présentation détaillée : ${activity.title}`}
                className="activity-card-link"
                href={`/activites/${activity.slug}/`}
              >
                Lire la présentation détaillée →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="activity-section" id="rendez-vous">
        <div className="section-heading compact">
          <h2>Rendez-vous musique & danse</h2>
        </div>
        <div className="movement-grid">
          <article className="movement-card">
            <p className="activity-meta">
              Rendez-vous réguliers · dates dans la programmation
            </p>
            <h3>Jam session</h3>
            <p>
              JAM Sizun ouvre la scène pour jouer, écouter et rencontrer
              d’autres musicien·nes. Les ateliers prépaJAM permettent de
              préparer du répertoire et d’arriver plus sereinement dans le jeu
              collectif.
            </p>
            <p className="activity-links">
              <a
                href="https://chat.whatsapp.com/Bp1lDxzgmAM7FKpLPdi8I7?mode=ems_copy_c"
                target="_blank"
                rel="noreferrer"
              >
                Rejoindre le groupe WhatsApp JAM Sizun
                <span className="sr-only"> (nouvel onglet)</span>
              </a>
            </p>
            <p className="activity-note">
              Musicien·nes de tous horizons bienvenu·es
            </p>
          </article>
          <article className="movement-card">
            <p className="activity-meta">
              Avec Maud · un jeudi soir sur deux · laboratoire de bal trad’
            </p>
            <h3>LaboBal</h3>
            <p>
              Le LaboBal du Cèdre bleu est un laboratoire de recherche et
              d’expérimentation autour du bal trad’. Il accueille les
              musicien·nes motivé·es qui souhaitent s’essayer à jammer et à
              accompagner des danses traditionnelles, en fest-noz comme en bal
              folk.
            </p>
            <p className="activity-links">
              <a href={`mailto:${siteMetadata.contactEmail}`}>
                Nous écrire pour être mis·e en lien avec Maud
              </a>
            </p>
          </article>
          <article className="movement-card movement-card-wide">
            <p className="activity-meta">
              Avec Airelle · un samedi par mois, 10 h–12 h
            </p>
            <h3>Session d’impro musique et danse</h3>
            <p>
              Cet espace invite toute personne désirant pratiquer et explorer
              l’improvisation — avec ou sans expérience en musique ou en danse —
              à venir dialoguer, jouer et composer ensemble au présent.
            </p>
            <p>
              Chacun·e s’empare de l’espace à son rythme, après un temps de mise
              en route qui lui est propre. L’improvisation y est envisagée comme
              une composition instantanée : observer ce qui agit déjà, puis
              répondre avec le corps, la voix ou la musique.
            </p>
            <div className="session-dates">
              <h4>Prochaines sessions</h4>
              <ul>
                <li>
                  <time dateTime="2026-09-12">12 septembre 2026</time>
                </li>
                <li>
                  <time dateTime="2026-10-10">10 octobre 2026</time>
                </li>
                <li>
                  <time dateTime="2026-11-07">7 novembre 2026</time>
                </li>
                <li>
                  <time dateTime="2026-12-12">12 décembre 2026</time>
                </li>
                <li>
                  <time dateTime="2027-01-09">9 janvier 2027</time>
                </li>
              </ul>
            </div>
          </article>
        </div>
      </section>

      <section className="activity-section" id="corps">
        <div className="section-heading compact">
          <h2>Pratiques corporelles</h2>
        </div>
        <div className="movement-grid">
          <article className="movement-card">
            <p className="activity-meta">
              Avec Mélissa · le plus souvent mardi soir et vendredi matin
            </p>
            <h3>Cours de yoga</h3>
            <p>
              Professeure expérimentée, Mélissa est formée auprès de grands
              yogis et enseigne régulièrement à d’autres professeur·es de yoga.
              Chaque séance de 1 h 30 associe respiration, postures et
              relaxation profonde.
            </p>
            <p>
              Les créneaux sont fixés semaine après semaine. Certains cours sont
              spécialement adaptés aux débutant·es, d’autres aux personnes plus
              avancées.
            </p>
            <p className="activity-links">
              <a
                href="https://chat.whatsapp.com/LuVhsKKM5oFLNyK7CIFww9?mode=ems_copy_c"
                target="_blank"
                rel="noreferrer"
              >
                Rejoindre le groupe WhatsApp du yoga
                <span className="sr-only"> (nouvel onglet)</span>
              </a>
            </p>
          </article>
          <article className="movement-card">
            <p className="activity-meta">
              Avec Franziska · lundi, 9 h 30–10 h 30
            </p>
            <h3>Pilates</h3>
            <p>
              Une pratique matinale centrée sur le renforcement en douceur, la
              posture et la qualité du mouvement.
            </p>
          </article>
        </div>
      </section>

      <section className="contact-panel">
        <div>
          <p className="eyebrow">Envie de participer ?</p>
          <h2>Écrivez-nous !</h2>
          <p>
            Pour connaître les tarifs, les places disponibles et les modalités
            d’inscription.
          </p>
        </div>
        <a className="button" href={`mailto:${siteMetadata.contactEmail}`}>
          Écrire au Cèdre bleu
        </a>
      </section>
    </Layout>
  );
}
