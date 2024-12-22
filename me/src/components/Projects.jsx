import React from "react";
import { Link } from "react-router-dom";
import "./Projects.css";

function Projects() {
    return (
        <div className="project-container">
            <h1>My Projects</h1>
            <div className="entry">
                <h2><a href="https://github.com/chriss-mo/SironaClinical">Sirona Clinical</a> (<a href="https://devpost.com/software/sirona-clinical">DiamondHacks 2024 Winner</a>)</h2>
                <p>
                Sirona clinical is a program that uses the machine learning technology in Amazon Comprehend Medical to extract 
                medical text and match patients suffering from rare diseases with related clinical trials. Our project won best 
                in category at Diamond Hacks 2024 in the All Hands on Deck category, which emphasizes projects for societal 
                betterment. I created the frontend of the Web App using React.js and Node.js, and worked with my partners to 
                develop a string similarity algorithm to match tokens extracted by AWS Comprehend Medical to existing clinical 
                trial listings in our database. Sidenote: this was all of our first hackathons, and I came into the weekend with 
                little knowledge about frontend development. All in all, it was an extremely fruitful experience!
                </p>
            </div>

            <div className="entry">
                <h2><a href="https://github.com/chriss-mo/VCT23">VCT 2023</a></h2>
                <p>
                Taking tournament data from the Valorant Champions Tour series in 2023, I created a Dashboard in Tableau to practice 
                skills I had self-taught myself, and preprocessed the data to be used in a predictive model that, based on an individual 
                player or overall team’s stats, would tell if the team would win and by how much. I mainly used scikit-learn for the 
                classical machine learning models and tensorflow for the neural networks. This was also an opportunity for me to apply 
                the machine learning methods I had learned in my classes to an industry I was interested in!
                </p>
            </div>

            <div className="entry">
                <h2><a href="https://github.com/Char1iee/NBA_Odds_Analysis">NBA Odds Predictor (CSE 151A Class Project Winner)</a></h2>
                <p>
                For our quarter-long project, we created machine learning models to predict the money line, as well as other betting 
                statistics for NBA games based on season data from 2008-2023. This was a chance for us to apply what we learned in 
                class, and we experimented with an artificial and convolutional neural network, as well as models not covered in 
                class such as recurrent neural networks.
                </p>
            </div>

            <div className="entry">
                <h2><a href="https://chriss-mo.github.io/League23/">League23</a></h2>
                <p>
                Final project for DSC 80: Practice and Application of Data Science. Using in-game statistics from the 2023 professional 
                season, we created a project aiming to determine whether or not there exists a “snowball effect” in League of Legends. 
                That is, if a team destroys the first three turrets, how likely are they to win the match? We also employed methods 
                such as hypothesis testing and missingness analysis to ensure our data was processed most appropriately for our task at 
                hand. We used pandas to preprocess the data, plotly-express to visualize the data, and scikit-learn to create a predictive model.
                </p>
            </div>
            <br /><br /><br />
            <h1>Unrelated projects I am still proud of:</h1>

            <div className="entry">
                <h2>FRC Differential Swerve Prototype</h2>
                <p>
                As the drivetrain lead on the Gunn Robotics Team (GRT), I created one of the world's first differential swerve prototype drivetrains 
                as a "capstone" project of sorts. In a traditional swerve drive, each module (4 total per drivetrain) requires two motors: one for 
                movement and one for rotation of the fork. Using a design inspired by an automotive differential, I created a differential swerve, 
                which can use the power of two motors to drive each wheel when it is not rotating.
                </p>
                <img src='src/assets/swerve.PNG' alt = "swerve diagram" className="contained-image"/>
                <img src='src/assets/differential swerve.PNG' alt = "differential swerve diagram" className="contained-image"/>
            </div>

            <div className="entry">
                <h2>Volkswagen Westfalia Center Console</h2>
                <p>One of my favorite laser engraving projects. I designed a beach scene using stock images of elements like palm trees, campfires
                    and a source image of the customer's van to create the first panel. For the panel with the golden gate bridge, I sourced the image
                    online and hand-traced portions of the bridge to emphasize certain features for the laser cutter to show. After engraving, the
                    panels were shaped on a router and fit into the reupholstered center console.
                </p>
                <img src="src/assets/cc_raw.jpg" alt = "center console cut" className="contained-image-scaled" />
                <img src="src/assets/cc_final.jpg" alt = "center console final" className="contained-image-scaled" />

            </div>




        </div>
    );
}

export default Projects;