import React from "react";
import ProjectCard from "../AdditionalComponent/ProjectCard";

const projects = [
  {
    title: "CogniTech",
    description: "A web-based platform for managing courses, assignments, and student progress efficiently.",
    img: "/lms.jpg",
    tech: ["React", "TailwindCSS", "Nodejs",""],
    github: "https://github.com/BhopteJiya/Learning-Management-System",
    live: "#"
  },
  {
    title: "TechBay : E-commerce Website",
    description: "Full-stack app with Flask backend and React frontend.",
    img: "/techbay.jpg",
    tech: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/hariom9617/tech-bay",
    live: "https://tech-bay-hp96.vercel.app/"
  },
   

];

const Projects = () => {
  return (
    <section id="Projects" className="px-10 py-20 cursor-pointer">
      <h2 className="text-4xl font-bold mb-10 text-white flex justify-center">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 overflow-hidden">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
