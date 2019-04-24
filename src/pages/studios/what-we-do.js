import React from "react";
import Layout from "../../components/layout";
import SecondaryNav from "../../components/secondary-nav";

export default () => (
  <Layout active="studios">
    <SecondaryNav parent="studios" active="/studios/what-we-do" />
    <h1>What we do</h1>
  </Layout>
);
