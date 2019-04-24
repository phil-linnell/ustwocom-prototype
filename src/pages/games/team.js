import React from "react";
import Layout from "../../components/layout";
import SecondaryNav from "../../components/secondary-nav";
import GamesTeam from "../../images/games-team.jpg";

export default () => (
  <Layout active="games">
    <SecondaryNav parent="games" active="/games/team" />
    <h1>Team</h1>
    <img src={GamesTeam} style={{ width: `100%` }} alt=""  />
  </Layout>
);
