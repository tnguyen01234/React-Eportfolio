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
            <img className="language__img" src="data:image/png;base64,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" alt="" />
          <span className="language__name">Node.JS</span>
          </figure>
          <figure className="languages">
            <img className="language__img" src="https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png" alt="" />
          <span className="language__name">Express</span>
          </figure>
          <figure className="languages">
            <img className="language__img" src="https://cdn.iconscout.com/icon/free/png-256/mongodb-5-1175140.png" alt="" />
          <span className="language__name">MongoDB</span>
          </figure>
          <figure className="languages">
            <img className="language__img" src="https://www.gartner.com/imagesrv/peer-insights/vendors/logos/cloudinary.png" alt="" />
          <span className="language__name">Cloundinary</span>
          </figure>
          <figure className="languages">
            <img className="language__img" src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjIwLjE3OCIgdmlld0JveD0iMCAwIDc3Ljc4OCAyMC4xNzgiIHdpZHRoPSI3Ny43ODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzIzMmE1NSI+PHBhdGggZD0ibTM5OS43ODEgMjIyLjQzN2E3LjM0IDcuMzQgMCAwIDAgLTMuNjE4Ljk1MXYxMC41NTdhLjU0OC41NDggMCAwIDEgLS41MjUuNTUzaC0yLjQxMmEuNTQ4LjU0OCAwIDAgMSAtLjUyNS0uNTUzdi0xMy43MzZhLjUzMy41MzMgMCAwIDEgLjUyNS0uNTI1aDIuMjg1YS41MzMuNTMzIDAgMCAxIC41MjUuNTI1di41NTNhNi4xODggNi4xODggMCAwIDEgMy43Ni0xLjI2My41MzMuNTMzIDAgMCAxIC41MjUuNTI1djEuODg3YS41NTUuNTU1IDAgMCAxIC0uNTQuNTI2eiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTM5Mi43IC0yMTQuNTM0KSIvPjxwYXRoIGQ9Im00NjcuMzMzIDIyOC4zaC04LjU1NnYuMDg1YzAgMS41MTguNjI0IDMuMzM1IDMuMTUgMy4zMzUgMS42MTgtLjAxNCAzLjIyMS0uMSA0LjgyNS0uMjdoLjA4NWMuMjcgMCAuNDY4LjEyOC40NjguNHYxLjczMWMwIC40MjYtLjA4NS42MS0uNTUzLjY4MWEyMy41MTkgMjMuNTE5IDAgMCAxIC01LjA5NC40NGMtMi42MjUgMC02LjM1Ny0xLjQxOS02LjM1Ny02LjU4NHYtMS45NDRjMC00LjEgMi4yODUtNi42NjkgNi4zLTYuNjY5IDQuMDQ0IDAgNi4yNDQgMi43NTMgNi4yNDQgNi42Njl2MS40NzZjLjAxMy40MjEtLjE0NS42NS0uNTEyLjY1em0tMi45NjYtMi41NjhjMC0yLjA0My0xLjEzNS0zLjIzNS0yLjc1My0zLjIzNXMtMi44MSAxLjE0OS0yLjgxIDMuMjM1di4xaDUuNTYyeiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQ0Ni40MTcgLTIxNC41MzQpIi8+PHBhdGggZD0ibTU3Ni4yOTMgMjM0LjU3aC0yLjQxMmEuNTQ4LjU0OCAwIDAgMSAtLjUyNS0uNTUzdi04LjU0MmMwLTIuMjg1LS4yMTMtMi45MzctMi4yMjgtMi45MzdhNi42NDggNi42NDggMCAwIDAgLTIuOTY2Ljk1MXYxMC41NTdhLjU0OS41NDkgMCAwIDEgLS41MjUuNTUzaC0yLjQxMmEuNTQ5LjU0OSAwIDAgMSAtLjUyNS0uNTUzdi0xMy43MzdhLjUzMy41MzMgMCAwIDEgLjUyNS0uNTI1aDIuMjg1YS41MzMuNTMzIDAgMCAxIC41MjUuNTI1di41NTNhNi44NTIgNi44NTIgMCAwIDEgNC4yNTctMS4yNjNjMy43NzQgMCA0LjU0MSAyLjU0IDQuNTQxIDUuODc1djguNTU2YS41NjkuNTY5IDAgMCAxIC0uNTQuNTR6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNTQwLjI5NCAtMjE0LjYxOSkiLz48cGF0aCBkPSJtNjgyLjA1IDIwNGEyMi4xNiAyMi4xNiAwIDAgMSAtNS4yNzkuNjgxYy00LjIyOCAwLTYuMjcyLTIuNS02LjI3Mi02LjU4NHYtMi4wMjljMC00LjEgMi4wNDMtNi41ODQgNi4yNzItNi41ODRhMjEuMzcxIDIxLjM3MSAwIDAgMSAyLjUyNi4xODR2LTQuNjRhLjUzMy41MzMgMCAwIDEgLjUyNS0uNTI1aDIuNDEyYS41MzMuNTMzIDAgMCAxIC41MjUuNTI1djE4LjI3MmMuMDAxLjM3LS4xMTMuNTQxLS43MDkuN3ptLTIuNzUtMTEuNTExYTIxLjM4NSAyMS4zODUgMCAwIDAgLTIuNTI2LS4xODRjLTIuMjU2IDAtMi44MDkgMS42LTIuODA5IDMuNzZ2Mi4wMTVjMCAyLjE1Ny41NTMgMy43NiAyLjgwOSAzLjc2YTE2LjY3NiAxNi42NzYgMCAwIDAgMi41MjYtLjE4NHoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02MzEuMDgxIC0xODQuNSkiLz48cGF0aCBkPSJtNzg5LjczMyAyMjguM2gtOC41NTZ2LjA4NWMwIDEuNTE4LjYyNCAzLjMzNSAzLjE1IDMuMzM1IDEuNjE4LS4wMTQgMy4yMjEtLjEgNC44MjUtLjI3aC4wODVjLjI1NSAwIC40NjguMTI4LjQ2OC40djEuNzMxYzAgLjQyNi0uMDg1LjYxLS41NTMuNjgxYTIzLjUxOSAyMy41MTkgMCAwIDEgLTUuMDk0LjQ0Yy0yLjYyNSAwLTYuMzU3LTEuNDE5LTYuMzU3LTYuNTg0di0xLjk0NGMwLTQuMSAyLjI4NS02LjY2OSA2LjMtNi42NjkgNC4wNDQgMCA2LjI0NCAyLjc1MyA2LjI0NCA2LjY2OXYxLjQ3NmMuMDEzLjQyMS0uMTQ1LjY1LS41MTIuNjV6bS0yLjk2Ni0yLjU2OGMwLTIuMDQzLTEuMTM1LTMuMjM1LTIuNzUzLTMuMjM1cy0yLjgxIDEuMTQ5LTIuODEgMy4yMzV2LjFoNS41NjJ6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNzIzLjA3IC0yMTQuNTM0KSIvPjxwYXRoIGQ9Im04OTQuMjgxIDIyMi40MzdhNy4zMzkgNy4zMzkgMCAwIDAgLTMuNjE4Ljk1MXYxMC41NTdhLjU0OC41NDggMCAwIDEgLS41MjUuNTUzaC0yLjQxMmEuNTQ5LjU0OSAwIDAgMSAtLjUyNS0uNTUzdi0xMy43MzZhLjUzMy41MzMgMCAwIDEgLjUyNS0uNTI1aDIuMjg0YS41MzMuNTMzIDAgMCAxIC41MjUuNTI1di41NTNhNi4xODggNi4xODggMCAwIDEgMy43Ni0xLjI2My41MzMuNTMzIDAgMCAxIC41MjUuNTI1djEuODg3YS41NDYuNTQ2IDAgMCAxIC0uNTM5LjUyNnoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC04MTcuMDMyIC0yMTQuNTM0KSIvPjwvZz48L3N2Zz4K" alt="" />
          <span className="language__name">Render</span>
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
