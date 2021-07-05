import React from "react";
import "./AboutArea.css";
import lineDeck from "../image/line-dec.png";
import featuresFirstIcon from "../image/features-first-icon.png";
import AboutCol from "../AboutCol";
import CommonHeader from "../CommonHeader";

function AboutArea() {
  return (
    <div className="section" id="features">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="section-heading">
              <CommonHeader
                title1="Choose"
                title2="Program"
                image={lineDeck}
                details=" Training Studio is free CSS template for gyms and fitness
                centers. You are allowed to use this layout for your business
                website."
              />
            </div>
          </div>
          <div className="col-lg-6">
            <ul className="features-items">
              <AboutCol
                title="Basic Fitness"
                image={featuresFirstIcon}
                details="Please do not re-distribute this template ZIP file on any
                    template collection website. This is not allowed."
              />
              <AboutCol
                title="New Gym Training"
                image={featuresFirstIcon}
                details="If you wish to support TemplateMo website via PayPal, please
                    feel free to contact us. We appreciate it a lot."
              />
              <AboutCol
                title="Basic Muscle Course"
                image={featuresFirstIcon}
                details="Credit goes to Pexels website for images and video background used in this HTML template."
              />
            </ul>
          </div>

          <div className="col-lg-6">
            <ul className="features-items">
              <AboutCol
                title="Advanced Muscle Course"
                image={featuresFirstIcon}
                details="You may want to browse through Digital Marketing or Corporate HTML CSS templates on our website."
              />
              <AboutCol
                title="Yoga Training"
                image={featuresFirstIcon}
                details="This template is built on Bootstrap v4.3.1 framework. It is
                    easy to adapt the columns and sections."
              />
              <AboutCol
                title="Body Building Course"
                image={featuresFirstIcon}
                details="Suspendisse fringilla et nisi et mattis. Curabitur sed
                    finibus nisi. Integer nibh sapien, vehicula et auctor."
              />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutArea;
