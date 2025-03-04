import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {motion} from "motion/react"


const Services = () => {

 return (
  <motion.div
   initial={{ opacity: 0 }}
   whileInView={{  opacity: 1 }}
   transition={{ duration: 1}}

   id="services" className='w-full px-[12%] py-10 scroll-mt-20'>
   <motion.h4
    initial={{ y: -20, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5, delay: 0.3 }}

    
    className='text-center mb-2 text-lg font-Ovo' >What i offer</motion.h4>
   <motion.h2
    initial={{ y: -20, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5, delay: 0.5 }}

    className='text-center text-5xl font-Ovo' >My Services
   </motion.h2>


   <motion.p
    initial={{opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.5, delay: 0.7 }}

    className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-600 dark:text-white/80' >
    I am fullstuck developer from Nairobi, Kenya with 1 year of professional experience in multiple companies
    I develop responsive websites and web applications using the latest technologies and frameworks
   </motion.p>


   <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.6, delay: 0.9 }}

    className='grid grid-cols-auto gap-6 my-10' >
    {serviceData.map(({ icon, title, description }, index) => (
     <motion.div
      whileHover={{ scale: 1.05 }}
      
      key={index}
      className='border border-gray-400 py-12 flex flex-col items-center gap-3 p-6 rounded-lg cursor-pointer hover:bg-lighHover hover:-translate-y-1 duration-500 hover:shadow-black dark:hover:bg-darkHover dark:hover:shadow-white '>
      <Image src={icon} alt='' className='w-12'/>
      <h3 className='text-center font-semibold text-gray-700 my-4 dark:text-white ' >{title}</h3>
      <p className='text-center text-gray-600 text-sm leading-5 dark:text-white/80 ' >{description}</p>
      <a href={Link} className='font-Ovo flex items-center gap-2 text-sm mt-5'>
       Read more
       <Image src={assets.right_arrow} alt='' className='w-4' />
      </a>    
     </motion.div>
    ))}
   </motion.div>


  </motion.div>
 )

}

export default Services
