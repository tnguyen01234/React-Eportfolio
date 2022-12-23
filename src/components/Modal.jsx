import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import CSS from "../assets/CSS3_logo_and_wordmark.svg.png"
import emailjs from '@emailjs/browser';

export default function Modal({ toggleModal }) {

    function contact(event) {
        event.preventDefault();
        const loading = document.querySelector('.modal__overlay--loading');
        const success = document.querySelector('.modal__overlay--success');
        loading.classList += "modal__overlay--visible";
        emailjs
        .sendForm(
            'service_lamxf7p',
            'template_r2h0zw8',
            event.target,
            'uVlrEHczoIaoMbWXi'
        ).then(() => {
            loading.classList.remove("modal__overlay--visible");
            success.classList += " modal__overlay--visible";
        }).catch(() => {
            loading.classList.remove("modal__overlay--visible");
            alert(
                "The email service is temporarily unavailable. Please contact me directly at nguyentommy735@gmail.com"
            );
        })
    }


  return (
    <div className="modal">
      <div className="modal__half modal__about">
        <h3 className="modal__title modal__title--about"> Here's a bit about me</h3>
        <h4 className="modal__sub-title modal__sub-title--about">
          <b className="text__colour">Frontend Software Engineer.</b>
        </h4>
        <p className="modal__para">I'm a 22 year-old Australian <b className="text__colour">Frontend Software Engineer</b> with a strong passion for developing websites with fantastic<b className="text__colour"> user experience.</b> 
        <br />I am currently working on extremely difficult projects for my clients and is constantly learning from a team consisting of the most  <b className="text__colour">talented and experienced</b> software engineer every day. </p>
        <div className="modal__languages">
        <figure className="languages ">
        <img className="language__img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/240px-HTML5_Badge.svg.png" alt="" />
          <span className="language__name">HTML</span>
          </figure>
          <figure className="languages css__logo">
            <img className="language__img " src={CSS} alt="" />
          <span className="language__name">CSS</span>
          </figure>
          <figure className="languages">
            <img className="language__img" src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="" />
          <span className="language__name">JAVASCRIPT</span>
          </figure>
          <figure className="languages">
            <img className="language__img" src="https://repository-images.githubusercontent.com/410214337/070f2aba-d9d6-4699-b887-9a0f29015b1b" alt="" />
          <span className="language__name">React</span>
          </figure>
          <figure className="languages">
            <img className="language__img" src="https://miro.medium.com/max/300/1*R4c8lHBHuH5qyqOtZb3h-w.png" alt="" />
          <span className="language__name">FireBase</span>
          </figure>
          <figure className="languages">
            <img className="language__img" src="https://yt3.ggpht.com/ikv41jMTr1uHGdILrJhvbfVJcDt4oqhwApKX37TjAleF_cRPbF2W-waj7uMnS5JySvnlvAlTCg=s900-c-k-c0x00ffffff-no-rj" alt="" />
          <span className="language__name">Tailwind</span>
          </figure>
          <figure className="languages">
            <img className="language__img" src="https://mui.com/static/logo.png" alt="" />
          <span className="language__name">Material UI</span>
          </figure>
          <figure className="languages">
            <img className="language__img" src="https://www.drupal.org/files/project-images/font_awesome_logo.png" alt="" />
          <span className="language__name">FontAwesome</span>
          </figure>
        </div>
      </div>
      <div className="modal__half modal__contact">
      <FontAwesomeIcon icon="fa-solid fa-xmark" className="fas fa-times modal__exit click" onClick={toggleModal} />
          <h3 className="modal__title modal__title--contact">Let's have a chat!</h3>
        <h3 className="modal__sub-title modal__sub-title--contact">I'm currently open to new opportunities.</h3>
        <form id="contact__form" onSubmit={contact}>
          <div className="form__item">
            <label className="form__item--label">Name</label>
            <input type="text" className="input" name="user_name" required ></input>
          </div>
          <div className="form__item">
            <label  className="form__item--label">Email</label>
            <input type="email" className="input" name="user_email"required ></input>
          </div>
          <div className="form__item">
            <label className="form__item--label">Message</label>
            <textarea type="text" className="input" name="message" required ></textarea>
          </div>
          <button id="contact__submit" className="form__submit">Send it my way</button>
        </form>
        <div className="modal__overlay modal__overlay--loading">
        <FontAwesomeIcon icon="fa-solid fa-spinner" className="fas fa-spinner" />
        </div>
        <div className="modal__overlay modal__overlay--success">
          Thanks for the message! Looking forward to speaking to you soon.
        </div>
      </div>
    </div>
  );
}
