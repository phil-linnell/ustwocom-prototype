import React from "react";
import Layout from "../../components/layout";
import SecondaryNav from "../../components/secondary-nav";

export default () => (
  <Layout active="studios">
    <SecondaryNav parent="studios" active="/studios/our-studios" />
    <h1>Our Studios</h1>
  </Layout>
);
