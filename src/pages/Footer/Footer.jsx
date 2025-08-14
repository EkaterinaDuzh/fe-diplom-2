/* eslint-disable-next-line no-unused-vars */
import React from "react";
import FooterContact from "./FooterContact/FooterContact.jsx";
import FooterSubscribe from "./FooterSubscribe/FooterSubscribe.jsx";
import FooterCopyright from "./FooterCopyright/FooterCopyright.jsx";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer" id="contacts">
      <div className="container footer-container">
        <FooterContact />
        <FooterSubscribe />
      </div>
      <div className="footer-decorate-line"></div>
      <FooterCopyright />
    </footer>
  );
}

export default Footer;