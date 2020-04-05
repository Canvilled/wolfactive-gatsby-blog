import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import PageTransition from 'gatsby-plugin-page-transitions';
import {Link} from "gatsby"

export default ({pageContext}) =>(
  <PageTransition>
    <Layout>
      <SEO title="Desgin"/>
      <h2 className="title--section text--center my-15">Chuyên mục: DESGIN</h2>
        <div className="row-divide my-50 pageTemplate--contain">
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
                     <Link to={index === 0 ? '/graphical-design' : `/graphical-design/trang-${index + 1}`} className="pagination__number">
                       {index + 1}
                     </Link>
                   </div>
              ))}
            </div>
         </div>
    </Layout>
  </PageTransition>
)
