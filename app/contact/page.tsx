import type { Metadata } from "next";
import Layout from "../../src/components/layout";
import { siteMetadata } from "../../lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Écrire au Cèdre bleu et venir à la maison, à Pont-Croix dans le Cap Sizun.",
};

const directionsUrl =
  "https://www.openstreetmap.org/search?query=24bis%20boulevard%20g%C3%A9n%C3%A9ral%20de%20Gaulle%2C%2029790%20Pont-Croix";

export default function ContactPage() {
  return (
    <Layout>
      <header className="page-heading contact-heading">
        <p className="eyebrow">Le Cèdre bleu · Pont-Croix</p>
        <h1>Contact</h1>
      </header>

      <section className="contact-directory" aria-label="Coordonnées">
        <article className="contact-directory-card">
          <p className="eyebrow">Écrire</p>
          <h2>Une question ?</h2>
          <p>Pour un concert, un cours ou une activité, écrivez-nous.</p>
          <p className="contact-email">{siteMetadata.contactEmail}</p>
          <a className="button" href={`mailto:${siteMetadata.contactEmail}`}>
            Écrire au Cèdre bleu
          </a>
        </article>

        <article className="contact-directory-card">
          <p className="eyebrow">Venir</p>
          <h2>La maison</h2>
          <address>{siteMetadata.address}</address>
          <a className="contact-directions" href={directionsUrl}>
            Voir l’itinéraire →
          </a>
        </article>
      </section>

      <section className="contact-programming">
        <div>
          <p className="eyebrow">Programmation</p>
          <h2>Propositions artistiques</h2>
        </div>
        <p>
          Nous recevons beaucoup de demandes de programmation. Nous faisons tout
          notre possible pour y répondre rapidement, tout en prenant le temps de
          tout écouter et d’en discuter ensemble. Merci pour votre patience.
        </p>
      </section>
    </Layout>
  );
}
