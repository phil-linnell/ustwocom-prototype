import React from "react";
import Layout from "../../components/layout";
import SecondaryNav from "../../components/secondary-nav";
import cssClass from "./games.module.css";

export default () => (
  <Layout active="games" full className={cssClass.games}>
    <SecondaryNav parent="games" active="/games/" />
    <h1>Games</h1>
  </Layout>
);
