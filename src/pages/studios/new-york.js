import React from "react";
import Layout from "../../components/layout";
import SecondaryNav from "../../components/secondary-nav";

export default () => (
  <Layout active="studios">
    <SecondaryNav parent="studios" active="/studios/our-studios" replace="New York" />
    <h1>New York</h1>
  </Layout>
);
