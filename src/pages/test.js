import React from "react";
import { Link } from "gatsby"
import Layout from "../components/layout"
const Test = () =>(
  <Layout>
    <div>
      <h1>This is test page!</h1>
      <Link to="/">Home</Link>
    </div>
  </Layout>
)

export default Test;
