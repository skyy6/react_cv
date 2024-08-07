import React from "react";
import { useState, useEffect } from "react";
import "./styles/Navbar.css";

const Navbar = ({ onNavbarClick }) => {
  const handleNavItemClick = (content) => {
    onNavbarClick(content);
  };

  const [activeState, setActiveState] = useState("home");

  //const [isMobile, setIsMobile] = useState(false);  /* Testing purposes only */

  const navbarState = (state) => {
    setActiveState(state);
  };

  const isMobile = navigator.userAgentData.mobile;

  /*   useEffect(() => {
    if (typeof (navigator.userAgentData === "undefined")) {
      setIsMobile(fa);
    }
    console.log(isMobile);

    return () => {};
  }, []); */

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  let timeout;
  const handleClick = (site) => {
    clearTimeout(timeout);
    if (site === "contact") {
      if (activeState === "home") {
        scrollToBottom();
      } else {
        timeout = setTimeout(() => {
          scrollToBottom();
          navbarState("home");
        }, 200);
      }
      handleNavItemClick("home");
    } else {
      if (site === "experience") {
        clearTimeout(timeout);
      }
      clearTimeout(timeout);
      handleNavItemClick(site);
      navbarState(site);
    }
  };

  return (
    <nav>
      <div className="gradient-border">
        <h2>FJ</h2>
      </div>
      <div className="navbar-items">
        <a
          onClick={() => {
            handleClick("home");
          }}
        >
          <h2>Home</h2>
        </a>
        <a
          onClick={() => {
            handleClick("contact");
          }}
        >
          <h2>Contact</h2>
        </a>
        <a
          onClick={() => {
            handleClick("experience");
          }}
        >
          <h2>Experience</h2>
        </a>
        <a
          onClick={() => {
            handleClick("r3f");
          }}
        >
          {!isMobile && <h2>Explore</h2>}
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
