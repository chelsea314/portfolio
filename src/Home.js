import React from 'react';
import PortfolioContainer from "./components/PortfolioContainer";

// Here we are importing a CSS file as a dependency
import './styles/Home.css';

function Home() {
  return (
  <div id='page-container'>
    <div className="jumbotron header container-fluid page-container">
      <div className="row">
        <h1 className="col-12 mt-3 mb-0 titleStyle">Chelsea Sexton</h1>
        <h2 className="col-12 mr-3 subtitleStyle">Full Stack Developer</h2>
      </div>
    </div>
    <div id='content-wrap'>
      <PortfolioContainer />
    </div>
    <footer id="footer" className='footer'>
      <div className= 'row justify-content-around'>
        <a href="https://github.com/chelsea314?tab=repositories" target="blank" className='col-2 footer-link'>GitHub</a>
        <a href="https://www.linkedin.com/in/chelsea-sexton-2b0090223/" target="blank" className='col-2 footer-link'>LinkedIn</a>
        </div>
    </footer> 
    </div>
  );
}

export default Home;
