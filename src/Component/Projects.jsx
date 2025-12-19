import React from "react";
import ProjectCard from "../AdditionalComponent/ProjectCard";

const projects = [
  {
    title: "CogniTech",
    description: "A web-based platform for managing courses, assignments, and student progress efficiently.",
    img: "/lms.jpg",
    tech: ["React", "MongoDB", "Nodejs","Expressjs"],
    github: "https://github.com/BhopteJiya/Learning-Management-System",
    live: "#"
  },
  {
    title: "TechBay : E-commerce Website",
    description: "Full-stack app with Flask backend and React frontend.",
    img: "/techbay.jpg",
    tech: ["React", "Flask", "MongoDB"],
    github: "https://github.com/hariom9617/tech-bay",
    live: "https://tech-bay-hp96.vercel.app/"
  },
   

];

const Projects = () => {
  return (
    <section id="Projects" className="px-10 py-20 cursor-pointer">
  <h2 className="text-4xl font-bold mb-10 text-white flex justify-center">Projects</h2>

  <div className="flex justify-center">
    <div className="grid md:grid-cols-2  gap-10 items justify-items-center ">
      {projects.map((project, idx) => (
        <ProjectCard key={idx} {...project} />
      ))}
    </div>
  </div>
</section>

  );
};

export default Projects;
