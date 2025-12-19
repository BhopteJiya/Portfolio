import React from "react";
import { motion } from "framer-motion";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';

const ContactForm = () => {
  return (
    <>
    <motion.form
      className="shadow-lg w-full max-w-4xl 
                 flex flex-col md:flex-row 
                 gap-20"
      initial={{ y: 80, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 1.4, ease: "easeOut" }}
    >
     
      <div className="flex-1">
        <div className="mb-4">
          <label className="block text-slate-200 mb-1">Name</label>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-xl bg-white/20 
                       border border-white/30 text-white 
                       focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <div className="mb-4">
          <label className="block text-slate-200 mb-1">Email</label>
          <input
            type="email"
            placeholder="your@email.com"
            className="w-full px-4 py-3 rounded-xl bg-white/20 
                       border border-white/30 text-white 
                       focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <div className="mb-6">
          <label className="block text-slate-200 mb-1">Message</label>
          <textarea
            rows="4"
            placeholder="Write your message..."
            className="w-full px-4 py-3 rounded-xl bg-white/20 
                       border border-white/30 text-white 
                       focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full py-3 rounded-xl bg-indigo-500 
                     hover:bg-indigo-600 transition 
                     font-semibold text-white"
        >
          Send Message
        </motion.button>
      </div>

     
      <div className="flex-1 flex flex-col gap-10 text-slate-200 justify-center text-3xl">
        <div className="flex items-center gap-4">
          <EmailIcon className="text-indigo-400" />
          <span>jiya.bhopte@gmail.com</span>
        </div>

        <div className="flex items-center gap-4">
          <AddIcCallIcon className="text-indigo-400" />
          <span>+91 8643027690</span>
        </div>

        <div className="flex items-center gap-4">
          <LocationOnIcon className="text-indigo-400" />
          <span>Dewas, M.P., India</span>
        </div>
        
         <div className="flex  gap-10 ml-10  " >
        <div className="flex gap-4">
  <a
    href="https://www.linkedin.com/in/jiya-bhopte-aab951272/"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white/20 rounded-full p-2 hover:bg-violet-700 transition"
  >
    <LinkedInIcon />
  </a>

  <a
    href="https://github.com/BhopteJiya"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white/20 rounded-full p-2 hover:bg-violet-700 transition"
  >
    <GitHubIcon />
  </a>

  <a
    href="https://leetcode.com/problemset/"
      target="_blank"
    rel="noopener noreferrer"
    className="bg-white/20 rounded-full p-2 hover:bg-violet-700 transition"
  >
    <CodeIcon />
  </a>
</div>
</div>
      </div>
      
      
    </motion.form>
    
       </>
  );
};

export default ContactForm;
