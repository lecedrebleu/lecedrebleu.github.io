import * as React from "react";
import { Link, PageProps, graphql } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";
import Newsletter from "../components/newsletter";
import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image";

interface PostImage {
  childImageSharp: {
    gatsbyImageData: ImageDataLike;
  };
}

interface Post {
  excerpt: string;
  frontmatter: {
    title: string;
    date: string;
    tags: string[];
    shortDescription?: string;
    description?: string;
    reservationEnabled?: boolean;
    image?: PostImage;
  };
  fields: {
    slug: string;
  };
}

interface BlogIndexProps {
  allMarkdownRemark: {
    nodes: Post[];
  };
  site: {
    siteMetadata?: {
      title?: string;
    };
  };
}

const formatter = new Intl.DateTimeFormat("fr-FR", {
  weekday: "short",
  year: "numeric",
  month: "long",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
});

const BlogIndex = ({ data, location }: PageProps<BlogIndexProps>) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const posts = data.allMarkdownRemark.nodes;

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <p>Aucun prochain événement n'est prévu pour l'instant.</p>
      </Layout>
    );
  }

  const beforeNowIndex = posts.findIndex(
    (p) => new Date(p.frontmatter.date) < new Date()
  );

  let pastEvents: Post[], futureEvents: Post[];
  if (beforeNowIndex === 0 || beforeNowIndex === -1) {
    pastEvents = posts;
    futureEvents = [];
  } else {
    [futureEvents, pastEvents] = [
      posts.slice(0, beforeNowIndex).reverse(),
      posts.slice(beforeNowIndex),
    ];
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Newsletter />
      {futureEvents && futureEvents.length > 0 && (
        <div>
          <h1>Programmation</h1>
          <ol style={{ listStyle: `none` }}>
            {futureEvents.map((post) => (
              <li key={post.fields.slug}>
                <EventItem
                  title={post.frontmatter.title || post.fields.slug}
                  slug={post.fields.slug}
                  tags={post.frontmatter.tags}
                  date={new Date(post.frontmatter.date)}
                  description={
                    post.frontmatter.shortDescription ||
                    post.frontmatter.description ||
                    post.excerpt
                  }
                  image={post.frontmatter.image}
                />
              </li>
            ))}
          </ol>
        </div>
      )}
      {pastEvents && pastEvents.length > 0 && (
        <div>
          <h3>Évènements passés</h3>
          <ol style={{ listStyle: `none` }}>
            {pastEvents.map((post) => (
              <li key={post.fields.slug}>
                <EventItem
                  title={post.frontmatter.title || post.fields.slug}
                  slug={post.fields.slug}
                  tags={post.frontmatter.tags}
                  date={new Date(post.frontmatter.date)}
                  description={
                    post.frontmatter.shortDescription ||
                    post.frontmatter.description ||
                    post.excerpt
                  }
                  image={post.frontmatter.image}
                />
              </li>
            ))}
          </ol>
        </div>
      )}
    </Layout>
  );
};

function EventItem({
  title,
  slug,
  tags,
  date,
  description,
  image,
}: {
  title: string;
  slug: string;
  tags: string[];
  date: Date;
  description: string;
  image?: PostImage;
}) {
  const featuredImg = getImage(image?.childImageSharp?.gatsbyImageData || null);
  return (
    <article className="post-list-item-container">
      {featuredImg && (
        <div className="post-list-item-image">
          <Link to={slug}>
            <GatsbyImage
              image={featuredImg}
              alt={`Affiche de l'événement ${title}`}
            />
          </Link>
        </div>
      )}
      <div className="post-list-item">
        <header>
          <h2>
            <Link to={slug}>
              <span>{title}</span>
            </Link>
          </h2>
          <p>
            <small>{formatter.format(date)}</small>
          </p>
          <p>
            <small>{tags.join(" / ")}</small>
          </p>
        </header>
        <section>
          <p
            dangerouslySetInnerHTML={{
              __html: description,
            }}
          />
        </section>
      </div>
    </article>
  );
}

export default BlogIndex;

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Programmation" />;

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }, limit: 6) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date
          title
          description
          tags
          shortDescription
          image {
            childImageSharp {
              gatsbyImageData(width: 200)
            }
          }
        }
      }
    }
  }
`;
