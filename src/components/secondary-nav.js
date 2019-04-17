import React from "react";
import classnames from "classnames";
import { Link } from "gatsby";
import cssClass from "./secondary-nav.module.css";

const studiosNav = [{
  slug: "/studios/",
  name: "What we do"
},{
  slug: "/studios/work",
  name: "Case Studies"
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
},{
  slug: "/join",
  name: "Careers"
}];

const gamesNav = [{
  slug: "/games/",
  name: "About"
},{
  slug: "/games/our-games",
  name: "Our Games"
},{
  slug: "/games/faqs",
  name: "FAQs"
},{
  slug: "/games/team",
  name: "Team"
},{
  slug: "join",
  name: "Careers"
}];

const adventureNav = [{
  slug: "/adventure/",
  name: "About"
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
                <Link to={item.slug}>{(replace && item.sub) ? replace : item.name}</Link>
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
