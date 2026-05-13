import type { Metadata } from "next";
import "@fontsource-variable/montserrat";
import "@fontsource/merriweather";
import "prismjs/themes/prism.css";
import "../src/normalize.css";
import "../src/style.css";
import { siteMetadata } from "../lib/site";

export const metadata: Metadata = {
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`,
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    type: "website",
  },
  twitter: {
    card: "summary",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
