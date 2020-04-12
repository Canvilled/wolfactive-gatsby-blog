import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import PageTransition from 'gatsby-plugin-page-transitions';
import {Link} from "gatsby"

export default ({data,pageContext}) =>{
  const {currentPage, isFirstPage,numberOfPages} = pageContext;
  const nextPage = `/content/trang-${currentPage +1}`;
  const prevPage = currentPage - 1 === 1 ? '/' : `/content/trang-${String(currentPage-1)}`;
  const isLastPage = currentPage === numberOfPages;
  return (
    <PageTransition>
      <Layout>
        <SEO title="Web Development"/>
        <h2 className="title--section text--center my-15">Chuyên mục: CONTENT</h2>
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
                  <h4 className="Post__item-title title--item" dangerouslySetInnerHTML={{__html: blogItem.node.title}}/>
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
                {((currentPage === 1 )&&(numberOfPages !== 1))&& (
                  <>
                  <div className="pagination__item">
                    <Link to="content" rel="current" className="pagination__number active">
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
                {((currentPage === numberOfPages)&&(currentPage !== 1)) && (
                  <>
                  <div className="pagination__item">
                    <Link to={prevPage} rel="prevPage" className="pagination__number">
                      {currentPage - 1}
                    </Link>
                  </div>
                  <div className="pagination__item">
                    <Link to="content" rel="current" className="pagination__number active">
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
                    <Link to="content" rel="current" className="pagination__number active">
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
