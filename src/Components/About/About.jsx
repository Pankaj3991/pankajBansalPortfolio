import React from 'react';
import "./About.scss";
import {Link} from "react-router-dom";
import profilePhoto from "../../Assets/myPhoto.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays,faPhone,faHouse,faEnvelope} from '@fortawesome/free-solid-svg-icons';
import CV from "../../Assets/CV.pdf";

const About = () => {
  return (
    <div className="aboutContainer" id='home'>
      <div className="cardContainer">
        <div className="cardSubContainer">
          <div className="photo">
            <img src={profilePhoto} alt="profilePhoto" />
          </div>
          <div className="aboutMe">
            <div className="name">
              <div className='hello'>HELLO EVERYBODY, I AM </div>
              <h1>Pankaj Bansal</h1>
              <div className="profession">Full Stack Developer</div>
            </div>
            <div className="quote">
            Like a lotus flower, I too have the ability to rise
             from the mud, bloom out of the darkness, and radiate into the world.
            </div>
            <div className="contactDetail">
            <FontAwesomeIcon icon={faCalendarDays}
             style={{"--fa-primary-opacity": "1", "--fa-secondary-opacity": "0.7", marginRight:"20px"}
             } className='icon' />
             June 18, 2002 <br /> 
             <FontAwesomeIcon icon={faPhone} className='icon'/> 7495057157 <br />
             <FontAwesomeIcon icon={faEnvelope} className='icon'/> pankajbansal3991@gmail.com <br />
             <FontAwesomeIcon icon={faHouse} className='icon'/> V.P.O. Moda Khera (Hisar), Haryana <br />
             <a href="https://www.linkedin.com/in/pankaj-bansal-0aab6a290" target='_blank'
             rel="noopener noreferrer">View linkedin profile</a>
            </div>
            <div className="other">
              {/* <div className="hireMe" onClick={Hire}>Hire Me</div> */}
              <Link to={"/Contact"} className='hireMe'>
                Hire me
              </Link>
              <a className="downloadResume" href={CV} download="resume">Download CV</a>
               </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
