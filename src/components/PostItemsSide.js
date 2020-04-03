import React from "react";
import {graphql, StaticQuery, Link} from "gatsby";

const PostItemsSide = () =>{
   return (
     <div className="sidebar--single">
     <StaticQuery query={graphql`{
              allWordpressWpBlogs(sort: {fields: date, order: DESC},limit: 6) {
                edges {
                  node {
                    id
                    title
                    slug
                    date(formatString: "DD,MMMM, YYYY")
                    featured_media{
                      source_url
                      }
                    }
                }
              }
            }
      `} render={props => props.allWordpressWpBlogs.edges.map(blogItem =>(
          <div key={blogItem.node.id} className="Post__item-single mbt-25" >
            <Link to={`/${blogItem.node.slug}`} className="Post__item-single-img d--block">
              <img src={blogItem.node.featured_media.source_url} alt={blogItem.node.slug}/>
            </Link>
            <div className="Post__item-single-content">
              <div className="date">
                <i className="far fa-calendar-alt"></i> {blogItem.node.date}
              </div>
              <Link className="Post__item-single-btn btn text--dark" to={`/${blogItem.node.slug}`} className="d--block">
                <h4 className="Post__item-single-title title--item">
                  {blogItem.node.title}
                </h4>
              </Link>
              </div>
          </div>
      ))} />
      </div>
   )
}
export default PostItemsSide;