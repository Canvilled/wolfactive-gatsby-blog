import { Link } from "gatsby"
import React from "react"

const isActive = ({ isCurrent }) =>{
  return{ className: isCurrent ? 'active' : ''}
}
const NavLink = props => <Link getProps={isActive} {...props} />
const Bottom = () =>{
  return(
      <div className="Bottom--Nav">
      <div className="Bottom--Nav__contain container">
        <div className="Bottom--Nav__list">
          <div className="Bottom--Nav__item">
            <h3>
               <NavLink to="/">Tất cả</NavLink>
            </h3>
          </div>
          <div className="Bottom--Nav__item">
           <h2><NavLink to="/web-development">Development</NavLink></h2>
          </div>
          <div className="Bottom--Nav__item">
          <h2>
            <NavLink to="/graphical-design">Design</NavLink>
          </h2>
          </div>
          <div className="Bottom--Nav__item">
          <h3>
            <NavLink to="/content">Content</NavLink>
          </h3>
          </div>
          <div className="Bottom--Nav__item">
          <h3>
            <NavLink to="/seo">SEO</NavLink>
          </h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bottom;
