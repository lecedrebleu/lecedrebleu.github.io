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
}) => {
  let header;

  if (isRootPath) {
    header = (
      <div className="main-heading">
        <div className="logo">
          <Link href="/">
            <img src="/logo.png" alt={siteMetadata.title} width={150} />
          </Link>
        </div>
      </div>
    );
  } else {
    header = (
      <Link className="header-link-home" href="/">
        <img src="/logo.png" alt={siteMetadata.title} width={80} />
      </Link>
    );
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <Matomo />
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        {siteMetadata.title} | {siteMetadata.contactEmail}
        <br />
        {siteMetadata.address}
      </footer>
    </div>
  );
};

export default Layout;
