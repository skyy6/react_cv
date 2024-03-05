import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Description from './Description';
import Footer from './Footer';
import Contact from './Contact';
import AboutMe from './AboutMe';
import './styles/App.css';
import Experience from './Experience';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {

  const[activeContent, setActiveContent] = useState('home');

  const handleNavbarClick = (content) => {
    setActiveContent(content);
  }


  return (
    
    <div className='app-container'>
    <Router>
        <Navbar onNavbarClick={handleNavbarClick} />
          <Routes>
            <Route path="experience" element={<Experience />}>
            </Route>
            {/* Define other routes if needed */}
          </Routes>
          <div className='inner-container'>          
          {activeContent == 'home' && <div className='fade-in-long'><Description /><AboutMe/></div>}
          {activeContent == 'experience' && <div className='fade-in-long'><Experience /></div>}
          {activeContent == 'home' && <Contact />}
        </div>
        {/* Rest of your app's content */}
    </Router>
    <Footer />
    </div>
    
  );

}

export default App;
