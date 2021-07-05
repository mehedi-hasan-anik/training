import React from "react";
import "./SocialIcon.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBeer } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function SocialIcon() {
  return (
    <div>
      <ul className="social-icons">
        <li>
          <a href="www.facebook.com" title="facebook">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </li>
        <li>
          <a href="www.twitter.com" title="twitter">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </li>
        <li>
          <a href="www.instagram.com" title="instagram">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
        <li>
          <a href="www.beer.com" title="beer">
            <FontAwesomeIcon icon={faBeer} />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SocialIcon;
