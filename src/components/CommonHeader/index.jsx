import React from "react";
import "./CommonHeader.css";

function CommonHeader({ title1, title2, image, details }) {
  return (
    <div className="commonHeading">
      <h2>
        {title1} <em>{title2}</em>
      </h2>
      <img src={image} alt="waves" />
      <p>{details}</p>
    </div>
  );
}

export default CommonHeader;
