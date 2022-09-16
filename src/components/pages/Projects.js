import React from 'react';
import blackjack from '../../images/BlackJackBaby.png'
import CodeQuiz from '../../images/CodeQuiz.png'
import DartontheMap from '../../images/DartontheMap.png'
import NoteTaker from '../../images/NoteTaker.png'
import teamgenerator from '../../images/teamgenerator.png'
import WeatherDashboard from '../../images/WeatherDashboard.png'
import '../../styles/Projects.css';

export default function Projects() {
    return (
    <div className="projects mb-3">
        <div className="container mt-3">
            <h1>Projects</h1>
            <div className='row'>
                <div className='col-12 col-md-6 col-lg-4 mt-2'>
                    <a href="https://github.com/chelsea314/Dart-On-The-Map" target="blank">
                        <img className='projects' src={DartontheMap} alt="Dart on the Map" width="400" height="250"/>
                    </a>
                </div>
                <div className='col-12 col-md-6 col-lg-4 mt-2'>
                    <a href="https://github.com/chelsea314/Blackjack-Baby" target="blank">
                        <img className='projects' src={blackjack} alt="Black Jack Baby" width="400" height="250"/>
                    </a>
                </div>
                <div className='col-12 col-md-6 col-lg-4 mt-2'>
                    <a href="https://github.com/chelsea314/Challenge-6---Server-Side-APIs-Weather-Dashboard" target="blank">
                        <img className='projects' src={WeatherDashboard} alt="Weather Dashboard" width="400" height="250"/>
                    </a>
                </div>
           
                <div className='col-12 col-md-6 col-lg-4 mt-2'>
                    <a href="https://github.com/chelsea314/Module-11---Express.js-Note-Taker" target="blank">
                        <img className='projects' src={NoteTaker} alt="Note Taker" width="400" height="250"/>
                    </a>
                </div>
                <div className='col-12 col-md-6 col-lg-4 mt-2'>
                    <a href="https://github.com/chelsea314/Module-10---Object-Oriented-Programming-Challenge-Team-Profile-Generator" target="blank">
                        <img className='projects' src={teamgenerator} alt="Object Oriented Programming" width="400" height="250"/>
                    </a>
                </div>
                <div className='col-12 col-md-6 col-lg-4 mt-2'>
                    <a href="https://github.com/chelsea314/Challenge-4---Code-Quiz" target="blank">
                        <img className='projects' src={CodeQuiz} alt="Code Quiz" width="400" height="250"/>
                    </a>
                </div>
            </div>

        </div>
    </div>
    );
}
