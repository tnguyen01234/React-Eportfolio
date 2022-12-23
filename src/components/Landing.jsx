import React from "react";
import Header from "./Header";
import Modal from "./Modal";
import Nav from "./Nav";
import semiCircle from "../assets/semi circle.svg";
import circle from "../assets/circle.svg";
import squiggly from "../assets/squiggly.svg";
import triangle from "../assets/triangle.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Landing() {
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
    <section id="landing-page">
      <Nav toggleModal={toggleModal} />
      <Header toggleModal={toggleModal} />
      <button className="mail__btn click" onClick={toggleModal}>
        <FontAwesomeIcon
          icon="fa-solid fa-envelope"
          className="fas fa-envelope"
        />
      </button>
      <a href="#projects" className="scroll">
        <div className="scroll__icon click"></div>
      </a>
      <Modal toggleModal={toggleModal} />
      <img src={semiCircle} className="shape shape--1" alt="" />
      <img src={circle} className="shape shape--2" alt="" />
      <img src={squiggly} className="shape shape--3" alt="" />
      <img src={circle} className="shape shape--4" alt="" />
      <img src={triangle} className="shape shape--5" alt="" />
      <img src={circle} className="shape shape--6" alt="" />
      <img src={squiggly} className="shape shape--7" alt="" />
      <img src={circle} className="shape shape--8" alt="" />
      <img src={semiCircle} className="shape shape--9" alt="" />
    </section>

  );
}
