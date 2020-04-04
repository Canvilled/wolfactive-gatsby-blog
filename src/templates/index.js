import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import PostItems from "../components/PostItems";
import PageTransition from 'gatsby-plugin-page-transitions';

const IndexPage = () => (
<PageTransition>
  <Layout>
    <SEO
      title="Blog Home Wolfactive"
      description="Với nhiều năm kinh nghiệm trong lĩnh vực thiết kế, lập trình, tối ưu website...Wolfactive đã thực hiện hơn 300+ dự án lớn nhỏ cho các đối tác trong và ngoài nước. Chúng tôi tự tin mang đến giá trị khác biệt cho dự án của bạn!"
      image="http://blog.wolfactive.net/icons/icon-256x256.png"
      keywords="Thiết kế web chuẩn SEO, Thiết kế đồ họa, Branding, Thiết kế logo, Graphic Design, Web Develop, Lập trình webiste, Thiết kế website, lập trình web, Wolfactive, Thiết kế web Wolfactive, Thiết kế đồ họa Wolfactive, Thiết kế Logo Wolfactive, Web Development and Graphic Design Wolfactive, Team Freelancer Wolfactive"
       />
    <PostItems />
  </Layout>
</PageTransition>
)

export default IndexPage
