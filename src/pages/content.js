import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import PostItemsCon from "../components/PostItemsCon";
import PageTransition from 'gatsby-plugin-page-transitions';

export default () =>(
<PageTransition>
    <Layout>
      <SEO title="Content Maketing"/>
      <h2 className="title--section text--center my-15">Chuyên mục: CONTENT MAKETING</h2>
      <PostItemsCon />
    </Layout>
</PageTransition>
)
