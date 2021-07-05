import React from "react";
import "./AboutArea.css";
import lineDeck from "../image/line-dec.png";
import featuresFirstIcon from "../image/features-first-icon.png";

function AboutArea() {
  return (
    <div className="section" id="features">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="section-heading">
              <h2>
                Choose <em>Program</em>
              </h2>
              <img src={lineDeck} alt="waves" />
              <p>
                Training Studio is free CSS template for gyms and fitness
                centers. You are allowed to use this layout for your business
                website.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <ul className="features-items">
              <li className="feature-item">
                <div className="left-icon">
                  <img src={featuresFirstIcon} alt="First One" />
                </div>
                <div className="right-content">
                  <h4>Basic Fitness</h4>
                  <p>
                    Please do not re-distribute this template ZIP file on any
                    template collection website. This is not allowed.
                  </p>
                  <a href="/" className="text-button">
                    Discover More
                  </a>
                </div>
              </li>
              <li className="feature-item">
                <div className="left-icon">
                  <img src={featuresFirstIcon} alt="second one" />
                </div>
                <div className="right-content">
                  <h4>New Gym Training</h4>
                  <p>
                    If you wish to support TemplateMo website via PayPal, please
                    feel free to contact us. We appreciate it a lot.
                  </p>
                  <a href="/" className="text-button">
                    Discover More
                  </a>
                </div>
              </li>
              <li className="feature-item">
                <div className="left-icon">
                  <img src={featuresFirstIcon} alt="third gym training" />
                </div>
                <div className="right-content">
                  <h4>Basic Muscle Course</h4>
                  <p>
                    Credit goes to{" "}
                    <a
                      rel="nofollow"
                      href="https://www.pexels.com"
                      //   target="_blank"
                    >
                      Pexels website
                    </a>{" "}
                    for images and video background used in this HTML template.
                  </p>
                  <a href="/" className="text-button">
                    Discover More
                  </a>
                </div>
              </li>
            </ul>
          </div>
          {/* <div className="col-lg-6">
            <ul className="features-items">
              <li className="feature-item">
                <div className="left-icon">
                  <img src={featuresFirstIcon} alt="fourth muscle" />
                </div>
                <div className="right-content">
                  <h4>Advanced Muscle Course</h4>
                  <p>
                    You may want to browse through{" "}
                    <a
                      rel="nofollow"
                      href="https://templatemo.com/tag/digital-marketing"
                      target="_parent"
                    >
                      Digital Marketing
                    </a>{" "}
                    or{" "}
                    <a href="https://templatemo.com/tag/corporate">Corporate</a>{" "}
                    HTML CSS templates on our website.
                  </p>
                  <a href="#" className="text-button">
                    Discover More
                  </a>
                </div>
              </li>
              <li className="feature-item">
                <div className="left-icon">
                  <img src={featuresFirstIcon} alt="training fifth" />
                </div>
                <div className="right-content">
                  <h4>Yoga Training</h4>
                  <p>
                    This template is built on Bootstrap v4.3.1 framework. It is
                    easy to adapt the columns and sections.
                  </p>
                  <a href="/" className="text-button">
                    Discover More
                  </a>
                </div>
              </li>
              <li className="feature-item">
                <div className="left-icon">
                  <img src={featuresFirstIcon} alt="gym training" />
                </div>
                <div className="right-content">
                  <h4>Body Building Course</h4>
                  <p>
                    Suspendisse fringilla et nisi et mattis. Curabitur sed
                    finibus nisi. Integer nibh sapien, vehicula et auctor.
                  </p>
                  <a href="/" className="text-button">
                    Discover More
                  </a>
                </div>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default AboutArea;
