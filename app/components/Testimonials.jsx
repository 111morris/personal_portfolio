import React from 'react'
import { motion } from "motion/react"



const Testimonials = () => {
 return (
  <motion.div
   initial={{ opacity: 0 }}
   whileInView={{ opacity: 1 }}
   transition={{ duration: 1 }}

   id="services" className='w-full px-[12%] py-10 scroll-mt-20'>
   {/* <motion.h4
    initial={{ y: -20, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5, delay: 0.3 }}


    className='text-center mb-2 text-lg font-Ovo' >What i offer</motion.h4> */}
   <motion.h2
    initial={{ y: -20, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5, delay: 0.5 }}

    className='text-center text-5xl font-Ovo' >Testimonials and reviews
   </motion.h2>


   <motion.p
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.5, delay: 0.7 }}

    className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-600 dark:text-white/80' >
    coming soon 
   </motion.p>


  </motion.div>
 )
}

export default Testimonials
