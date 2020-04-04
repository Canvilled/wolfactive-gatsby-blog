import { Link } from "gatsby";
import React, { Component } from "react";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false
    };
  }
  handleToggle(e) {
    e.preventDefault();
    this.setState({
      isExpanded: !this.state.isExpanded
    });
  }
  render() {
  const { isExpanded } = this.state;
  return (
          <>
            <button
            className="btn d--none dp--block"
            onClick={e => this.handleToggle(e)} aria-label="Navbar Button Mobile">
            <i className="fas fa-bars navbar--icon text--light"></i></button>
            <ul className={`header__navbar ${isExpanded ? "is-expanded" : ""}`}>
              <li className="header__navbar-item">
                <a href="http://wolfactive.net/" className="navbar__item-link text--light">Home</a>
              </li>
              <li className="header__navbar-item">
                <a href="http://wolfactive.net/pricing/" className="navbar__item-link text--light">Pricing</a>
              </li>
              <li className="header__navbar-item active">
                <Link to="/" className="navbar__item-link text--light">Blog</Link>
              </li>
              <li className="header__navbar-item">
                <a href="http://wolfactive.net/news/" className="navbar__item-link text--light">News</a>
              </li>
            </ul>
          </>
        );
      }
  }
export default Navbar;
