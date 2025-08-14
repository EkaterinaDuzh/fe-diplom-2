/* eslint-disable-next-line no-unused-vars */
import React from "react";
import MainAbout from "./MainAbout/MainAbout.jsx";
import MainWork from "./MainWork/MainWork.jsx";
import MainFeedback from "./MainFeedback/MainFeedback.jsx";
import "./Main.css";

function Main() {
  return (
    <main className="main">
      <MainAbout />
      <MainWork />
      <MainFeedback />
    </main>
  );
}

export default Main;