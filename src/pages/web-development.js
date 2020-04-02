import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import PostItemsDev from "../components/PostItemsDev";

export default () =>(
  <Layout>
  <SEO title="Web Development"/>
  <h2 className="title--section text--center my-15">Chuyên mục: WEB DEVDEVELOPMENT</h2>
  <PostItemsDev />
</Layout>
)
