import React from 'react';

import '../../styles/About.css';


export default function About() {
    return (
    <div className="about">
        <div className="container mt-3">
            <div className="row">
                <div className = "col-12 col-md-9">
                    <h1>About Me</h1>
                    <p>This is about me.</p>
                </div>
                <div className= "col-12 col-md-3">
                    <img src="chelseaheadshot.png" alt="Chelsea's Headshot" width="300" height="350"/>
                </div>
            </div>
        </div>
    </div>
    );
}
