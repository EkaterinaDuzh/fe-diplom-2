/* eslint-disable-next-line no-unused-vars */
import React from "react";
import HeaderLogo from '../HeaderLogo/HeaderLogo.jsx';
import HeaderNav from '../HeaderNav/HeaderNav.jsx';
import HeaderTitle from '../HeaderTitle/HeaderTitle.jsx';
import HeaderWidget from '../HeaderWidget/HeaderWidget.jsx';
import HeaderProgressBar from '../HeaderProgressBar/HeaderProgressBar.jsx';
import bgImage from './img/header-base-image.png';
import './HeaderStart.css';

function HeaderStart() {
  const startBg = {
    backgroundImage: `url(${bgImage})`,
  }

  return (
    <header className="header" style={startBg}>
      <HeaderLogo />
      <HeaderNav />
      <div className="header-widget container">
        <HeaderTitle />
        <HeaderWidget />
      </div>
      <HeaderProgressBar />
    </header>
  );
}

export default HeaderStart;