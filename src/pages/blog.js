import React from "react";
import Layout from "../components/layout";
import BlogPosts from "../images/blog.jpg";

export default () => (
  <Layout active="blog" noNav>
    <h1>Blog</h1>
    <img src={BlogPosts} style={{ width: `100%` }} alt=""  />
  </Layout>
);
