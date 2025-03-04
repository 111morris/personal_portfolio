import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from "motion/react"

const Contact = () => {
 const [result, setResult] = useState("");

 const onSubmit = async (event) => {
  event.preventDefault();
  setResult("Sending....");
  const formData = new FormData(event.target);

  formData.append("access_key", "a868cb33-66d8-499d-9d04-aaa7e7deb313");

  const response = await fetch("https://api.web3forms.com/submit", {
   method: "POST",
   body: formData
  });

  const data = await response.json();

  if (data.success) {
   setResult("Form Submitted Successfully");
   event.target.reset();
  } else {
   console.log("Error", data);
   setResult(data.message);
  }
 };

 return (
  <motion.div
   initial={{ opacity: 0 }}
   whileInView={{ opacity: 1 }}
   transition={{ duration: 1 }}

   id='contact' className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-center bg-no-repeat bg-[length:90%_auto] dark:bg-none ' >
   <motion.h4
    initial={{ y: -20, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5, delay: 0.3 }}

    className='text-center mb-2 text-lg font-Ovo' >
    Connct with me
   </motion.h4>
   <motion.h2
    initial={{ y: -20, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5, delay: 0.5 }}

    className='text-center text-5xl font-Ovo' >
    Get in touch
   </motion.h2>
   <motion.p
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.5, delay: 0.7 }}

    className='text-center max-w-2xl mx-auto mt-5 text-gray-600 mb-12 font-Ovo dark:text-white/80' >
    I'd love to hear from you! Whether you have a question about my services, want to collaborate on a project, or just want to say hello, feel free to reach out. I'm always happy to connect with new people and discuss exciting opportunities.
   </motion.p>


   <motion.form
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.9, delay: 0.5 }}

    onSubmit={onSubmit} className='max-w-2xl mx-auto' >
    <div className='grid grid-cols-auto gap-6 mt-10 mb-8' >

     <motion.input
      initial={{ x: -50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 1.1 }}

      name='name' className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90' type="text" placeholder='Enter your name' required />

     <motion.input
      initial={{ x: 50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 1.2 }}

      name='email' className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90' type="email" placeholder='Enter your email' required />
    </div>

    <motion.textarea
     initial={{ y: 100, opacity: 0 }}
     whileInView={{ y: 0, opacity: 1 }}
     transition={{ duration: 0.6, delay: 1.3 }}

     name='message' className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-darkHover/30 dark:border-white/90' rows={6} placeholder='Enter your message' required></motion.textarea>
    <motion.button
     whileHover={{ scale: 1.05 }}
     transition={{ duration: 0.3}}

     type='submit' className='flex items-center justify-center gap-2 bg-black/80 text-white text-sm mt-5 w-max border-[0.5px] border-gray-700 rounded-full py-3 px-8 mx-auto my-20 hover:bg-black hover:text-white duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover' >
     Send message <Image src={assets.right_arrow_white} alt='' className='w-4' />
    </motion.button>
    <p className='text-center text-gray-600 font-Ovo mt-4 dark:text-white/80' >
     {result
      ? result
      : "I'd love to hear from you! Whether you have a question about my services, want to collaborate on a project, or just want to say hello, feel free to reach out. I'm always happy to connect with new people and discuss exciting opportunities."}
    </p>
   </motion.form>
  </motion.div>
 )
}

export default Contact
