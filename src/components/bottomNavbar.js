import { Link } from "gatsby";
import React from "react";

const Bottom = () =>{
  return(
      <div className="Bottom--Nav">
      <div className="Bottom--Nav__contain container">
        <div className="Bottom--Nav__list">
          <div className="Bottom--Nav__item">
           <Link to="/">Tất cả</Link>
          </div>
          <div className="Bottom--Nav__item">
           <Link to="/web-development">Web Development</Link>
          </div>
          <div className="Bottom--Nav__item">
          <Link to="/graphical-design">Graphical Design</Link>
          </div>
          <div className="Bottom--Nav__item">
          <Link to="/content">Content</Link>
          </div>
          <div className="Bottom--Nav__item">
          <Link to="/seo">SEO</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bottom;
