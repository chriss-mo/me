import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import logo from "../assets/mo_logo_white.svg";

const Navigation = () => {
  return (
    <nav className="nav-container">
      <div className="nav-left">
        <Link to = '/'>
          <img src={logo} alt="Logo" className="nav-logo" />
        </Link>
      </div>
      <div className="nav-right">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/projects" className="nav-link">
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/hobbies" className="nav-link">
              Hobbies
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              About Me
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;