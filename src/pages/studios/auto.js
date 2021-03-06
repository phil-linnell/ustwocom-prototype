import React from "react";
import Layout from "../../components/layout";
import SecondaryNav from "../../components/secondary-nav";
import cssClass from "./studios.module.css";

export default () => (
  <Layout active="studios" full className={cssClass.auto}>
    <SecondaryNav parent="studios" active="/studios/work" />
  </Layout>
);
