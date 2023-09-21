import React,{useEffect, useRef, useState} from 'react'
import gsap from 'gsap';
import "./Header.scss";
import {NavLink} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark} from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const [menuVisible, setMenuVisible] = useState(false);
    const navRef = useRef([]);

    useEffect(()=>{
      const element = navRef.current;

      // tl.from don't work properly. 
        gsap.fromTo(element,
          {
            opacity:0,
          },
          {
            opacity:1,
            stagger:{
              each:0.18,
              from:"end"
            }
          }
          );
      });
    
    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    }

    const menuStyle = {
      height: menuVisible ? '40vh' : '0', 
      visibility: menuVisible ? 'visible' : 'hidden',
    };
    
  return (
    <div className="headerContainer">
        <div className="subContainer">
            <div className="logo">
                <h1>Pankaj Bansal</h1>
            </div>
            {/* menu is for mobile screen */}
            <FontAwesomeIcon icon={menuVisible ? faXmark : faBars} style={{marginRight:"10px", fontSize:"1.5em"}}
             onClick={toggleMenu} className='menuIcon' />

            <div className= "menuMobile" style={menuStyle}>
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/About"}>About</NavLink>
                <NavLink to={"/Resume"}>Resume</NavLink>
                <NavLink to={"/Projects"} >Projects</NavLink>
                <NavLink to={"/Contact"} >Contact</NavLink>
            </div>
            <div className="navbar">
                <NavLink to={"/"}ref={el=>navRef.current.push(el)}>Home</NavLink>
                <NavLink to={"/About"}ref={el=>navRef.current.push(el)} >About</NavLink>
                <NavLink to={"/Resume"} ref={el=>navRef.current.push(el)}>Resume</NavLink>
                <NavLink to={"/Projects"}ref={el=>navRef.current.push(el)} >Projects</NavLink>
                <NavLink to={"/Contact"}ref={el=>navRef.current.push(el)} >Contact</NavLink>
            </div>
        </div>
    </div>
  )
}

export default Header;