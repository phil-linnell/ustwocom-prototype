import React from "react";
import Layout from "../../components/layout";
import SecondaryNav from "../../components/secondary-nav";
import LondonContent from "../../images/london-content.jpg";

export default () => (
  <Layout active="studios">
    <SecondaryNav parent="studios" active="/studios/our-studios" replace="London" />
    <h1>London</h1>
    <img src={LondonContent} style={{ width: `100%` }} alt=""  />
  </Layout>
);
