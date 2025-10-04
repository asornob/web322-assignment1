/********************************************************************************
*  WEB322 – Assignment 01
* 
*  I declare that this assignment is my own work in accordance with Seneca's
*  Academic Integrity Policy:
* 
*  https://www.senecapolytechnic.ca/about/policies/academic-integrity-policy.html
* 
*  Name: Al Sad Ornob Student ID: 130207236 Date: September 29, 2025
*
********************************************************************************/

const express = require("express");
const app = express();
const projectData = require("./modules/projects");

// Initialize before starting server
projectData.initialize().then(() => {
    // Route: Home
    app.get("/", (req, res) => {
        res.send("Assignment 1: Al Sad Ornob - 130207236");
    });

    // Route: All projects
    app.get("/solutions/projects", (req, res) => {
        projectData.getAllProjects()
            .then(data => res.json(data))
            .catch(err => res.json({ error: err }));
    });

    // Route: Project by ID demo
    app.get("/solutions/projects/id-demo", (req, res) => {
        projectData.getProjectById(4) // demo with project id 4
            .then(data => res.json(data))
            .catch(err => res.json({ error: err }));
    });

    // Route: Projects by sector demo
    app.get("/solutions/projects/sector-demo", (req, res) => {
        projectData.getProjectsBySector("agriculture")
            .then(data => res.json(data))
            .catch(err => res.json({ error: err }));
    });

    // Start server
    const PORT = 8080;
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });

}).catch(err => {
    console.log("Failed to initialize:", err);
});
