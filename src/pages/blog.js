import React from "react";
import Layout from "../components/layout";
import BlogPosts from "../images/blog.jpg";
import cssClass from "./blog.module.css";

export default () => (
  <Layout active="blog">
    <div className={cssClass.blogFilter}>
      <div className={cssClass.category}>Category: <span>ALL</span></div>
      <div className={cssClass.search}>Search: <input /></div>
    </div>
    <img src={BlogPosts} style={{ width: `100%` }} alt=""  />
  </Layout>
);
