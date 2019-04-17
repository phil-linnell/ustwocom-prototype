import React from "react";
import Layout from "../../components/layout";
import SecondaryNav from "../../components/secondary-nav";

export default () => (
  <Layout active="studios">
    <SecondaryNav parent="studios" active="/studios/our-studios" replace="Sydney" />
    <h1>Sydney</h1>
  </Layout>
);
