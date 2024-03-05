import React from 'react'
import './styles/AboutMe.css'
import './styles/main.css'
import laptop from './images/laptop.jpeg'
import csharp from './images/csharp.png'
import sql from './images/sql.jpg'
import git from './images/git.png'
import html from './images/html.png'
import js from './images/js.png'

const AboutMe = () => {
  return (
    <div className='aboutme-container'>
            <div className='aboutme-content'>           
            <img src={laptop} className='aboutme-picture'></img>
            <div className='aboutme-textcontainer'>
            <div className='aboutme-title'>
            <h2>About me</h2>
                </div>
                <div className='aboutme-text'>          
              <p>I am a 26-year-old software developer who calls southern Stockholm, specifically Haninge, my home. As a Software Developer I spend my days coding and creating stuff. Being driven is part of my DNA, and I love diving into exciting projects </p>

              <p>When I'm not tapping away at the keyboard, you'll likely find me somewhere where the football is rolling. I have a great interest in football and love to follow and practice the sport.</p>
              </div>
            </div>           
        </div>
        </div>
  )
}

export default AboutMe