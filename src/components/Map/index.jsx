import React from "react";
import "./Map.css";

function Map() {
  return (
    <div>
      <iframe
        src="https://maps.google.com/maps?q=Av.+L%C3%BAcio+Costa,+Rio+de+Janeiro+-+RJ,+Brazil&t=&z=13&ie=UTF8&iwloc=&output=embed"
        width="100%"
        height="600px"
        frameBorder="0"
        style={{ border: "0" }}
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default Map;
