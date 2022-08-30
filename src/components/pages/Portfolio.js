import React from 'react';
import '../../styles/Portfolio.css';

export default function Portfolio() {
    return (
    <div className="portfolio mb-3">
        <div className="container mt-3">
            <h1>Projects</h1>
            <div className='row'>
                <div className='col-12 col-md-6 col-lg-4 mt-2'>
                    <a href="https://github.com/chelsea314/Dart-On-The-Map" target="blank">
                        <img className='projects' src='DartontheMap.png' alt="Dart on the Map" width="400" height="250"/>
                    </a>
                </div>
                <div className='col-12 col-md-6 col-lg-4 mt-2'>
                    <a href="https://github.com/chelsea314/Blackjack-Baby" target="blank">
                        <img className='projects' src='BlackJackBaby.png' alt="Black Jack Baby" width="400" height="250"/>
                    </a>
                </div>
                <div className='col-12 col-md-6 col-lg-4 mt-2'>
                    <a href="https://github.com/chelsea314/Challenge-6---Server-Side-APIs-Weather-Dashboard" target="blank">
                        <img className='projects' src='WeatherDashboard.png' alt="Weather Dashboard" width="400" height="250"/>
                    </a>
                </div>
           
                <div className='col-12 col-md-6 col-lg-4 mt-2'>
                    <a href="https://github.com/chelsea314/Module-11---Express.js-Note-Taker" target="blank">
                        <img className='projects' src='NoteTaker.png' alt="Note Taker" width="400" height="250"/>
                    </a>
                </div>
                <div className='col-12 col-md-6 col-lg-4 mt-2'>
                    <a href="https://github.com/chelsea314/Module-10---Object-Oriented-Programming-Challenge-Team-Profile-Generator" target="blank">
                        <img className='projects' src='teamgenerator.png' alt="Object Oriented Programming" width="400" height="250"/>
                    </a>
                </div>
                <div className='col-12 col-md-6 col-lg-4 mt-2'>
                    <a href="https://github.com/chelsea314/Challenge-4---Code-Quiz" target="blank">
                        <img className='projects' src='CodeQuiz.png' alt="Code Quiz" width="400" height="250"/>
                    </a>
                </div>
            </div>

        </div>
    </div>
    );
}
