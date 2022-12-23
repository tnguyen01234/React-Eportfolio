import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Logo from "../assets/Logo.png";

export default function Nav({ toggleModal }) {
    let contrastToggle = false;

  function toggleContrast() {
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
      document.body.classList += " dark-theme";
    } else {
      document.body.classList.remove("dark-theme");
    }
  }



  return (
    <nav>
      <figure>
        <img id="personal-logo" className="click" src={Logo} alt="" />
      </figure>
      <ul className="nav__link--list">
        <li className="nav__link" onClick={toggleModal}>
          <a
            href="#"
            className="nav__link--anchor link__hover--effect link__hover--effect--green"
          >
            About
          </a>
        </li>
        <li className="nav__link">
          <a
            href="#projects"
            className="nav__link--anchor link__hover--effect link__hover--effect--green"
          >
            Projects
          </a>
        </li>
        <li className="nav__link" onClick={toggleModal}>
          <a
            href="#"
            className="nav__link--anchor link__hover--effect link__hover--effect--green"
          >
            Contact
          </a>
        </li>
        <li className="nav__link click">
          <a
            href="#"
            className="nav__link--anchor link__hover--effect link__hover--effect--green"
          >
            <i className="fas fa-adjust"></i>
            <FontAwesomeIcon
              icon="fa-solid fa-circle-half-stroke"
              onClick={toggleContrast}
            />
          </a>
        </li>
      </ul>
    </nav>
  );
}
