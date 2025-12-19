import React from "react";
import { motion } from "framer-motion";



const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 80 }, // ⬅ more distance from bottom
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};


const About = () => {
  return (
    <section
      id="About"
      className="px-10 cursor-pointer flex justify-center"
    >
      <motion.div
      initial={{ y: 50, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{
    duration: 0.6,
    ease: "easeOut",
    delay: 0.3
  }}
      >
        {/* Heading */}
       <motion.h2
  // variants={itemVariants}
  className="text-4xl ml-7 mb-10 font-bold"
>
  About me
</motion.h2>

<div className="flex flex-col md:flex-row items-center gap-12">
  
  <motion.div
    variants={itemVariants}
    className="flex-1 flex justify-center"
  >
    <img
      src="/Learning-amico.svg"   
      alt="About illustration"
      className="w-80 h-auto"
    />
  </motion.div>

  <motion.div
    variants={itemVariants}
    className="flex-1 rounded-3xl p-10 
               
               shadow-[0_20px_40px_rgba(0,0,0,0.6)]
               hover:shadow-[0_30px_60px_rgba(0,0,0,0.8)]
               hover:-translate-y-1"
  >
    <motion.p variants={itemVariants}>
      I am a dedicated and enthusiastic Information Technology undergraduate
      with a strong foundation in web development and software engineering
      principles. I have a deep interest in building scalable, efficient,
      and user-centric web applications using modern technologies.
    </motion.p>

    <br />

    <motion.p variants={itemVariants}>
      Throughout my academic journey, I have focused on strengthening my
      understanding of frontend development, API Integrations, RESTful APIs,
      and core programming concepts. I enjoy working with{" "}
      <span className="text-indigo-300 font-medium">React.js</span>.
    </motion.p>

    <br />

    <motion.p variants={itemVariants}>
      I believe in writing clean, maintainable, and reusable code while
      following best practices such as component-based architecture,
      performance optimization, and SEO optimization.
    </motion.p>

    <br />

    <motion.p variants={itemVariants}>
      Apart from technical skills, I consider myself a hardworking,
      sincere, self-motivated, and quick learner with a passion for
      building impactful digital solutions.
    </motion.p>
  </motion.div>

</div>

      </motion.div>
    </section>
  );
};

export default About;
