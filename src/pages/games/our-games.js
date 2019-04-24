import React from "react";
import Layout from "../../components/layout";
import SecondaryNav from "../../components/secondary-nav";
import GamesGames from "../../images/games-games.jpg";

export default () => (
  <Layout active="games">
    <SecondaryNav parent="games" active="/games/our-games" />
    <img src={GamesGames} style={{ width: `100%` }} alt=""  />
  </Layout>
);
