import React from 'react';
import '../../styles/About.css';

export default function About() {
    return (
    <div className="about container mt-5">
            <div className="row">
                <div className = "col-12 col-md-9">
                    <h1 className='about-title'>Hi, I'm Chelsea!</h1>
                    <ul className='list'>
                        <li>Passionate about design and development</li>
                        <li>Based in Dallas, Texas</li>
                    </ul>
                </div>
                <div className= "col-12 col-md-3">
                    <img src="chelseaheadshot.png" alt="Chelsea's Headshot" width="300" height="350"/>
                </div>
            </div>
    </div>
    );
}
