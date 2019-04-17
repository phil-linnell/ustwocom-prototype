import React from "react";
import Layout from "../../components/layout";
import SecondaryNav from "../../components/secondary-nav";

export default () => (
  <Layout active="adventure">
    <SecondaryNav parent="adventure" active="/adventure/" />
    <h1>Adventure</h1>
  </Layout>
);
