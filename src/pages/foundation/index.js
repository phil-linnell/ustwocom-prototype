import React from "react";
import Layout from "../../components/layout";
import SecondaryNav from "../../components/secondary-nav";

export default () => (
  <Layout active="foundation">
    <SecondaryNav parent="foundation" active="/foundation/" />
    <h1>Foundation</h1>
  </Layout>
);
