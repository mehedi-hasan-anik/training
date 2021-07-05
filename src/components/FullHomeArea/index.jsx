import React from "react";
import "./FullHomeArea.css";
import Header from "../Header";
import BannerArea from "../BannerArea";
import AboutArea from "../AboutArea";

function index() {
  return (
    <div>
      <Header />
      <BannerArea />
      <AboutArea />
    </div>
  );
}

export default index;
