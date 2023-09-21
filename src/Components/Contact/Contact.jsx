import React from 'react';
import "./Contact.scss";
// import FeedbackForm from "./FeedbackForm.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot,faPhone,faEnvelope } from '@fortawesome/free-solid-svg-icons';
const Contact = () => {
  return (
    <div className='contactContainer'>
      <h1>Contact Me</h1>
      <h2>Let's connect and bring your ideas to life. I'm just 
        a message away, ready to collaborate and create
         something amazing together.</h2>

      <div className="contactDetails">
        <div className="address">
          <div className="icon">
            <FontAwesomeIcon icon={faLocationDot} beat style={{fontSize:"2.5em"}}/>
          </div>
          <h3>Address</h3>
          <h4> V.P.O. Moda Khera (Hisar), Haryana</h4>
        </div>
        <div className="contact">
          <div className="icon">
          <FontAwesomeIcon style={{fontSize:"2.5em"}} icon={faPhone} shake />
          </div>
          <h3>Contact no.</h3>
          <h4>7495057157</h4>
        </div>
        <div className="email">
          <div className="icon">
          <FontAwesomeIcon icon={faEnvelope} beatFade style={{fontSize:"2.5em"}} />
          </div>
          <h3>Email Address</h3>
          <h4>pankajbansal3991@gmail.com</h4>
        </div>
      </div>

      <div className="formContainer">
          <form action="https://formspree.io/f/mdorwzer" method='post' className='formInput'>
            <input
             type="text"
             className='input-box' 
             name="username" 
             placeholder='username' 
             required 
             autoComplete='off' 
             />

             <input type="email" className='input-box' name="email" placeholder='Email' autoComplete='off' required/>

             <textarea name="message"
              placeholder = "Enter your message"
              className='input-box'
              cols="70" 
              rows="10" 
              required 
              autoComplete='off'></textarea>

              <input type="submit" value="send" className='button' />
          </form>
      </div>
    </div>


  )
}

export default Contact
