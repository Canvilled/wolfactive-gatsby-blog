import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import PostItemsSeo from "../components/PostItemsSeo";

export default () =>(
  <Layout>
  <SEO title="SEO"/>
  <h2 className="title--section text--center my-15">Chuyên mục: SEO</h2>
  <PostItemsSeo />
</Layout>
)
