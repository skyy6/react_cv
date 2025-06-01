import React, { useEffect, useState } from "react";
import "./styles/Contact.css";
import pin from "./images/pin.png";
import mail from "./images/mail.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Contact = () => {
  const [ref, inView] = useInView({
    //triggerOnce: true,
    threshold: 0.5,
  });

  const [activeContent, setActiveContent] = useState("home");

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=59.1896&longitude=18.132&current=temperature_2m&hourly=temperature_2m"
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="contact-title">
          <h2>Contact me!</h2>
        </div>{" "}
        <motion.div
          ref={ref}
          animate={inView ? { y: [0, -15, 0] } : { y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <div className="contact-textcontainer">
            <div className="contact-mail">
              <img src={mail} alt="mailpic" className="contact-mailpic"></img>
              <div className="contact-mail-text-container">
                <a
                  className="contact-mail-text"
                  href="mailto:fredrikjacobssondev@gmail.com"
                >
                  fredrikjacobssondev@gmail.com
                </a>
              </div>
              {activeContent === "contact" && (
                <div className="contact-mail-text-container"></div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
