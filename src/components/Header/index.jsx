import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <div className="header-area header-sticky">
      <div className="">
        <div className="row">
          <div className="col-12">
            <nav className="navbar navbar-expand-lg">
              <div className="container-fluid nav-full-area">
                <a className="navbar-brand" href="/">
                  Training<em> Studio</em>
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon">
                    <FontAwesomeIcon icon={faBars} className="nav-bar-icon" />
                  </span>
                </button>
                <div
                  className="collapse navbar-collapse navigation-area"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a href="/" className="nav-link ms-3">
                        HOME
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#features" className="nav-link ms-3">
                        ABOUT
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#classes" className="nav-link ms-3">
                        CLASSES
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#product" className="nav-link ms-3">
                        {" "}
                        PRODUCT
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#contact" className="nav-link ms-3">
                        CONTACT
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#contact" className="nav-link ms-3">
                        SIGN UP
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
