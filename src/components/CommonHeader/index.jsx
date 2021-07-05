import React from "react";
import "./CommonHeader.css";

function CommonHeader({ title1, title2, image, details, color }) {
  return (
    <div className="commonHeading">
      <h2 style={{ color: color }}>
        {title1} <em>{title2}</em>
      </h2>
      <img src={image} alt="waves" />
      <p style={{ color: color }}>{details}</p>
    </div>
  );
}

export default CommonHeader;
