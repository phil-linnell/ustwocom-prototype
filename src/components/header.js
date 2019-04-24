import { Link } from "gatsby";
import React from "react";
import classnames from "classnames";
import cssClass from "./header.module.css";
import UstwoLogo from "../images/ustwo-logo";

const Header = ({ siteTitle, active, full }) => {
  const mainPages = ["studios", "games", "adventure", "foundation"];
  const renderMainNav = mainPages.map(item => {
    return (
      <li className={active === item && [cssClass.active]} key={item}>
        <Link to={`/${item}/`}>{item}</Link>
      </li>
    );
  });

  const classes = classnames(cssClass.header, {
    [cssClass.full]: full
  });

  return (
    <header className={classes}>
      <div className={cssClass.inner}>
        <h1>
          <Link to="/" className={cssClass.logo}>
            <UstwoLogo />
          </Link>
        </h1>
        <nav className={cssClass.mainNav}>
          <ul>
            {renderMainNav}
          </ul>
        </nav>
        <nav className={cssClass.secondNav}>
          <ul>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/about">About us</Link></li>
            <li><Link to="/join">Join us</Link></li>
            <li><Link to="/contact">Contact us</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
