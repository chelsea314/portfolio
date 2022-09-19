import React from 'react';
import blackjack from '../../images/blackjackbaby.svg'
import dart from '../../images/dart.svg'
import note from '../../images/note.svg'
import team from '../../images/team.svg'
import weather from '../../images/weather.svg'
import baes from '../../images/baes.svg'
import '../../styles/Projects.css';

export default function Projects() {
    return (
        <div className="container projects mb-3 mt-3">
            <h1>Projects</h1>
        
            <div className='row justify-content-around'>
            <div className="card col-12 col-md-5 cs-card p-0 mb-3" width="18rem;">
                <img src={baes} width='18px' className="card-img-top" alt="baes" />
                <div className="card-body">
                    <h3 className="card-title">Baes</h3>
                    <hr className='mb-1'/>
                    <ul class="row list-group list-group-flush mt-0 pb-3">
                        <li class="list-group-item">
                        Keep track of the important information in your relationship. Create an account, connect with others and save information.</li>
                        <li class="list-group-item">
                        MERN Stack: MongoDB, Express.js, React.js, Node.js</li>
                    </ul>
                    <div className='row justify-content-around'>
                        <a href="https://loversnotfighters.herokuapp.com/" target="blank" className="btn btn-card col-5">Visit Site</a>
                        <a href="https://github.com/chelsea314/baes" target="blank" className="btn btn-card col-5">GitHub Repo</a>
                    </div>
                </div>
            </div>

            <div className="card col-12 col-md-5 cs-card p-0 mb-3" width="18rem;">
                <img src={blackjack} width='18px' className="card-img-top" alt="blackjack" />
                <div className="card-body">
                    <h3 className="card-title">Black Jack, Baby</h3>
                    <hr className='mb-1'/>

                    <ul class="row list-group list-group-flush mt-0 pb-3">
                        <li class="list-group-item">
                            Play black jack online. Users can create accounts, earn cash and view standings.</li>
                        <li class="list-group-item">
                        
                        Node.js, Express.js, RESTful API, MySQL, Handlebars.js</li>
                    </ul>
                    <div className='row justify-content-around'>
                        <a href="https://blackjackbaby.herokuapp.com/" target="blank" className="btn btn-card col-5">Visit Site</a>
                        <a href="https://github.com/chelsea314/Blackjack-Baby" target="blank" className="btn btn-card col-5">GitHub Repo</a>
                    </div>
                </div>
            </div>
            </div>

            <div className='row justify-content-around'>
            <div className="card col-12 col-md-5 cs-card p-0 mb-3" width="18rem;">
                <img src={dart} width='18px' className="card-img-top" alt="Dart on the Map" />
                <div className="card-body">
                    <h3 className="card-title">Dart on the Map</h3>
                    <hr className='mb-1'/>
                    <ul class="row list-group list-group-flush mt-0 pb-3">
                        <li class="list-group-item">
                        Travel planning support. Search for a city. Find activites, weather forecast and currency exchange rates.</li>
                        <li class="list-group-item">
                        Server-side APIs, Bulma CSS framework</li>
                    </ul>
                    <div className='row justify-content-around'>
                        <a href="https://loversnotfighters.herokuapp.com/" target="blank" className="btn btn-card col-5">Visit Site</a>
                        <a href="https://github.com/chelsea314/baes" target="blank" className="btn btn-card col-5">GitHub Repo</a>
                    </div>
                </div>
            </div>

            <div className="card col-12 col-md-5 cs-card p-0 mb-3" width="18rem;">
                <img src={weather} width='18px' className="card-img-top" alt="Weather Dashboard" />
                <div className="card-body">
                    <h3 className="card-title">Weather Dashboard</h3>
                    <hr className='mb-1'/>

                    <ul class="row list-group list-group-flush mt-0 pb-3">
                        <li class="list-group-item">
                            Search for a city and view its five day weather forecast. Access previous city searches. Features dynamically updated HTML and CSS.</li>
                        <li class="list-group-item">
                            Open-Weather API, HTML, CSS, JavaScript </li>
                    </ul>
                    <div className='row justify-content-around'>
                        <a href="https://chelsea314.github.io/Challenge-6---Server-Side-APIs-Weather-Dashboard/" target="blank" className="btn btn-card col-5">Visit Site</a>
                        <a href="https://github.com/chelsea314/Challenge-6---Server-Side-APIs-Weather-Dashboard" target="blank" className="btn btn-card col-5">GitHub Repo</a>
                    </div>
                </div>
            </div>
            </div>


            <div className='row justify-content-around'>
            <div className="card col-12 col-md-5 cs-card p-0 mb-3" width="18rem;">
                <img src={note} width='18px' className="card-img-top" alt="Note Taker" />
                <div className="card-body">
                    <h3 className="card-title">Note Taker</h3>
                    <hr className='mb-1'/>
                    <ul class="row list-group list-group-flush mt-0 pb-3">
                        <li class="list-group-item">
                        Application that can be used to write and save notes.</li>
                        <li class="list-group-item">
                        Express.js, JSON, Heroku Deployment</li>
                    </ul>
                    <div className='row justify-content-around align-text-bottom'>
                        <a href="https://note-taker-module-11.herokuapp.com/" target="blank" className="btn btn-card col-5">Visit Site</a>
                        <a href="https://github.com/chelsea314/Module-11---Express.js-Note-Taker" target="blank" className="btn btn-card col-5">GitHub Repo</a>
                    </div>
                </div>
            </div>

            <div className="card col-12 col-md-5 cs-card p-0 mb-3" width="18rem;">
                <img src={team} width='18px' className="card-img-top" alt="Team" />
                <div className="card-body">
                    <h3 className="card-title">Team Profile Generator</h3>
                    <hr className='mb-1'/>

                    <ul class="row list-group list-group-flush mt-0 pb-3">
                        <li class="list-group-item">
                            Command-line application that takes in information about employees on a software engineering team and generates an HTML webpage that displays summaries for each person. Unit tests for each part included.</li>
                        <li class="list-group-item">
                            Node.js, Object Oriented Programming (OOP), Jest </li>
                    </ul>
                    <div className='row justify-content-around'>
                        <a href="https://drive.google.com/file/d/1HhiD2XnEktsM7u-1sIa7RP2R_yujC6rN/view" target="blank" className="btn btn-card col-5">Demo</a>
                        <a href="https://github.com/chelsea314/Module-10---Object-Oriented-Programming-Challenge-Team-Profile-Generator" target="blank" className="btn btn-card col-5">GitHub Repo</a>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}
