import React from "react";
import Layout from "../../components/layout";
import SecondaryNav from "../../components/secondary-nav";

export default () => (
  <Layout active="games">
    <SecondaryNav parent="games" active="/games/our-games" />
    <h1>Our Games</h1>
  </Layout>
);
