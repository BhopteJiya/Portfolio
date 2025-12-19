import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ title, description, img, tech, github, live }) => {
  return (
    <motion.div
      className="project-card bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 shadow-lg w-80"
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 1.6, ease: "easeInOut" }}
    >
      <img src={img} alt={title} className="rounded-xl w-full h-48 object-cover" />
      <h3 className="text-white font-bold mt-4 text-xl">{title}</h3>
      <p className="text-slate-300 mt-2">{description}</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {tech.map((t, idx) => (
          <span key={idx} className="bg-indigo-500 text-white px-2 py-1 rounded-md text-sm">{t}</span>
        ))}
      </div>
      <div className="mt-4 flex gap-4">
        {github && <a href={github} className="text-indigo-400 hover:underline" target="_blank">GitHub</a>}
        {live && <a href={live} className="text-indigo-400 hover:underline" target="_blank">Live</a>}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
