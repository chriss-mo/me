import React from "react";
import "./About.css";
import { Link } from "react-router-dom";

function About() {
    return (
        <div className="abt-container">
            <h1>About Me</h1>
            <h3>
                I am a Data Science and Business Economics student at 
                UC San Diego, and I am most interested in artificial 
                intelligience, data engineering and analytics. Most of 
                my experience has been in machine learning and artificial 
                intelligence, but I am always looking to learn more about 
                different fields of data science.
            </h3>
            <h2><u>Education and Work Experience</u></h2>
            <div class="timeline">
                <div class="container left">
                    <div class="content">
                    <h2>2017-2021: Henry M. Gunn High School</h2>
                    <p><i>Palo Alto, CA</i> <br />
                        Joined the Gunn Robotics Team (FIRST Robotics team 192) in 2018. 
                        Worked on and eventually led the drivetrain subgroup, which was responsible
                        for making the swerve drivetrain for the 2019 and 2020 FRC seasons. In my free
                        time, I worked on developing a prototype differential swerve, which can be found here.
                    </p>
                    </div>
                </div>
                <div class="container right sidco">
                    <div class="content">
                    <h2>2019-2021: Laser Cutter Technician, Sidco Custom Upholstery</h2>
                    <p><i>Mountain View, CA</i> <br />
                        Created the company logo and designs for engraving in Corel. My favorite project
                        was working on their Faverro brand slipcovers for various Porsche and Ferrari models.
                        Created files from cardboard mockups to be fabricated in the laser cutter, allowing
                        for large-scale production of custom seat protectors that have an OEM look and feel.
                    </p>
                    </div>
                </div>
                <div class="container left ucsb">
                    <div class="content">
                    <h2>2021-2023: UC Santa Barbara</h2>
                    <p> Started as a mechanical engineering major, but realized my strengths were better suited in statistics
                        and data science or computer science and took more courses in that realm. I also joined Gaucho Racing, 
                        UCSB's Formula SAE Electric team, working on the suspension, braking, and steering subteam. <br />
                        <b>Favorite courses: </b>
                        <li>MATH 8 - Transition to Higher Mathematics</li>
                        <li>ME 10 - Engineering Graphics: Sketching, CAD and Conceptual Design</li>
                        <li>ME 12S - Introduction to Machine Shop</li>
                        <li>CMPSC 24 - Problem Solving With Computers II (data structures)</li>
                    </p>
                    </div>
                </div>
                <div class="container right cmw">
                    <div class="content">
                    <h2>2022: Engineering Design Intern, California Mobility Works</h2>
                    <p><i>Milpitas, CA</i> <br />
                        Learned to MIG weld and assisted in fabricating their Sagitta drivable mockup based on a Chevrolet Bolt platform.
                        I also created a Solidworks model of the production prototype before the end of my internship.
                    </p>
                    </div>
                </div>
                <div class="container right oiar">
                    <div class="content">
                    <h2>2023-2025: Machine Learning R&D Intern, Oxford Instruments Asylum Research</h2>
                    <p><i>Santa Barbara, CA</i> <br />
                        <u>Summer 2023</u><br />
                        Used Python remote procedure calls to autonomously scan
                        Created a 2D convolutional neural network (CNN) to classify scan behaviors in atomic force microscopy (AFM). <br />
                        <u>2023-2024 school year</u><br />
                        Developed an unsupervised clustering model of AFM video frames using a VGG-16 based image encoder. <br />
                        <u>Summer 2024</u><br />
                        Adapted CNN model to be 1D and classify line segments, deployed model using aespm to incorporate classifications in a 
                        PID-style feedback loop for AFM scan parameter adjustments.
                    </p>
                    </div>
                </div>
                <div class="container left ucsd">
                    <div class="content">
                    <h2>2023-2026: UC San Diego</h2>
                    <p><i>Double-major in Data Science, Business Economics</i> <br />
                        Assisted in research at the Systems Energy Efficiency Lab (SEEL) CyberLab in Winter 2024, where we used machine learning
                        to classify various cyberattacks using models from scikit-learn and TensorFlow, and datasets found online
                        including X-IIoT and MQTT. Also learned about new (to me) ML methods like adversarial attacks and transfer learning. <br />
                        <b>Favorite courses: </b>
                        <li>DSC 80 - The Practice and Application of Data Science</li>
                        <li>DSC 100 - Introduction to Data Management</li>
                        <li>CSE 150A - Introduction to Artificial Intelligence: Probabilistic Reasoning and Decision-Making</li>
                        <li>CSE 151A - Machine Learning: Learning Algorithms</li>
                    </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;