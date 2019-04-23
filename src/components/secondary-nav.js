import React from "react";
import classnames from "classnames";
import { Link } from "gatsby";
import cssClass from "./secondary-nav.module.css";

const studiosNav = [{
  slug: "/studios/",
  name: "What we do"
},{
  slug: "/studios/work",
  name: "Work",
  sub: [{
    slug: "/studios/auto",
    name: "Auto & Mobility"
  },{
    slug: "/studios/digital-transformation",
    name: "Digital Transformation"
  },{
    slug: "/studios/health",
    name: "Health"
  },{
    slug: "/studios/immersive",
    name: "Immersive Experiences"
  }]
},{
  slug: "/studios/our-studios",
  name: "Our Studios",
  sub: [{
    slug: "/studios/london",
    name: "London"
  },{
    slug: "/studios/malmo",
    name: "Malmo"
  },{
    slug: "/studios/new-york",
    name: "New York"
  },{
    slug: "/studios/sydney",
    name: "Sydney"
  }]
}];

const gamesNav = [{
  slug: "/games/",
  name: "What we do"
},{
  slug: "/games/our-games",
  name: "Our Games"
},{
  slug: "/games/team",
  name: "Our Team"
},{
  slug: "/games/faqs",
  name: "FAQs"
}];

const adventureNav = [{
  slug: "/adventure/",
  name: "Approach"
},{
  slug: "/adventure/portfolio",
  name: "Portfolio"
},{
  slug: "/adventure/faqs",
  name: "FAQs"
}];

const foundationNav = [{
  slug: "/foundation/",
  name: "About"
}];

const NavStudios = ({ active, parent, replace }) => {
  let navItems;
  if (parent === "studios") {
    navItems = studiosNav
  }
  if (parent === "games") {
    navItems = gamesNav
  }
  if (parent === "adventure") {
    navItems = adventureNav
  }
  if (parent === "foundation") {
    navItems = foundationNav
  }

  return (
    <nav className={cssClass.secondaryNav}>
      <ul>
        {
          navItems.map(item => {
            const classes = classnames({
              [cssClass.active]: item.slug === active,
              [cssClass.subNavSelect]: item.sub
            });

            return (
              <li className={classes}>
                <Link to={item.slug}>{item.name}</Link>
                {
                  item.sub && (
                    <ul className={cssClass.subNav}>
                      {
                        item.sub.map(item => (
                          <li><Link to={item.slug}>{item.name}</Link></li>
                        ))
                      }
                    </ul>
                  )
                }
              </li>
            )
          })
        }
      </ul>
    </nav>
  );
}
export default NavStudios;
