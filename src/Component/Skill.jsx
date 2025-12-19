import React from "react";
import { motion } from "framer-motion";

const Skill = () => {
  const skills = [
    { name: "HTML", icon: "/html.png" },
    { name: "CSS", icon: "/css-3.png" },
    { name: "JavaScript", icon: "/java-script.png" },
    { name: "React", icon: "/react.png" },
    { name: "Node.js", icon: "/node-js.png" },
    { name: "Git", icon: "/github.png" },
    { name: "SQL", icon: "/database.png" },

  ];

  return (
    <section id="Skill" className="py-16 px-6">

      <h2 className="text-4xl font-bold text-center mt-10 mb-27">Skills</h2>

      {/* Cards Container */}
      <motion.div
        className="flex gap-10"
        animate={{ x: ["0%", "-50%"] }}  // move left 
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        }}
      >
        {[...skills, ...skills].map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-3 px-4 py-4
                 bg-white/10 backdrop-blur-md
                 border border-white/20
                 rounded-xl   shadow-[0_10px_20px_rgba(0,0,0,0.6)]
                 min-w-[120px]"  // make all cards same width
          >
            <img src={skill.icon} alt={skill.name} className="w-20 h-20" />
            <span className="text-slate-200 font-bold">{skill.name}</span>
          </div>
        ))}
      </motion.div>

    </section>
  );
};

export default Skill;
