import React from "react";
import { Link } from "react-router-dom";
import "./Projects.css";
import projects from '../assets/projects.json';
import ccr from '../assets/cc_raw.jpg';
import ccf from '../assets/cc_final.jpg';
import swerve from '../assets/swerve.PNG';
import diffSwerve from '../assets/differential swerve.PNG';

function Projects() {
    // Sort projects by year in descending order
    const sortedProjects = projects.sort((a, b) => b.year - a.year);

    return (
        <div className="project-container">
            <h1>My Projects</h1>
            {sortedProjects.map((project, index) => (
                <div className="entry" key={index}>
                    <h2>
                        <a href={project.link} target="_blank" className="proj-link">{project.title}</a>
                        {project.year && ` (${project.year})`}
                        {project.additionalLink && (
                            <> (<a href={project.additionalLink} target="_blank">{project.year}</a>)</>
                        )}
                    </h2>
                    <p>{project.description}</p>
                </div>
            ))}
            <h1>Unrelated projects I am still proud of:</h1>
            <>
                <div className="entry">
                    <h2>FRC Differential Swerve Prototype (2019-2021)</h2>
                    <p>
                    As the drivetrain lead on the Gunn Robotics Team (GRT), I created one of the world's first differential swerve prototype drivetrains 
                    as a "capstone" project of sorts. In a traditional swerve drive, each module (4 total per drivetrain) requires two motors: one for 
                    movement and one for rotation of the fork. Using a design inspired by an automotive differential, I created a differential swerve, 
                    which can use the power of two motors to drive each wheel when it is not rotating.
                    </p>
                    <img src={swerve} alt="swerve diagram" className="contained-image"/>
                    <img src={diffSwerve} alt="differential swerve diagram" className="contained-image"/>
                </div>
                <div className="entry">
                    <h2>Volkswagen Westfalia Center Console (2020)</h2>
                    <p>One of my favorite laser engraving projects. I designed a beach scene using stock images of elements like palm trees, campfires
                        and a source image of the customer's van to create the first panel. For the panel with the golden gate bridge, I sourced the image
                        online and hand-traced portions of the bridge to emphasize certain features for the laser cutter to show. After engraving, the
                        panels were shaped on a router and fit into the reupholstered center console.
                    </p>
                    <img src={ccr} alt="center console cut" className="contained-image-scaled" />
                    <img src={ccf} alt="center console final" className="contained-image-scaled" />
                </div>
            </>
        </div>
    );
}

export default Projects;