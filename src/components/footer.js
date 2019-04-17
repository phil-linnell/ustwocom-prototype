import React from "react";
import cssClass from "./footer.module.css";

const Footer = () => (
  <footer className={cssClass.wrapper}>
    <div className={cssClass.inner}>
      © ustwo {new Date().getFullYear()}
    </div>
  </footer>
)

export default Footer;
