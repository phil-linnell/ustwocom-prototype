import React from "react";
import Layout from "../components/layout";
import cssClass from "./join.module.css";
import cssClassBlog from "./blog.module.css";

export default () => (
  <Layout active="join" noNav>
    <h1>Careers</h1>
    <div className={cssClassBlog.blogFilterJoin}>
      <div className={cssClassBlog.category}>Category: <span>ALL</span></div>
      <div className={cssClassBlog.search}>Search: <input /></div>
    </div>
    <div className={cssClass.wrapper}>
      <div className={cssClass.studios}>
        <h2>Studios</h2>
        <div className={cssClass.studiosWrapper}>
          <div>
            <h3>London</h3>
            <ul>
              <li>Design Principle</li>
              <li>People Assistant</li>
              <li>Service Designer (Contract)</li>
              <li>UX Product Designer</li>
              <li>CFO & Company Secretary</li>
            </ul>
            <h3>Malmo</h3>
            <ul>
              <li>Senior Developer</li>
              <li>Mobile Developer</li>
              <li>Mid / Senior UX Designer</li>
              <li>Design Director</li>
            </ul>
          </div>
          <div>
            <h3>New York</h3>
            <ul>
              <li>Tech Director</li>
              <li>Senior Immersive Designer</li>
              <li>2D Game Artist (Freelance)</li>
            </ul>
            <h3>Sydney</h3>
            <ul>
              <li>Talent Aquisition Coach</li>
              <li>Agile Coach</li>
            </ul>
          </div>
          <div>
            <h3>Lisbon</h3>
            <ul>
              <li>Tech Lead</li>
              <li>QA Automation Engineer</li>
            </ul>
            <h3>Tokyo</h3>
            <ul>
              <li>Senior UX Designer</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={cssClass.games}>
        <h2>Games</h2>
        <ul>
          <li>Lead Programmer</li>
          <li>Lead Games Designer</li>
        </ul>
      </div>
      <div className={cssClass.adventures}>
        <h2>Adventure</h2>
        <ul>
          <li>???</li>
        </ul>
      </div>
    </div>
  </Layout>
);
