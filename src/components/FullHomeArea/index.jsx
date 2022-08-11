import React from "react";
import AboutArea from "../AboutArea";
import Action from "../Action";
import BannerArea from "../BannerArea";
import Classes from "../Classes";
import Contact from "../Contact";
import Footer from "../Footer";
import Header from "../Header";
import Trainers from "../Trainers";
import "./FullHomeArea.css";

function index() {
  return (
    <div>
      <Header />
      <BannerArea />
      <AboutArea />
      <Action />
      <Classes />
      {/* <FakeSection /> */}
      <Trainers />
      <Contact />
      <Footer />
    </div>
  );
}

export default index;
