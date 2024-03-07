import React from 'react';
import { useState, useEffect } from 'react';
import './styles/Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = ({ onNavbarClick }) => {
  const handleNavItemClick = (content) => {
    onNavbarClick(content);
  };

  const[activeState, setActiveState] = useState('home');

  const navbarState = (state) => {
    setActiveState(state);
  }


  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth', 
    });
  };

  const handleClick = (site) =>{

    if(site === 'contact'){
      if(activeState === 'home'){
        scrollToBottom()
      } else{
        setTimeout(scrollToBottom, 1000); navbarState('home');
      }
      handleNavItemClick('home');
    }
    else{
    handleNavItemClick(site);
    navbarState(site);
    }
  }

  return (
    
    <nav>
      <div className='gradient-border'>
      <h2>FJ</h2>
      </div>
      <div className='navbar-items'>
        <a onClick={() => {handleClick("home")}}>
        <h2>Home</h2>
        </a>
        <a onClick={() => {handleClick("contact");}}>
        <h2>Contact</h2>
        </a>
        <a onClick={() => {handleClick("experience")}}>
        <h2>Experience</h2>
        </a>
      </div>     
    </nav>
    

    
  );
}



export default Navbar;