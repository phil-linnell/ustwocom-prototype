import React from "react";
import Layout from "../components/layout";
import ContactImage from "../images/contact.jpg";

export default () => (
  <Layout active="contact" noNav>
    <img src={ContactImage} style={{ width: `100%` }} alt=""  />
  </Layout>
);
