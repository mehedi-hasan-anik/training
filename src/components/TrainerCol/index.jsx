import React from "react";
import "./TranierCol.css";
import SocialIcon from "../SocialIcon";

function TrainerCol({ image, subTitle, title, details }) {
  return (
    <div class="trainer-item">
      <div class="image-thumb">
        <img src={image} alt="" />
      </div>
      <div class="down-content">
        <span>Strength Trainer</span>
        <h4>Bret D. Bowers</h4>
        <p>
          Bitters cliche tattooed 8-bit distillery mustache. Keytar succulents
          gluten-free vegan church-key pour-over seitan flannel.
        </p>
        <SocialIcon />
      </div>
    </div>
  );
}

export default TrainerCol;
