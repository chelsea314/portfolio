import React from 'react';
import '../../styles/About.css';
import headshot from '../../images/chelseaheadshot.png'
import adobePSicon from '../../images/icons8-adobe-photoshop.svg';
import bootstrapIcon from '../../images/icons8-bootstrap.svg';
import cssIcon from '../../images/icons8-css3.svg';
import expressIcon from '../../images/icons8-express-js (1).svg';
import githubIcon from '../../images/icons8-github.svg';
import graphqlIcon from '../../images/icons8-graphql.svg';
import htmlIcon from '../../images/icons8-html-5.svg';
import javascriptIcon from '../../images/icons8-javascript.svg';
import jqueryIcon from '../../images/icons8-jquery.svg';
import mongodbIcon from '../../images/icons8-mongodb.svg';
import nodeIcon from '../../images/icons8-node-js.svg';
import reactIcon from '../../images/icons8-react.svg';
import sqlIcon from '../../images/icons8-sql-96.png';
import adobePPIcon from '../../images/icons8-adobe-premiere-pro.svg';


export default function About() {
    return (
    <div className="about container mt-5">
            <div className="row">

                <div className = "col-sm-12 col-md-7">
                    <h1 className='about-title'>Hi, I'm Chelsea!</h1>
                        <p>I am a full stack web developer with experience in responsive web design using the MERN stack. I am highly motivated and determined to succeed in the tech industry in order to fuel my creative nature as well as utilize the skills learned by obtaining a certificate from The University of Texas to help solve real-world issues. I have a passion for learning and continual growth and I am striving to incorporate these virtues into my career. </p>
                        <div className='row justify-content-center'>
                        <div className='col-12'>
                            <img className='skills-icons' src={javascriptIcon} alt="javascript icon"></img>
                            <img className='skills-icons' src={reactIcon} alt="react icon"></img>
                            <img className='skills-icons' src={expressIcon} alt="express.js icon"></img>
                            <img className='skills-icons' src={bootstrapIcon} alt="bootstrap icon"></img>
                            <img className='skills-icons' src={htmlIcon} alt="html5 icon"></img>
                            <img className='skills-icons' src={cssIcon} alt="css3 icon"></img>
                            <img className='skills-icons' src={graphqlIcon} alt="graphQL icon"></img>
                            <img className='skills-icons' src={jqueryIcon} alt="jquery icon"></img>
                            <img className='skills-icons' src={mongodbIcon} alt="MongoDB icon"></img>
                            <img className='skills-icons' src={nodeIcon} alt="node.js icon"></img>
                            <img className='skills-icons' src={sqlIcon} alt="SQL icon"></img>
                            <img className='skills-icons' src={githubIcon} alt="GitHub icon"></img>
                            <img className='skills-icons' src={adobePPIcon} alt="adobe premiere pro icon"></img> 
                            <img className='skills-icons' src={adobePSicon} alt="adobe photoshop icon"></img> 
                        </div>
                        </div>
                </div>
                
                <div className= "col-sm-12 col-md-5 align-self-center text-center">
                    <img className='rounded-circle' src={headshot} alt="Chelsea's Headshot" width="300" height="350"/>
                </div>
            </div>
    </div>
    );
}
