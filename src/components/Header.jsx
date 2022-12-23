import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Resume from "../assets/TN.pdf"

export default function Header({ toggleModal }) {
  return (
    <header className="header">
      <div className="header__content">
        <h1 className="title primary__title">Hey</h1>
        <h1 className="title title--secondary text__colour">I'm Tommy.</h1>
        <p className="header__para">
          I'm a <b className="text__colour">Frontend Software Engineer</b> with
          experience building responsive and multi platform web applications
          with great user experience.
          <br />
          Here's a bit more{" "}
          <b className="text__colour click" onClick={toggleModal}>
            about me.
          </b>
        </p>
        <div className="social__list">
          <a
            href="https://www.linkedin.com/in/khang-nguyen-93233a173/"
            target="_blank"
            className="social__link click"
          >
            <LinkedInIcon className="fab fa-linkedin-in" />
          </a>
          <a
            href="https://github.com/tnguyen01234"
            target="_blank"
            className="social__link click"
          >
            <GitHubIcon className="fab fa-github" />
          </a>
          <a
            href={Resume}
            target="_blank"
            className="social__link click"
          >
            <FontAwesomeIcon
              icon="fa-solid fa-file"
              className="fas fa-file-pdf"
            />
          </a>
        </div>
      </div>
    </header>
  );
}
