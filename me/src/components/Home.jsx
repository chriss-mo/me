// Home.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//clustrmaps.com/globe.js?d=RMr6mls09Sr5ToV2sQP4jm8DgcDvbq3a8IY4obZdRCM";
    script.type = "text/javascript";
    script.id = "clstr_globe";
    document.getElementById("home-globe-container").appendChild(script);
  }, []);

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

      {/* Globe Section */}
      <div id="home-globe-container" className="home-globe">
        <div className="globe-title">
          <h1>Site visitors:</h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
