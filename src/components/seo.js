/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title, keywords, image, slug}) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            author
            url
          }
        }
      }
    `
  )

  const metaDescription = description;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:image`,
          content: image,
        },
        {
          name: `keywords`,
          content: keywords,
        },
        {
          name: `robots`,
          content: `index,follow`,
        },
        {
          property:`og:image`,
          content: image,
        },
        {
          property:`og:type`,
          content: `article`,
        },
        {
          property:`og:url`,
          content: `${site.siteMetadata.url}${slug}`,
        },
        {
          name: `google-site-verification`,
          content: `Ts-mhqfK6lCO3Uf3l0sUPcSjUb_k9uA3uMwUvNdWCck`,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `vi`,
  meta: [],
  description: ``,
  slug:``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  keywords: PropTypes.string,
  slug: PropTypes.string,
}

export default SEO
