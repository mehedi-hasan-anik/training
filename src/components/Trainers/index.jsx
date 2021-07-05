import React from "react";
import "./Trainers.css";
import CommonHeader from "../CommonHeader";
import lineDeck from "../image/line-dec.png";
import TrainerCol from "../TrainerCol";
import firstTrainer from "../image/first-trainer.jpg";
import secondTrainer from "../image/second-trainer.jpg";
import thirdTrainer from "../image/third-trainer.jpg";

function Trainers() {
  return (
    <div class="section" id="trainers">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 offset-lg-3">
            <div class="section-heading">
              <CommonHeader
                title1="Expert"
                title2="Trainers"
                details="Nunc urna sem, laoreet ut metus id, aliquet consequat magna. Sed viverra ipsum dolor, ultricies fermentum massa consequat eu."
                image={lineDeck}
              />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4">
            <TrainerCol
              image={firstTrainer}
              title="Bret D. Bowers"
              subTitle="Strength Trainer"
              details="Bitters cliche tattooed 8-bit distillery mustache. Keytar succulents gluten-free vegan church-key pour-over seitan flannel."
            />
          </div>
          <div class="col-lg-4">
            <TrainerCol
              image={secondTrainer}
              title="Hector T. Daigl"
              subTitle="Muscle Trainer"
              details="Bitters cliche tattooed 8-bit distillery mustache. Keytar succulents gluten-free vegan church-key pour-over seitan flannel."
            />
          </div>
          <div class="col-lg-4">
            <TrainerCol
              image={thirdTrainer}
              title="Paul D. Newman"
              subTitle="Power Trainer"
              details="Bitters cliche tattooed 8-bit distillery mustache. Keytar succulents gluten-free vegan church-key pour-over seitan flannel."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trainers;
