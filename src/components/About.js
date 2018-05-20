import React from 'react';
import avatar from './images/avatar (1).png'
import webpack from '../Icons/webpack.svg'
const About = () => {
  return (
    <div className="about">
    <img src={avatar}/>
    <div className="bio">
        <h2 className="name">Pavle Janjusevic</h2>
        <h3 className="from">From Belgrade, Serbia</h3>
        <p className="about-me">Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Natus deserunt recusandae accusantium numquam fugiat,
            reprehenderit necessitatibus aut, 
            voluptatibus vitae totam provident iste dolorum enim ad? 
            Repudiandae reprehenderit explicabo, aspernatur totam beatae
            numquam, sed itaque maiores dolor, quia voluptatibus!
            Doloremque repellendus alias facilis molestias facere
            quam esse vero unde laboriosam? Repellendus?</p>
        <h3>Technologies i work with</h3>
        <ul className="tech-list">
            <i className ="icon-javascript"></i>
            <i className="icon-html5"></i>
            <i className="icon-css3"></i>
            <i className="icon-jquery"></i>
            <i className="icon-reactjs"></i>
            <i className="icon-bootstrap"></i>
            <i className="icon-git"></i>
            <i className="icon-sass"></i>
            <i className="icon-nodejs"></i>
            <i className="icon-npm"></i>
            






        </ul>
    </div>
</div>
  );
};

export default About;