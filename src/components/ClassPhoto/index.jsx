import React, { useContext } from "react";
import { userContext } from "../../App";
import "./ClassPhoto.css";

function ClassPhoto() {
  const [photoItems, setPhotoItems, fakeData, setFakeData] =
    useContext(userContext);
  return (
    <div className="tabs-content">
      {photoItems.map((item) => (
        <article key={item.id}>
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
