import React from "react";
import Layout from "../../components/layout";
import SecondaryNav from "../../components/secondary-nav";

export default () => (
  <Layout active="work">
    <SecondaryNav parent="studios" active="/studios/work" />
    <h1>Immersive Experiences</h1>
  </Layout>
);
