import * as React from "react";
import { Link } from "gatsby";
import Matomo from "./matomo";

const Layout = ({ location, title, children }) => {
  const isRootPath = location.pathname === "/";
  let header;

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    );
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
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
