import React from "react";
import Layout from "../../components/layout";
import SecondaryNav from "../../components/secondary-nav";

export default () => (
  <Layout active="games">
    <SecondaryNav parent="games" active="/games/team" />
    <h1>Team</h1>
  </Layout>
);
