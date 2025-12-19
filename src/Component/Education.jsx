import React from 'react'
import { motion } from 'framer-motion';


// const containerVariants = {
//   hidden: {},
//   show: {
//     transition: {
//       staggerChildren: 0.3, // each card animates 0.3s after the previous
//     },
//   },
// };

// const cardVariants = {
//   hidden: { x: -100, opacity: 0 },
//   show: {
//     x: 0,
//     opacity: 1,
//     transition: { duration: 1.5, ease: "easeOut" },
//   },
// };


const Education = () => {
  return (
    <section id='Education' className='py-32 cursor-pointer' >

    <div className='font-bold text-4xl ml-10'>Education</div>
     <div className='flex flex-row flex-wrap justify-around' >
      <div className='h-40 w-40 m-5 md:h-100 md:w-100 mt-10' >
        <img src="/portfolio.png" alt="education-icon" />
      </div>

<div className='' >

    <motion.div
  className=" bg-white/10 backdrop-blur-md rounded-3xl p-6 
             border border-white/20 shadow-lg w-92"
  initial={{ x: -100, opacity: 0 }}
  whileInView={{ x: 0, opacity: 1 }}
  viewport={{ once: false, amount: 0.3 }}
  transition={{ duration: 1.9, ease: "easeOut" }}
>
  

  
  <div className="flex items-start gap-4">
    
    
    <div className=" bg-white/20 p-3 rounded-2xl">
      <img
        src="/education.png"
        alt="Education"
        className="w-14 h-14"
        />
    </div>

    
    <div className="space-y-1">
      <p className="text-sm text-slate-300">2019 – 2020</p>
      <p className="text-lg font-semibold text-white">
        Secondary Schooling
      </p>
      <p className="text-sm text-slate-100">
        Pioneer Public School
      </p>
    </div>

  </div>

        </motion.div>



 <motion.div
  className=" bg-white/10 backdrop-blur-md rounded-3xl p-6 
             border border-white/20 shadow-lg w-92 mt-6 mb-6 mr-2 md:m-12"
  initial={{ x: -100, opacity: 0 }}
  whileInView={{ x: 0, opacity: 1 }}
  viewport={{ once: false, amount: 0.3 }}
  transition={{ duration: 1.9, ease: "easeOut" }}
>


  
  <div className="flex items-start gap-4">
    
    
    <div className=" bg-white/20 p-3 rounded-2xl">
      <img
        src="/education.png"
        alt="Education"
        className="w-14 h-14"
        />
    </div>

    
    <div className="space-y-1">
      <p className="text-sm text-slate-300">2021 – 2022</p>
      <p className="text-lg font-semibold text-white">
         Senior Secondary Schooling
      </p>
      <p className="text-sm text-slate-100">
        Pioneer Public School
      </p>
    </div>

  </div>

  </motion.div>
  

  <motion.div
  className=" bg-white/10 backdrop-blur-md rounded-3xl p-6 
             border border-white/20 shadow-lg w-92"
  initial={{ x: -100, opacity: 0 }}
  whileInView={{ x: 0, opacity: 1 }}
  viewport={{ once: false, amount: 0.3 }}
  transition={{ duration: 1.9, ease: "easeOut" }}
>
  

  
  <div className="flex items-start gap-4">
    
    
    <div className=" bg-white/20 p-3 rounded-2xl">
      <img
        src="/education.png"
        alt="Education"
        className="w-14 h-14"
        />
    </div>

    
    <div className="space-y-1">
      <p className="text-sm text-slate-300">2022 – 2026</p>
      <p className="text-lg font-semibold text-white">
         Bachelor of Technology 
      </p>
      <p className="text-sm text-slate-100">
        Acropolis Institute Of Technology And Research
      </p>
    </div>

  </div>


        </motion.div>
        </div>
     </div>
    </section>
  )
}

export default Education