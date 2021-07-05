import React from "react";
import "./AboutCol.css";

function AboutCol({ title, image, details }) {
  return (
    <>
      <li className="feature-item">
        <div className="left-icon">
          <img src={image} alt="fourth muscle" />
        </div>
        <div className="right-content">
          <h4>{title}</h4>
          <p>{details}</p>
          <a href="/" className="text-button">
            Discover More
          </a>
        </div>
      </li>
    </>
  );
}

export default AboutCol;
