import React from "react";
import Layout from "../../components/layout";
import SecondaryNav from "../../components/secondary-nav";
import StudiosCaseStudies from "../../images/studios-case-studies.jpg";

export default () => (
  <Layout active="studios">
    <SecondaryNav parent="studios" active="/studios/" />
    <h1>Our Work</h1>
    <img src={StudiosCaseStudies} style={{ width: `100%` }} alt=""  />
  </Layout>
);
