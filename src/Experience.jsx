import "./styles/AboutMe.css";
import "./styles/Experience.css";
import "./styles/main.css";
import csharp from "./images/csharp.png";
import sql from "./images/sql.jpg";
import git from "./images/git.png";
import html from "./images/html.png";
import js from "./images/js.png";
import GithubFetcher from "./GithubFetcher";
import React, { useEffect, useState } from "react";

const Experience = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/skyy6/events")
      .then((response) => response.json())
      .then((data) => {
        setData(data.filter((item) => item.type === "PushEvent"));
      })
      .catch((error) => console.log("Error fetching data"));
  }, []);

  return (
    <div className="experience">
      <div className="experience-title">
        <h1>Work experience</h1>
      </div>
      <div className="experience-container">
        <div className="experience-text-container">
          <h2>Software Developer</h2>
          <div className="experience-company">
            <h3>Tietoevry</h3>
          </div>
          <h3>2021-current</h3>
          <div className="experience-text-description">
            <p>
              As a developer at Tietoevry, I am responsible for creating and
              managing customer-specific functionality in the Public360 system,
              using C# for integrations and MSSQL for database management.
            </p>
          </div>
        </div>
        <div className="experience-text-container">
          <h2>Workshop leader</h2>
          <div className="experience-company">
            <h3>Lava, Kulturhuset</h3>
          </div>
          <h3>2021-2021</h3>
          <div className="experience-text-description">
            <p>
              My job was to design, plan and organize workshops in the game
              engine Unity for people aged 14-20. The purpose of the workshops
              was to teach young people the basics of game development as well
              as how to use Unity on a basic level.
            </p>
          </div>
        </div>
        <div className="experience-text-bottom-container">
          <h2>Assembler</h2>
          <div className="experience-company">
            <h3>Elproman AB</h3>
          </div>
          <h3>2016-2021</h3>
          <div className="experience-text-description">
            <p>
              Manufacturing and handling of special cables. When doing my
              studies I was fortunate enough to be able to continue working here
              part-time.
            </p>
          </div>
        </div>
      </div>
      <div className="experience-title-school">
        <h1>Education</h1>
      </div>
      <div className="experience-container">
        <div className="experience-text-bottom-container">
          <h2>Bachelor’s Degree in Computer Science</h2>
          <div className="experience-company">
            <h3>Stockholm university</h3>
          </div>
          <h3>2018-2021</h3>
          <div className="experience-text-description">
            <p>
              Education that provides skills in system development,
              object-oriented programming, and web development.
            </p>
          </div>
        </div>
      </div>
      <div className="experience-title-school">
        <h1>What I'm working on</h1>
        <div className="experience-text-container">
          <div className="experience-text-description">
            <GithubFetcher />
          </div>
        </div>
      </div>
      <div className="exp-stack-container">
        <div className="exp-stack-text">
          <h2>Proficiencies</h2>
        </div>
        <div className="aboutme-stack-img-container">
          <img src={csharp} alt="csharp" className="aboutme-stack-img"></img>
          <img src={sql} alt="sql" className="aboutme-stack-img"></img>
          <img src={git} alt="git" className="aboutme-stack-img"></img>
          <img src={js} alt="js" className="aboutme-stack-img"></img>
        </div>
      </div>
    </div>
  );
};

export default Experience;
