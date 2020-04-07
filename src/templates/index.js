import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import PageTransition from 'gatsby-plugin-page-transitions';
import {Link} from "gatsby"

const IndexPage = ({data,pageContext}) => {
  const {currentPage, isFirstPage,numberOfPages} = pageContext;
  const nextPage = `/trang-${currentPage +1}`;
  const prevPage = currentPage - 1 === 1 ? '/' : `/trang-${String(currentPage-1)}`;
  const isLastPage = currentPage === numberOfPages;

  return (
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
                 {!isFirstPage && (
                   <div className="pagination__item">
                     <Link to={prevPage} rel="prev" className="pagination__number">
                       Prev Page
                     </Link>
                   </div>
                 )}
                 {currentPage === 1 && (
                   <>
                   <div className="pagination__item">
                     <Link to="/" rel="current" className="pagination__number active">
                       {currentPage }
                     </Link>
                   </div>
                   <div className="pagination__item">
                     <Link to={nextPage} rel="nextPage" className="pagination__number">
                       {currentPage + 1}
                     </Link>
                   </div>
                   </>
                 )}
                 {currentPage === numberOfPages && (
                   <>
                   <div className="pagination__item">
                     <Link to={prevPage} rel="prevPage" className="pagination__number">
                       {currentPage - 1}
                     </Link>
                   </div>
                   <div className="pagination__item">
                     <Link to="/" rel="current" className="pagination__number active">
                       {currentPage }
                     </Link>
                   </div>
                   </>
                 )}
                 {((currentPage !== numberOfPages)&&(currentPage !== 1))  && (
                   <>
                   <div className="pagination__item">
                     <Link to={prevPage} rel="prevPage" className="pagination__number">
                       {currentPage - 1}
                     </Link>
                   </div>
                   <div className="pagination__item">
                     <Link to="/" rel="current" className="pagination__number active">
                       {currentPage }
                     </Link>
                   </div>
                   <div className="pagination__item">
                     <Link to={nextPage} rel="nextPage" className="pagination__number">
                       {currentPage +1}
                     </Link>
                   </div>
                   </>
                 )}
                 {!isLastPage && (
                   <div className="pagination__item">
                     <Link to={nextPage} rel="next" className="pagination__number">
                       Next Page
                     </Link>
                   </div>
                 )}
               </div>
            </div>
    </Layout>
  </PageTransition>
  )
}
export default IndexPage
