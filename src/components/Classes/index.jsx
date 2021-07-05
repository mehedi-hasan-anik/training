import React from "react";
import "./Classes.css";
import lineDectPhoto from "../image/line-dec.png";
import featuresFirstIcon from "../image/tabs-first-icon.png";
import trainingPhoto1 from "../image/training-image-01.jpg";
import trainingPhoto2 from "../image/training-image-02.jpg";
import trainingPhoto3 from "../image/training-image-03.jpg";
import trainingPhoto4 from "../image/training-image-04.jpg";
import CommonHeader from "../CommonHeader";

function Classes() {
  return (
    <section className="section" id="our-classNamees">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="section-heading">
              <CommonHeader
                title1="Our"
                title2="Classes"
                image={lineDectPhoto}
                details="Nunc urna sem, laoreet ut metus id, aliquet consequat magna. Sed viverra ipsum dolor, ultricies fermentum massa consequat eu"
              />
            </div>
          </div>
        </div>
        <div className="row" id="tabs">
          <div className="col-lg-4">
            <ul>
              <li>
                <a href="/">
                  <img src={featuresFirstIcon} alt="" />
                  First Training class
                </a>
              </li>
              <li>
                <a href="/">
                  <img src={featuresFirstIcon} alt="" />
                  Second Training class
                </a>
              </li>
              <li>
                <a href="/">
                  <img src={featuresFirstIcon} alt="" />
                  Third Training class
                </a>
              </li>
              <li>
                <a href="/">
                  <img src={featuresFirstIcon} alt="" />
                  Fourth Training class
                </a>
              </li>
              <div className="main-rounded-button">
                <a href="/">View All Schedules</a>
              </div>
            </ul>
          </div>
          <div className="col-lg-8">
            <section className="tabs-content">
              <article id="tabs-1">
                <img src={trainingPhoto1} alt="First className" />
                <h4>First Training className</h4>
                <p>
                  Phasellus convallis mauris sed elementum vulputate. Donec
                  posuere leo sed dui eleifend hendrerit. Sed suscipit suscipit
                  erat, sed vehicula ligula. Aliquam ut sem fermentum sem
                  tincidunt lacinia gravida aliquam nunc. Morbi quis erat
                  imperdiet, molestie nunc ut, accumsan diam.
                </p>
                <div className="main-button">
                  <a href="/">View Schedule</a>
                </div>
              </article>
              <article id="/">
                <img src={trainingPhoto2} alt="Second Training" />
                <h4>Second Training className</h4>
                <p>
                  Integer dapibus, est vel dapibus mattis, sem mauris luctus
                  leo, ac pulvinar quam tortor a velit. Praesent ultrices erat
                  ante, in ultricies augue ultricies faucibus. Nam tellus nibh,
                  ullamcorper at mattis non, rhoncus sed massa. Cras quis
                  pulvinar eros. Orci varius natoque penatibus et magnis dis
                  parturient montes, nascetur ridiculus mus.
                </p>
                <div className="main-button">
                  <a href="/">View Schedule</a>
                </div>
              </article>
              <article id="tabs-3">
                <img src={trainingPhoto3} alt="Third className" />
                <h4>Third Training className</h4>
                <p>
                  Fusce laoreet malesuada rhoncus. Donec ultricies diam tortor,
                  id auctor neque posuere sit amet. Aliquam pharetra, augue vel
                  cursus porta, nisi tortor vulputate sapien, id scelerisque
                  felis magna id felis. Proin neque metus, pellentesque pharetra
                  semper vel, accumsan a neque.
                </p>
                <div className="main-button">
                  <a href="/">View Schedule</a>
                </div>
              </article>
              <article id="tabs-4">
                <img src={trainingPhoto4} alt="Fourth Training" />
                <h4>Fourth Training className</h4>
                <p>
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas. Aenean ultrices elementum
                  odio ac tempus. Etiam eleifend orci lectus, eget venenatis
                  ipsum commodo et.
                </p>
                <div className="main-button">
                  <a href="/">View Schedule</a>
                </div>
              </article>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Classes;
