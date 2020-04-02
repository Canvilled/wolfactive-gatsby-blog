import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import PostItems from "../components/PostItems";

const IndexPage = () => (
  <Layout>
    <SEO title="Blog Home" />
    <PostItems />
  </Layout>
)

export default IndexPage
