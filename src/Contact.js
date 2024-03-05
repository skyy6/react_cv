import React, {useEffect, useState} from 'react'
import './styles/Contact.css';
import pin from './images/pin.png'
import mail from './images/mail.png'
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';


const Contact = () => {

  const [ref, inView] = useInView({
    triggerOnce: true, 
    threshold: 0.5, 
  });

  const MailFunc = (content) => {
    setActiveContent(content);
  }

  const[activeContent, setActiveContent] = useState('home');

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://api.open-meteo.com/v1/forecast?latitude=59.1896&longitude=18.132&current=temperature_2m&hourly=temperature_2m")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.log(error));
  }, []);


  return (
    <div className='contact-container'>
       <div className='contact-content'>
        <div className='contact-title'>
        <a onClick ={() => MailFunc('test')}>
            <h2>Contact me!</h2>
            </a>
     </div> <motion.div
          ref={ref}
          animate={inView ? {y: [0, -15, 0]} : {y: 0}}
          transition={{delay:0.5, duration:0.5}}
          >
     <div className='contact-textcontainer'>
            <div className='contact-mail'>            
               <img src={mail} className='contact-mailpic'></img>
                <div className='contact-mail-text-container'>
                  <a onClick={() => MailFunc('contact')}>
                  <p className='contact-mail-text'>fredrikjacobssondev@gmail.com</p>
                  </a>
                </div>
                {activeContent == 'contact' && <div className='contact-mail-text-container'></div>} {/*<--- add mail functionality here */}
            </div>
      <div className='contact-location'>
        <img src={pin} className='contact-pin'></img> 
        <div className='contact-location-text'> 
       {data && data.current && data.current.temperature_2m &&  (
        <p>Haninge, Stockholm ({data.current.temperature_2m}°)</p>
        )} 
        </div>
        </div>
     </div>
     </motion.div>
    </div>               
   </div>
  )
}



export default Contact;