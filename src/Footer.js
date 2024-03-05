import React from 'react'
import './styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer-content">
      <div className='footer-text'>
      <h2>FJ</h2>
      <p>Made with React - Source code <a className='underline' href='https://github.com/skyy6/react_cv' target='_blank'>here</a></p>
      </div>     
    </div>
  </footer>
  )
}

export default Footer