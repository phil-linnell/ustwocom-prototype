import React from "react";
import Layout from "../components/layout";
import AboutImage from "../images/about-us.jpg";

export default () => (
  <Layout active="about" noNav>
    <img src={AboutImage} style={{ width: `100%` }} alt=""  />
  </Layout>
);
