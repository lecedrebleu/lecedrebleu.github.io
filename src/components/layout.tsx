import * as React from "react";
import Link from "next/link";
import Matomo from "./matomo";
import { siteMetadata } from "../../lib/site";

const Layout = ({
  isRootPath = false,
  children,
}: {
  isRootPath?: boolean;
  children: React.ReactNode;
}) => (
  <div className="site-shell" data-is-root-path={isRootPath}>
    <Matomo />
    <a className="skip-link" href="#contenu">
      Aller au contenu
    </a>
    <header className="site-header">
      <Link className="site-brand" href="/" aria-label="Accueil du Cèdre bleu">
        <img src="/logo.png" alt="" width={96} height={79} />
      </Link>
      <p className="site-location" aria-label="Localisation">
        24bis boulevard général de Gaulle, Pont-Croix
      </p>
      <nav className="site-navigation" aria-label="Navigation principale">
        <Link href="/#programmation">
          <span aria-hidden="true">01</span> Programmation
        </Link>
        <Link href="/activites/">
          <span aria-hidden="true">02</span> Activités
        </Link>
        <Link href="/contact/">
          <span aria-hidden="true">03</span> Contact
        </Link>
      </nav>
    </header>
    <main id="contenu">{children}</main>
    <footer className="site-footer">
      <div className="site-footer-name">
        <strong>{siteMetadata.title}</strong>
        <span>Pont-Croix · Cap Sizun</span>
      </div>
      <div className="site-footer-details">
        <a href={`mailto:${siteMetadata.contactEmail}`}>
          {siteMetadata.contactEmail}
        </a>
        <address>{siteMetadata.address}</address>
      </div>
    </footer>
  </div>
);

export default Layout;
