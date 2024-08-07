import React from "react";
import "./styles/main.css";
import profilbild from "./images/profilbild.jpg";
import linkedin from "./images/linkedin.png";
import github from "./images/github.png";

const Description = () => {
  return (
    <div className="description-container">
      <div className="description-content">
        <div className="description-text">
          <h1>Fredrik Jacobsson - Developer</h1>
          <div className="about-text">
            <p>
              Hello! My name is Fredrik Jacobsson and I work as a Software
              Developer. I also have a general strong interest in all things
              Data & IT. My daily work involves the creation of innovative
              solutions and the exploration of different technologies.
            </p>
          </div>
          <a
            href="https://www.linkedin.com/in/fredrik-jacobsson-813767134/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin} alt="Profile" className="linkedinpicture" />
          </a>
          <a href="https://github.com/skyy6" target="_blank" rel="noreferrer">
            <img src={github} alt="Profile" className="linkedinpicture" />{" "}
          </a>
        </div>
        <img src={profilbild} alt="Profile" className="profilepicture" />
      </div>
    </div>
  );
};

export default Description;
