import React from "react";
import "./Contact.css";
import Map from "../Map";
import Form from "../Form";

function Contact() {
  return (
    <div className="section" id="contact-us">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-xs-12 map">
            <div id="map">
              <Map />
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-xs-12">
            <div className="contact-form">
              <Form />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
