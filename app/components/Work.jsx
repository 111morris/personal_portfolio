import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Work = ({isDarkMode}) => {
 return (
  <motion.div
   initial={{ opacity: 0 }}
   whileInView={{ opacity: 1 }}
   transition={{ duration:1 }}

   id='work' className='w-full px-[12%] py-10 scroll-mt-20'>
   <motion.h4
    initial={{ y: -20, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5, delay: 0.3 }}

    className='text-center mb-2 text-lg font-Ovo' >
    My portfolio
   </motion.h4>
   <motion.h2
    initial={{ y: -20, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5, delay: 0.5 }}

    className='text-center text-5xl font-Ovo' >
    My latest work
   </motion.h2>
   <motion.p
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.5, delay: 0.7 }}

    className='text-center max-w-2xl mx-auto mt-5 text-gray-600 dark:text-white/80 mb-12 font-Ovo' >
    Welcome to my web development portfolio! Explore some of my latest projects and see the work I've done in various areas of web development. From front-end design to back-end functionality, I strive to create seamless and engaging user experiences.
   </motion.p>
   <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.6, delay: 0.9 }}
    className="grid grid-cols-400 my-10 gap-5 dark:text-black"
   >
    {workData.map((project, index) => (
     <motion.div
      whileHover={{ opacity: 1.05 }}
      transition={{ duration: 0.3 }}
      onHoverStart={() => console.log('hovered')}
      key={index}
      style={{
       backgroundImage: `url(${project.bgImage})`,
      }}
      className="aspect-square bg-cover bg-center relative bg-no-repeat flex justify-between items-center p-10 rounded-lg cursor-pointer group"
     >
      {/* Gradient fade from bottom to top */}
      <div
       className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent group-hover:from-black/20 group-hover:to-transparent transition-all duration-500"
      />

      <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
       <div>
        <h2 className="font-semibold">{project.title}</h2>
        <p className="text-sm text-green-700">{project.description}</p>
       </div>
       <div className="flex gap-2">
        {/* <button className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#00] group-hover:bg-lime-300 transition">
         <Image src={assets.send_icon} alt="send icon" className="w-5" />
        </button> */}
        {/* View GitHub Button */}
        <a
         href={project.linkGithub}
         target="_blank"
         rel="noopener noreferrer"
         className="ftext-black hover:underline duration-500  dark:text-black text-xs font-medium transition "
        >
          GitHub
        </a>
        {/* View Live Button */}
        <a
         href={project.linkLive}
         target="_blank"
         rel="noopener noreferrer"
         style={{ textDecoration:"underlined" }}
         className=" text-black hover:underline duration-500  dark:text-black text-xs font-medium transition"
        >
          Live
        </a>
       </div>
      </div>
     </motion.div>
    ))}
   </motion.div>

   <motion.a
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.5, delay: 1.1 }}

    href="https://github.com/111morris" target="_blank" className='font-Ovo flex items-center justify-center gap-2 text-sm mt-5 w-max text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lighHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover' > 
    Show more
    <Image src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} alt='right arrow' className='w-4' />
   </motion.a>
  </motion.div>
 )
}

export default Work
