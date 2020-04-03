import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import PostItems from "../components/PostItems";
import PageTransition from 'gatsby-plugin-page-transitions';

const IndexPage = () => (
<PageTransition>
  <Layout>
    <SEO title="Blog Home" />
    <PostItems />
  </Layout>
</PageTransition>
)

export default IndexPage
