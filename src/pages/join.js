import React from "react";
import Layout from "../components/layout";
import JoinUsImage from "../images/join-us.jpg";

export default () => (
  <Layout active="join" noNav>
    <img src={JoinUsImage} style={{ width: `100%` }} alt=""  />
  </Layout>
);
