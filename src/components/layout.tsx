import * as React from "react";
import { Link } from "gatsby";
import Matomo from "./matomo";
import { StaticImage } from "gatsby-plugin-image";

const Layout = ({ location, title, children }) => {
  const isRootPath = location.pathname === "/";
  let header;

  if (isRootPath) {
    header = (
      <div className="main-heading">
        <div className="logo">
          <Link to="/">
            <StaticImage
              src="../images/logo.png"
              alt="Le Cèdre bleu"
              width={150}
            />
          </Link>
        </div>
      </div>
    );
  } else {
    header = (
      <Link className="header-link-home" to="/">
        <StaticImage src="../images/logo.png" alt="Le Cèdre bleu" width={80} />
      </Link>
    );
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <Matomo />
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        Le Cèdre bleu | contact@lecedrebleu-px.fr
        <br />
        24bis boulevard général de Gaulle, 29790 Pont-Croix
      </footer>
    </div>
  );
};

export default Layout;
