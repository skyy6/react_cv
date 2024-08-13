import React from "react";
import "./styles/Navbar.css";
import { isMobile } from "react-device-detect";
import { Link } from "react-router-dom";

const Navbar = () => {
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
      scrollToBottom();
    }
  };

  return (
    <nav>
      <div className="gradient-border">
        <h2>FJ</h2>
      </div>
      <div className="navbar-items">
        <Link to="/">
          <h2>Home</h2>
        </Link>
        <Link to="/">
          <h2
            onClick={() => {
              handleClick("contact");
            }}
          >
            Contact
          </h2>
        </Link>
        <Link to="/experience">
          <h2>Experience</h2>
        </Link>
        {!isMobile && (
          <Link to="/r3f">
            <h2>Explore</h2>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
