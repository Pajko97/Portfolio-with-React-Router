import React from "react";
import { NavLink } from 'react-router-dom'; 

const Navigation = () => {
  return (
    <div className="nav-section">
      <NavLink className="link" to="/">Home</NavLink>
      <NavLink className="link" to="/about">About</NavLink>
      <NavLink className="link" to="/contact">Contact</NavLink>
      <NavLink className="link" to="/projects">Projects</NavLink>
    </div>
  );
};


export default Navigation;

