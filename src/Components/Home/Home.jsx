import React from 'react';
import "./Home.scss";
import CV from "../../Assets/CV.pdf";
import { Link } from 'react-router-dom';
import About from "../About/About.jsx";
import Resume from "../Resume/Resume.jsx";
import Contact from "../Contact/Contact.jsx";
import photo from "../../Assets/myPhoto.jpg";

const Home = () => {
  return (
    <div className="homeContainer" id='home'>
      <div className="landingPage">
        <div className="custom-shape-divider-bottom-1695271882">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
          </svg>
        </div>
        
        <div className="pageContainer">
          <div className="details">
            <div className="hello"> Hello, I am Pankaj Bansal </div>
            <div className="job">Full Stack web developer</div>
            <div className="impButtons">
              <Link to={"/Contact"}  className="hire">Hire Me</Link>
              <a href={CV} download="Resume" className='getResume'>
                Download CV</a>
                <a href="https://www.linkedin.com/in/pankaj-bansal-0aab6a290" target='_blank'
             rel="noopener noreferrer" 
             className='linkedIn'>View linkedin profile</a>
            </div>
          </div>
          <div className="photo">
            <img src={photo} alt="myphoto" />
          </div>
        </div>
      </div>
      <About />
      <Resume />
      <Contact />
    </div>
  )
}

export default Home