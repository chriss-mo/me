import React, { useEffect } from "react";
import "./Globe.css";
import "./Home.css";
import "./Meta.css"; // Import the CSS file for styling

function Meta() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//clustrmaps.com/globe.js?d=RMr6mls09Sr5ToV2sQP4jm8DgcDvbq3a8IY4obZdRCM";
    script.type = "text/javascript";
    script.id = "clstr_globe";
    script.onload = () => {
      // Dynamically load the CSS after the script is loaded
      const style = document.createElement("link");
      style.rel = "stylesheet";
      style.href = "./Globe.css"; // Replace with the actual path to your CSS file
      document.head.appendChild(style);

      // Extract values from the dots and append them to a table
      setTimeout(() => {
        const circles = document.querySelectorAll("circle.clstrMarker");
        const tableBody = document.getElementById("visitors-table-body");

        // Clear the table body to avoid duplicates
        tableBody.innerHTML = "";

        const uniqueTitles = new Set(); // Track unique titles

        circles.forEach((circle) => {
          const title = circle.getAttribute("title"); // Extract the title attribute
          if (title && !uniqueTitles.has(title)) {
            uniqueTitles.add(title); // Add the title to the Set

            // Parse the title to extract visits, city, and country
            const [visitsPart, locationPart] = title.split(" from ");
            const visits = visitsPart.split(" ")[0]; // Extract the number of visits

            let city = "";
            let country = "";

            if (locationPart.includes(", ")) {
              // If locationPart contains a comma, split into city and country
              [city, country] = locationPart.split(", ");
            } else {
              // If no comma, assume locationPart is the country
              country = locationPart;
            }

            // Create a new row and cells for each column
            const row = document.createElement("tr");

            const visitsCell = document.createElement("td");
            visitsCell.textContent = visits;

            const cityCell = document.createElement("td");
            cityCell.textContent = city || " ";

            const countryCell = document.createElement("td");
            countryCell.textContent = country;

            // Append cells to the row
            row.appendChild(visitsCell);
            row.appendChild(cityCell);
            row.appendChild(countryCell);

            // Append the row to the table body
            tableBody.appendChild(row);
          }
        });
      }, 2000); // Delay to ensure the globe is fully rendered
    };
    document.getElementById("home-globe-container").appendChild(script);
  }, []);

  return (
    <div className="meta-wrapper">
      <div id="home-globe-container" className="home-globe">
        <h1>Site visitors:</h1>
      </div>
      <div className="meta-visitor-wrapper">
        <h1>Table of Visitors</h1>
        <table id="visitors-table" border="1">
          <thead>
            <tr>
              <th>Visits</th>
              <th>City</th>
              <th>Country</th>
            </tr>
          </thead>
          <tbody id="visitors-table-body"></tbody>
        </table>
      </div>
      <div className="meta-footer">
        <p>
          This website is built using React and hosted on GitHub Pages. The globe
          visualization is powered by ClustrMaps.
        </p>
      </ div>
    </div>
  );
}

export default Meta;