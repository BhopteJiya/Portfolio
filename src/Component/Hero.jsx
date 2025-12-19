import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";




const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,   //  delay between items
      delayChildren: 0.2       //  first item delay
    },
  },
};


const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};


const scrollToSection = (id) => {
  const section = document.getElementById(id);
  section.scrollIntoView({ behavior: "smooth" });
};

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center "
    >
     <motion.div
  variants={containerVariants}
  initial="hidden"
  animate="show"
  className="text-center md:text-left"
>

        <div className="flex flex-col md:flex-row items-center gap-20">

         
          <motion.div
            className="flex-shrink-0"
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="p-3 rounded-full bg-gradient-to-br from-[#667eea] to-[#683e92]">
              <img
                src="/profile3.jpeg"
                alt="Profile"
                className="w-44 h-44 md:w-62 md:h-62 rounded-full object-cover bg-white shadow-2xl"
              />
            </div>
          </motion.div>

          
          <motion.div
            variants={containerVariants}
            className="text-center md:text-left"
          >
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl font-extrabold leading-tight text-white"
            >
              Hi, I’m <span className="text-indigo-200">Jiya Bhopte</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-4 text-xl md:text-3xl font-bold 
              bg-gradient-to-r from-indigo-300 to-purple-400 
              bg-clip-text text-transparent"
            >
              <Typewriter
                words={[
                  "Frontend Developer",
                  "React Developer",
                  "UI Engineer",
                ]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={80}
                delaySpeed={1000}
              />
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="mt-4 text-slate-200 max-w-xl leading-relaxed"
            >
              I’m a BTech IT student who loves building clean, responsive, and
              user-friendly web applications using React and modern web
              technologies.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={itemVariants}
              className="mt-6 flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="/JB_NOv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-600 
                transition font-semibold text-center text-white"
              >
                Download Resume
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-xl border border-white/30 
                hover:bg-white/10 transition font-semibold text-center text-white"
                onClick={() => scrollToSection("Contact")}
              >
                Contact Me
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
