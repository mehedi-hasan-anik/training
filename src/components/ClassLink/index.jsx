import React, { useContext, useEffect } from "react";
import "./ClassLink.css";
import { userContext } from "../../App";
import classData from "../../data/classData.json";

function ClassLink({ title, image }) {
  const [photoItems, setPhotoItems] = useContext(userContext);
  useEffect(() => {
    setPhotoItems(classData.slice(0, 1));
  }, []);

  const photoHandler = (event) => {
    const photoName = event.target.textContent.toLowerCase();
    const selectedFood = classData.filter((item) => item.title === photoName);
    setPhotoItems(selectedFood);
  };
  return (
    <li className="list" onClick={photoHandler}>
      <div className="sigle-list">
        <img src={image} alt="" />
        {title}
      </div>
    </li>
  );
}

export default ClassLink;
