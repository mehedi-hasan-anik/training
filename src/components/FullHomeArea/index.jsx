import React from "react";
import "./FullHomeArea.css";
import Header from "../Header";
import BannerArea from "../BannerArea";
import AboutArea from "../AboutArea";
import Action from "../Action";

function index() {
  return (
    <div>
      <Header />
      <BannerArea />
      <AboutArea />
      <Action />
    </div>
  );
}

export default index;
