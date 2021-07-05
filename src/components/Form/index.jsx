import React from "react";
import "./Form.css";

function Form() {
  return (
    <form id="contact" action="" method="post">
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <fieldset>
            <input
              name="name"
              type="text"
              id="name"
              placeholder="Your Name*"
              required=""
            />
          </fieldset>
        </div>
        <div className="col-md-6 col-sm-12">
          <fieldset>
            <input
              name="email"
              type="text"
              id="email"
              pattern="[^ @]*@[^ @]*"
              placeholder="Your Email*"
              required=""
            />
          </fieldset>
        </div>
        <div className="col-md-12 col-sm-12">
          <fieldset>
            <input
              name="subject"
              type="text"
              id="subject"
              placeholder="Subject"
            />
          </fieldset>
        </div>
        <div className="col-lg-12">
          <fieldset>
            <textarea
              name="message"
              rows="6"
              id="message"
              placeholder="Message"
              required=""
            ></textarea>
          </fieldset>
        </div>
        <div className="col-lg-12">
          <fieldset>
            <button type="submit" id="form-submit" className="main-button">
              Send Message
            </button>
          </fieldset>
        </div>
      </div>
    </form>
  );
}

export default Form;
