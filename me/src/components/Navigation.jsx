import React from "react";
import { NavLink } from "react-router-dom"; // Use NavLink instead of Link
import "./Navigation.css";
import logo from "../assets/mo_logo_white.svg";

const Navigation = () => {
  return (
    <nav className="nav-container">
      <div className="nav-left">
        <NavLink to="/" className="nav-logo-link">
          <img src={logo} alt="Logo" className="nav-logo" />
        </NavLink>
      </div>
      <div className="nav-right">
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/projects"
              className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            >
              Projects
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/hobbies"
              className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            >
              Hobbies
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            >
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;