import React from "react";
import { NavLink } from 'react-router-dom'; 

const Navigation = () => {
  return (
    <div className="nav-section">
      <NavLink className="link" id="home" to="/">Home</NavLink>
      <NavLink className="link" id="about" to="/about">About</NavLink>
      <NavLink className="link" id="contact" to="/contact">Contact</NavLink>
      <NavLink className="link" id="projects" to="/projects">Projects</NavLink>
    </div>
  );
};


export default Navigation;

