import { Link } from "gatsby";
import React from "react";

const Bottom = () =>{
  return(
      <div className="Bottom--Nav">
      <div className="Bottom--Nav__contain container">
        <div className="Bottom--Nav__list">
          <div className="Bottom--Nav__item">
            <h3>
               <Link to="/">Tất cả</Link>
            </h3>
          </div>
          <div className="Bottom--Nav__item">
           <h2><Link to="/web-development">Web Development</Link></h2>
          </div>
          <div className="Bottom--Nav__item">
          <h2>
            <Link to="/graphical-design">Graphical Design</Link>
          </h2>
          </div>
          <div className="Bottom--Nav__item">
          <h3>
            <Link to="/content">Content</Link>
          </h3>
          </div>
          <div className="Bottom--Nav__item">
          <h3>
            <Link to="/seo">SEO</Link>
          </h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bottom;
