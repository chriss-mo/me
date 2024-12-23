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

        <Link to="/about" className="about-link">
          About Me
        </Link>
        <Link to="/projects" className="about-link">
          My Projects
        </Link>
      </div>
    </div>
  );
}

export default Home;
