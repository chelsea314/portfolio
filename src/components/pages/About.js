import React from 'react';
import '../../styles/About.css';
import headshot from '../../images/chelseaheadshot.png'

export default function About() {
    return (
    <div className="about container mt-5">
            <div className="row">
                <div className = "col-sm-12 col-md-7">
                    <h1 className='about-title'>Hi, I'm Chelsea!</h1>
                        <p>I am a full stack web developer with experience in responsive web design using the MERN stack. I am highly motivated and determined to succeed in the tech industry in order to fuel my creative nature as well as utilize the skills learned by obtaining a certificate from The University of Texas to help solve real-world issues. I have a passion for learning and continual growth and I am striving to incorporate these virtues into my career. </p>
                </div>
                <div className= "col-sm-12 col-md-5 align-self-center text-center">
                    <img className='rounded-circle' src={headshot} alt="Chelsea's Headshot" width="300" height="350"/>
                </div>
            </div>
    </div>
    );
}
