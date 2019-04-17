import React from "react";
import Layout from "../../components/layout";
import SecondaryNav from "../../components/secondary-nav";

export default () => (
  <Layout active="studios">
    <SecondaryNav parent="studios" active="/studios/our-studios" replace="Malmo" />
    <h1>Malmo</h1>
  </Layout>
);
