import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import PageTransition from 'gatsby-plugin-page-transitions';
import {Link} from "gatsby"

const IndexPage = ({pageContext}) => (
<PageTransition>
  <Layout>
    <SEO
      title="Blog Home Wolfactive"
      description="Với nhiều năm kinh nghiệm trong lĩnh vực thiết kế, lập trình, tối ưu website...Wolfactive đã thực hiện hơn 300+ dự án lớn nhỏ cho các đối tác trong và ngoài nước. Chúng tôi tự tin mang đến giá trị khác biệt cho dự án của bạn!"
      image="http://blog.wolfactive.net/icons/icon-256x256.png"
      keywords="Wolfactive, Thiết kế web Wolfactive, Thiết kế logo Wolfactive, Thiết kế đồ họa Wolfactive"
       />  <div className="row-divide my-50 pageTemplate--contain">
           {pageContext.posts.map(blogItem =>(
             <div
               data-sal="slide-up"
               data-sal-delay="300"
               data-sal-easing="linear"
               key={blogItem.node.id} className="Post__item col-divide-4 col-divide-md-6 col-divide-sm-12 my-15">
               <Link to={`/${blogItem.node.slug}`} className="Post__item-img d--block">
                 <img data-src={blogItem.node.featured_media.source_url} alt={blogItem.node.slug} className="lazyload"/>
               </Link>
               <div className="Post__item-content">
                 <div className="date">
                   <i className="far fa-calendar-alt"></i> {blogItem.node.date}
                 </div>
                 <h4 className="Post__item-title title--item">
                   {blogItem.node.title}
                 </h4>
                 <Link className="Post__item-btn btn text--dark" to={`/${blogItem.node.slug}`}>
                   Đọc Tiếp
                 </Link>
                 </div>
             </div>
           ))}
          </div>
          <div className="pagination">
             <div className="pagination__container">
               {Array.from({length: pageContext.numberOfPages}).map((page,index)=>(
                    <div key={`dev-${index}`} className={index + 1 === pageContext.currentPage ? `pagination__item active` : `pagination__item`}>
                      <Link to={index === 0 ? '/' : `//trang-${index + 1}`} className="pagination__number">
                        {index + 1}
                      </Link>
                    </div>
               ))}
             </div>
          </div>
  </Layout>
</PageTransition>
)

export default IndexPage
