// Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <h1 className="home-title">Hi, I'm Chris Mo.</h1>
        <h2 className="home-subtitle">
          Welcome to my website!
        </h2>

        <Link to="/about" className="button-link">
          About Me
        </Link>
        <Link to="/projects" className="button-link">
          My Projects
        </Link>
      </div>
      <div className="home-globe">
        <script type="text/javascript" id="clstr_globe" src="//clustrmaps.com/globe.js?d=RMr6mls09Sr5ToV2sQP4jm8DgcDvbq3a8IY4obZdRCM"></script>
      </div>
    </div>
  );
}

export default Home;
