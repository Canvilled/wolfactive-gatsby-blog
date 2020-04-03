import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import PostItemsDes from "../components/PostItemsDes";
import PageTransition from 'gatsby-plugin-page-transitions';

export default () =>(
<PageTransition>
    <Layout>
      <SEO title="Graphical Design"/>
      <h2 className="title--section text--center my-15">Chuyên mục: GRAPHICAL DESIGN</h2>
      <PostItemsDes />
    </Layout>
</PageTransition>
)
