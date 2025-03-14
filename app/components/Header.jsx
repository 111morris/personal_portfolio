import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import { motion } from "motion/react"


const Header = () => {
 return (
  <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4' >
   <motion.div
    initial={{ scale: 0 }}
    whileInView={{ scale: 1 }}
    transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
   >
    <Image className='w-64 rounded-3xl' src={assets.profile_img} alt='' />
   </motion.div>
   <motion.h3
    initial={{ y: -20, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.6, delay: 0.3 }}

    className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>
    Hi!, I'm Mulandi <Image src={assets.hand_icon} alt='' className='w-6' />
   </motion.h3>
   <motion.h1
    initial={{ y: -30, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, delay: 0.5 }}

    className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo' >
    Fullstack web developer based in Kenya.
   </motion.h1>
   <motion.p
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.6, delay: 0.7 }}

    className='max-w-2xl mx-auto font-Ovo text-gray-600 dark:text-white/80' >I'm a fullstack developer, with 1yaer of experience in multiple programming languages</motion.p>

   <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
    <motion.a
     initial={{ y: 30, opacity: 0 }}
     whileInView={{ y: 0, opacity: 1 }}
     transition={{ duration: 0.6, delay: 1 }}

     href="#contact"
     className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent '>
     contact me
     <Image src={assets.right_arrow_white} alt='' className='w-4' />
    </motion.a>

    <motion.a
     initial={{ y: 30, opacity: 0 }}
     whileInView={{ y: 0, opacity: 1 }}
     transition={{ duration: 0.6, delay: 1.2 }}

     href="/mulandi_morris_resume.pdf" download
     className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black '>My resume
     <Image src={assets.download_icon} alt='' className='w-4'></Image>
    </motion.a>
   </div>
  </div>
 )
}

export default Header
