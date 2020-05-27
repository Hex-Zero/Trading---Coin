import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          key
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <h1>{data.site.siteMetadata.key}</h1>

      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage
