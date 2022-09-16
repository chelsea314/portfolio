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
    <div className="container projects mb-3">
        {/* <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
            </ol>
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src={blackjack} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                </div>
            </div>
            <div className="carousel-item">
                <img src={DartontheMap} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                    <h5>Second slide label</h5>
                    <p>Some representative placeholder content for the second slide.</p>
                </div>
            </div>
            <div className="carousel-item">
                <img src={NoteTaker} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                    <h5>Third slide label</h5>
                    <p>Some representative placeholder content for the third slide.</p>
                </div>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-target="#carouselExampleCaptions" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
        </button>
    </div>
 */}














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
