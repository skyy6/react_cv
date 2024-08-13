import React, { useState } from "react";
import Navbar from "./Navbar";
import Description from "./Description";
import Footer from "./Footer";
import Contact from "./Contact";
import AboutMe from "./AboutMe";
import Stage from "./Stage";
import "./styles/App.css";
import Experience from "./Experience";
import {
  useLocation,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
function App() {
  const [activeContent, setActiveContent] = useState("home");

  const LocationWrapper = () => {
    const location = useLocation();
    setActiveContent(location.pathname);
    console.log(activeContent);
  };

  return (
    <Router>
      <LocationWrapper />
      <div className={activeContent !== "r3f" ? "app-container" : ""}>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <div className="inner-container">
                <div className="fade-in-long">
                  <Description />
                  <AboutMe />
                </div>
                <Contact />
              </div>
            }
          ></Route>
          <Route
            path="/experience"
            element={
              <div className="inner-container">
                <Experience />
              </div>
            }
          />
          <Route path="/r3f" element={<Stage />} />
        </Routes>
        <Footer visible={activeContent !== "/r3f"} />
      </div>
    </Router>
  );
}

export default App;
