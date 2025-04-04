// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Hobbies from "./components/Hobbies";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/hobbies" element={<Hobbies />} />
      </Routes>
    </>
  );
}

export default App;