import React from "react";
import Layout from "../../components/layout";
import SecondaryNav from "../../components/secondary-nav";

export default () => (
  <Layout active="adventure">
    <SecondaryNav parent="adventure" active="/adventure/portfolio" />
    <h1>Portfolio</h1>
  </Layout>
);
