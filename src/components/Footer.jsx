import React from "react";
import Logo from "../assets/Logo.png"
import Resume from "../assets/TN.pdf"

export default function Footer() {
    let isModalOpen = false;

    function toggleModal() {
      if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open");
      }
      isModalOpen = true;
      document.body.classList += " modal--open";
    }


  return (
    <footer>
      <div className="container footer__container">
        <div className="row footer__row">
          <figure>
            <img
              className="footer__logo--image"
              src={Logo}
              alt=""
            />
          </figure>
          <div className="footer__social--list">
            <a
              href="https://github.com/tnguyen01234"
              target="_blank"
              className="footer__social--link link__hover--effect link__hover--effect--green"
            >
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/khang-nguyen-93233a173/"
              className="footer__social--link link__hover--effect link__hover--effect--green"
              target="_blank"
              >LinkedIn</a>
                 <a
              href="#"
              className="footer__social--link link__hover--effect link__hover--effect--green"
              onClick={toggleModal}
              >Email</a>
                   <a
              href={Resume}
              target="_blank"
              className="footer__social--link link__hover--effect link__hover--effect--green"
              >Resume</a>
          </div>
          <div className="footer__copyright">Copyright © Tommy Nguyen</div>
        </div>
      </div>
    </footer>
  );
}
