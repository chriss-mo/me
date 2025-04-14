// Home.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import "./Globe.css";

function Home() {
  return (
    <div className="home-wrapper">
      {/* Home Section */}
      <div className="home">
        <div className="home-container">
          <h1 className="home-title">Hi, I'm Chris Mo.</h1>
          <h2 className="home-subtitle">Welcome to my website!</h2>

          <Link to="/about" className="button-link">
            About Me
          </Link>
          <Link to="/projects" className="button-link">
            My Projects
          </Link>
        </div>
      </div>
    </div> 
  );
}

export default Home;
