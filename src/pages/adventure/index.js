import React from "react";
import Layout from "../../components/layout";
import SecondaryNav from "../../components/secondary-nav";
import AdventureImage from "../../images/adventure.jpg";

export default () => (
  <Layout active="adventure">
    <SecondaryNav parent="adventure" active="/adventure/" />
    <img src={AdventureImage} alt="" style={{ width: `100%` }} />
  </Layout>
);
