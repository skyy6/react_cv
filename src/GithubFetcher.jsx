import "./styles/AboutMe.css";
import "./styles/Experience.css";
import "./styles/main.css";
import csharp from "./images/csharp.png";
import sql from "./images/sql.jpg";
import git from "./images/git.png";
import html from "./images/html.png";
import js from "./images/js.png";
import React, { useEffect, useState } from "react";

const GithubFetcher = () => {
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
    <>
      {data.slice(0, 5).map((item, index) => (
        <div key={index}>
          <p className="smallmargin">
            <a
              className="underline"
              href={
                "https://github.com/" +
                item.repo.name +
                "/commit/" +
                item.payload.commits[0].sha
              }
              target="_blank"
              rel="noreferrer"
            >
              {item.payload.commits[0].message}{" "}
            </a>{" "}
            {" in repo "}{" "}
            <a
              className="underline"
              href={"https://github.com/" + item.repo.name}
              target="_blank"
              rel="noreferrer"
            >
              {"'" + item.repo.name.split("/")[1] + "'"}
            </a>
          </p>
          <p key={index} className="divider">
            {item.created_at.split("T")[0] +
              " - " +
              item.created_at.split("T")[1].split("Z")[0]}
          </p>
        </div>
      ))}
    </>
  );
};

export default GithubFetcher;
