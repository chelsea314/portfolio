import React from 'react';
import PortfolioContainer from "./components/PortfolioContainer";

// Here we are importing a CSS file as a dependency
import './styles/Home.css';

function Home() {
  return (
  <div>
    <div className="jumbotron header container-fluid">
      <div className="row">
        <h1 className="col-12 mt-3 mb-0 titleStyle">Chelsea Sexton</h1>
        <h2 className="col-12 mr-3 subtitleStyle">Full Stack Developer</h2>
      </div>
    </div>
    <div>
      <PortfolioContainer />
    </div>
    <div>
      <footer className="footer">
        <p>Chelsea Sexton</p>
        <p><a href="mailto:hege@example.com">hege@example.com</a></p>
      </footer> 
    </div>
    </div>
  );
}

export default Home;
