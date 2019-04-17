import React from "react";
import Layout from "../../components/layout";
import SecondaryNav from "../../components/secondary-nav";

export default () => (
  <Layout active="studios">
    <SecondaryNav parent="games" active="/games/our-games" />
    <h1>Our Games</h1>
  </Layout>
);
