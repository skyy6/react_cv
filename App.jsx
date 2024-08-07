import React, { useState } from "react";
import Navbar from "./Navbar";
import Description from "./Description";
import Footer from "./Footer";
import Contact from "./Contact";
import AboutMe from "./AboutMe";
import Stage from "./Stage";
import "./styles/App.css";
import Experience from "./Experience";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  const [activeContent, setActiveContent] = useState("home");

  const handleNavbarClick = (content) => {
    setActiveContent(content);
  };

  return (
    <div className={activeContent !== "r3f" ? "app-container" : ""}>
      <Router>
        <Navbar onNavbarClick={handleNavbarClick} />
        <Routes>
          <Route path="experience" element={<Experience />}></Route>
        </Routes>
        <div className={activeContent !== "r3f" ? "inner-container" : ""}>
          {activeContent === "home" && (
            <div className="fade-in-long">
              <Description />
              <AboutMe />
            </div>
          )}
          {activeContent === "experience" && (
            <div className="fade-in-long">
              <Experience />
            </div>
          )}
          {activeContent === "home" && <Contact />}
        </div>
        {activeContent === "r3f" && (
          <div className="fade-in-long">
            <Stage onButtonClick={handleNavbarClick} />
          </div>
        )}
      </Router>
      <Footer visible={activeContent !== "r3f"} />
    </div>
  );
}

export default App;
