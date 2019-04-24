import React from "react";
import { StaticQuery, graphql } from "gatsby";
import classnames from "classnames";
import Header from "./header";
import Footer from "./footer";
import "./layout.css";
import cssClass from "./layout.module.css";

const Layout = ({ children, active, className, full, noNav }) => {
  const classes = classnames(cssClass.container, className, {
    [cssClass.noNav]: noNav
  });

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <div className={classes}>
          <Header
            siteTitle={data.site.siteMetadata.title}
            active={active}
            full={!!full}
          />
          <div className={cssClass.wrapper}>
            <main className={cssClass.inner}>
              {children}
            </main>
          </div>
          <Footer />
        </div>
      )}
    />
  );
}

export default Layout;
