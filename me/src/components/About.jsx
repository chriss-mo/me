import React, { useEffect, useState } from "react";
import { Link as ScrollLink, Element } from "react-scroll";
import "./About.css";
import experiences from '../assets/exp.json';

function About() {
    // Sort experiences by end year in descending order
    const sortedExperiences = experiences.sort((a, b) => b.year2 - a.year2);
    const [activeYear, setActiveYear] = useState(null);
    const [githubData, setGithubData] = useState(null);

    // Create a set of unique years, keeping only the last occurrence of each year
    const uniqueYears = [];
    const yearOccurrences = {};
    sortedExperiences.forEach(exp => {
        if (!yearOccurrences[exp.year2]) {
            yearOccurrences[exp.year2] = 1;
        } else {
            yearOccurrences[exp.year2]++;
        }
    });

    sortedExperiences.forEach(exp => {
        if (yearOccurrences[exp.year2] === 1) {
            uniqueYears.push(exp.year2);
        }
        yearOccurrences[exp.year2]--;
    });

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.6
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveYear(entry.target.getAttribute('data-year'));
                }
            });
        }, options);

        const elements = document.querySelectorAll('.entry');
        elements.forEach(element => {
            observer.observe(element);
        });

        return () => {
            elements.forEach(element => {
                observer.unobserve(element);
            });
        };
    }, []);

    useEffect(() => {
        async function fetchJSON(url) {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`Failed to fetch data: ${response.statusText}`);
                }
                const data = await response.json();
                return data;
            } catch (error) {
                console.error('Error fetching or parsing JSON data:', error);
            }
        }

        async function fetchGitHubData(username) {
            return fetchJSON(`https://api.github.com/users/${username}`);
        }

        async function getGitHubData() {
            const data = await fetchGitHubData('chriss-mo');
            setGithubData(data);
        }

        getGitHubData();
    }, []);

    return (
        <div className="abt-container">
            <h1>About Me</h1>
            <h3>
                I am a Data Science and Business Economics student at 
                UC San Diego, and I am most interested in artificial 
                intelligence, data engineering and analytics. Most of 
                my experience has been in machine learning and artificial 
                intelligence, but I am always looking to learn more about 
                different fields of data science.
            </h3>
            <div className="abt-button-container">
                <button className="abt-button"><a href="https://github.com/chriss-mo/" target="_blank">Github</a></button>
                <button className="abt-button"><a href="https://www.linkedin.com/in/chris-mo-195367176/" target="_blank">LinkedIn</a></button>
                <button className="abt-button"><a href="https://drive.google.com/file/d/13hv8flGjPLm3k6num3CWLuJapGOYVzRy/view?usp=sharing" target="_blank">Resume</a></button>
            </div>
            <h2><u><br /><br />Education and Work Experience</u></h2>
            <div className="scroll-indicator">
                {uniqueYears.map((year, index) => (
                    <ScrollLink
                        key={index}
                        to={`year-${year}-last`}
                        smooth={true}
                        duration={500}
                        offset={-120} // Adjust this value as needed
                        className={`scroll-year ${activeYear == year ? 'active' : ''}`}
                    >
                        {year}
                    </ScrollLink>
                ))}
            </div>
            {sortedExperiences.map((experience, index) => {
                const isLastOccurrence = yearOccurrences[experience.year2] === 0;
                yearOccurrences[experience.year2]++;
                return (
                    <Element name={`year-${experience.year2}${isLastOccurrence ? '-last' : ''}`} className="entry" key={index} data-year={experience.year2}>
                        <h2>{experience.year1}-{experience.year2}: {experience.name}</h2>
                        <p><i>{experience.location}</i> <br />
                            <b>{experience.position}</b> <br />
                            {experience.description}
                        </p>
                        {experience.favoriteCourses && (
                            <ul>
                                {experience.favoriteCourses.map((course, i) => (
                                    <li key={i}>{course}</li>
                                ))}
                            </ul>
                        )}
                    </Element>
                );
            })}
            <h2><br /><u>Github Stats</u></h2>
            {githubData && (
                <div id="profile-stats">
                    <dl className="profile-grid">
                        <dt>Public Repos:</dt><dd>{githubData.public_repos}</dd>
                        <dt>Public Gists:</dt><dd>{githubData.public_gists}</dd>
                        <dt>Followers:</dt><dd>{githubData.followers}</dd>
                        <dt>Following:</dt><dd>{githubData.following}</dd>
                    </dl>
                </div>
            )}
        </div>
    );
}

export default About;