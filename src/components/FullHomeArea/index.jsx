import React from "react";
import "./FullHomeArea.css";
import Header from "../Header";
import BannerArea from "../BannerArea";
import AboutArea from "../AboutArea";
import Action from "../Action";
import Classes from "../Classes";
import FakeSection from "../FakeSection";
import Trainers from "../Trainers";
import Contact from "../Contact";
import Footer from "../Footer";

function index() {
  return (
    <div>
      <Header />
      <BannerArea />
      <AboutArea />
      <Action />
      <Classes />
      <FakeSection />
      <Trainers />
      <Contact />
      <Footer />
    </div>
  );
}

export default index;
