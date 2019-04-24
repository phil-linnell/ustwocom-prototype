import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import cssClass from "./index.module.css";
import Deepmind from "../images/deepmind.jpg";

const IndexPage = () => (
  <Layout noNav>
    <div className={cssClass.feature}>
      <img src={Deepmind} alt="" style={{ width: `100%` }} />
    </div>
    <div className={cssClass.c2aWrapper}>
      <div className={cssClass.c2a}>
        <Link to="/studios/">
          <div className={cssClass.tag}>Studios</div>
          <h2>What can we do for you?</h2>
          <p>Digital transformation, immersive experiences, auto, games</p>
        </Link>
      </div>
      <div className={cssClass.c2a}>
        <Link to="/games/">
          <div className={cssClass.tag}>Games</div>
          <h2>We create our own Games</h2>
          <p>Our team, awards, news, careers</p>
        </Link>
      </div>
      <div className={cssClass.c2a}>
        <Link to="/adventure/">
          <div className={cssClass.tag}>Adventure</div>
          <h2>We invest in companies</h2>
          <p>A path for companies to own their future</p>
        </Link>
      </div>
      <div className={cssClass.c2a}>
        <Link to="/foundation/">
          <div className={cssClass.tag}>Foundation</div>
          <h2>Our Foundation</h2>
          <p>Focus on access to and mobility within the creative industries.</p>
        </Link>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
