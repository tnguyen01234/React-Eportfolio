import React from "react";
import { Button } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Project({ image, title, language, para, a, b, c, link}) {
  return (
    <li className="project">
      <div className="project__wrapper">
        <img src={image} className="project__img" alt="" />
        <div className="project__wrapper--bg"></div>
        <div className="project__description">
          <h3 className="project__description--title">{title}</h3>
          <h4 className="project__description--sub-title">{language}</h4>
          <p className="project__description--para">{para}</p>
          <p className="functionality"> ~ {a} </p>
          <p className="functionality"> ~ {b} </p>
          <p className="functionality"> ~ {c} </p>
    
          <div className="project__description--links">
            <a href="https://github.com/tnguyen01234" target={"_blank"} className="project__description--link">
            <GitHubIcon className="fab fa-github"/>
            </a>
            <a href={link} target={"_blank"} className="project__description--link">
            <EmojiEventsIcon className="fas fa-link"/>
            </a>
          </div>
        </div>
      </div>
    </li>
  );
}
