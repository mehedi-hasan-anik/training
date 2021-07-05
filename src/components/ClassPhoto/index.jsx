import React, { useContext } from "react";
import { userContext } from "../../App";
import "./ClassPhoto.css";

function ClassPhoto() {
  const [photoItems, setPhotoItems] = useContext(userContext);
  return (
    <div className="tabs-content">
      {photoItems.map((item) => (
        <article id="tabs-1" key={item.id}>
          <img src={item.image} alt="First className" />
          <h4>{item.title}</h4>
          <p>{item.details} </p>
          <div className="main-button">
            <a href="/">View Schedule</a>
          </div>
        </article>
      ))}
    </div>
  );
}

export default ClassPhoto;
