export default function Newsletter() {
  return (
    <section className="newsletter-card" id="newsletter">
      <div className="newsletter-intro">
        <h2>Recevez les nouvelles du Cèdre bleu.</h2>
        <p>
          Programmation et ouvertures d’inscriptions, directement par e-mail.
        </p>
      </div>
      <div className="newsletter-embed">
        <iframe
          src="https://tally.so/embed/mRZvAp?alignLeft=1&hideTitle=1&transparentBackground=1"
          loading="lazy"
          width="100%"
          height="242"
          frameBorder={0}
          marginHeight={0}
          marginWidth={0}
          title="Inscription à la liste de diffusion du Cèdre bleu"
        />
        <p className="newsletter-fallback">
          Le formulaire ne s’affiche pas ?{" "}
          <a href="https://tally.so/r/mRZvAp">S’inscrire directement</a>
        </p>
      </div>
    </section>
  );
}
