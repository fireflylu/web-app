import React from "react";

const Projects = () => {
    const projects = [
        {
            name: "Personal Portfolio Website",
            description: "A responsive website to showcase my skills, projects, and experience.",
            tech: "React, CSS, React Router",
            link: ""
        },
        {
            name: "Arknights Pulls Calculator V1",
            description: "A Python program to calculate how many pulls by a certain banner.",
            tech: "Python, sqlite3",
            link: "https://github.com/fireflylu/Arknights-Pulls"
        }
    ]

    return (
        <div>
            <div>
                {projects.map((project, index) => (
                    <div key={index}>
                        <h2><strong>{project.name}</strong></h2>
                        <p>{project.description}</p>
                        <p><em>{project.tech}</em></p>
                        {project.link && (
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View on Github
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Projects;