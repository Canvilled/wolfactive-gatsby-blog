import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import PostItemsSeo from "../components/PostItemsSeo";
import PageTransition from 'gatsby-plugin-page-transitions';

export default () =>(
<PageTransition>
    <Layout>
      <SEO title="SEO"/>
      <h2 className="title--section text--center my-15">Chuyên mục: SEO</h2>
      <PostItemsSeo />
    </Layout>
</PageTransition>
)
