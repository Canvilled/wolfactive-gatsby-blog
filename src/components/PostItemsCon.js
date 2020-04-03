import React from "react";
import {graphql, StaticQuery, Link} from "gatsby";

const PostItemsDes = () =>{
   return (
     <div className="row-divide my-50">
     <StaticQuery query={graphql`
                         {
                    allWordpressWpBlogs(sort: {fields: date, order: DESC}, filter: {blogsCat: {eq: 10}}) {
                      edges {
                        node {
                          id
                          title
                          slug
                          content
                          date(formatString: "DD,MMMM, YYYY")
                          featured_media {
                            source_url
                          }
                        }
                      }
                    }
                  }
      `} render={props => props.allWordpressWpBlogs.edges.map(blogItem =>(
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
      ))} />
      </div>
   )
}
export default PostItemsDes;
