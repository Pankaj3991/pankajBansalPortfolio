import React from 'react';
import "./Resume.scss";

import Percentage from "./Percent.jsx";

const Resume = () => {
  return (
    <div className='resumeContainer'>
      <div className="educationContainer">
        <div className="education">
          <div className="eduTitle">Education</div>
          <div className="card">
            <div className="subCard">
              <div className="time">2017 - 2018</div>
              <div className="title">Metriculation</div>
              <div className="overview">I got 74% in metriculation</div>
            </div>
          </div>

          <div className="card">
            <div className="subCard">
              <div className="time">2019 - 2020</div>
              <div className="title">High School Degree</div>
              <div className="overview">I got 90% in High School Degree having non-medical stream. </div>
            </div>
          </div>

          <div className="card">
            <div className="subCard">
              <div className="time">2020 - 2023</div>
              <div className="title">Bachelor's Degree</div>
              <div className="overview">I got 66% in B.Sc (Computer Application).
                I have done graduation from Govt. College Hisar, Haryana</div>
            </div>
          </div>

        </div>
        <div className="experience">
          <div className="expTitle">Experience</div>
          <div className="card">
            <div className="subCard">
              <div className="time">2022 - 2023</div>
              <div className="title">Frontend Developer</div>
              <div className="overview">Completed various websites using HTML,CSS,JavaScript & React</div>
            </div>
          </div>

          <div className="card">
            <div className="subCard">
              <div className="time">2022 - 2023</div>
              <div className="title">Backend Developer</div>
              <div className="overview">Completed projects include nodeJS, express, mongoDB</div>
            </div>
          </div>

          <div className="card">
            <div className="subCard">
              <div className="time">2022 - 2023</div>
              <div className="title">Full Stack Developer</div>
              <div className="overview">Created projects like Task management webApp, Chatting App, etc.</div>
            </div>
          </div>
        </div>
      </div>
      <div className="skillContainer">
        <div className="skillTitle">Skills</div>
        <div className="skillCards">
        <Percentage percent ="90" title="html"/>
        <Percentage percent ="80" title="CSS"/>
        <Percentage percent ="70" title="JavaScript"/>
        <Percentage percent ="75" title="React"/>
        <Percentage percent ="70" title="nodeJS"/>
        <Percentage percent ="70" title="Express"/>
        <Percentage percent ="75" title="mySQL"/>
        <Percentage percent ="75" title="mongoDB"/>
        <Percentage percent ="80" title="Git & GitHub"/>
        <Percentage percent ="55" title="Typing Speed (55+)"/>
        <Percentage percent ="50" title="Java"/>
        </div>
      </div>
    </div>  
  )
}

export default Resume
