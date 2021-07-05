import React from "react";
import "./Classes.css";
import lineDectPhoto from "../image/line-dec.png";
import featuresFirstIcon from "../image/tabs-first-icon.png";
import CommonHeader from "../CommonHeader";
import ClassLink from "../ClassLink";
import ClassPhoto from "../ClassPhoto";

function Classes() {
  return (
    <div className="our-classes" id="classes">
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
              <ClassLink
                title="First Training class"
                image={featuresFirstIcon}
              />
              <ClassLink
                title="Second Training class"
                image={featuresFirstIcon}
              />
              <ClassLink
                title="Third Training class"
                image={featuresFirstIcon}
              />
              <ClassLink
                title="Fourth Training class"
                image={featuresFirstIcon}
              />
              <div className="main-rounded-button">
                <a href="/">View All Schedules</a>
              </div>
            </ul>
          </div>

          <div className="col-lg-8">
            <ClassPhoto />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Classes;
