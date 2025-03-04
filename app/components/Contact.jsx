import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'

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
  <div id='contact' className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-center bg-no-repeat bg-[length:90%_auto] dark:bg-none ' >
   <h4 className='text-center mb-2 text-lg font-Ovo' >Connct with me</h4>
   <h2 className='text-center text-5xl font-Ovo' >Get in touch</h2>
   <p className='text-center max-w-2xl mx-auto mt-5 text-gray-600 mb-12 font-Ovo dark:text-white/80' >
    I'd love to hear from you! Whether you have a question about my services, want to collaborate on a project, or just want to say hello, feel free to reach out. I'm always happy to connect with new people and discuss exciting opportunities.
   </p>


   <form onSubmit={onSubmit} className='max-w-2xl mx-auto' >
    <div className='grid grid-cols-auto gap-6 mt-10 mb-8' >

     <input name='name' className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90' type="text" placeholder='Enter your name' required />

     <input name='email' className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90' type="email" placeholder='Enter your email' required />
    </div>

    <textarea name='message' className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-darkHover/30 dark:border-white/90' rows={6} placeholder='Enter your message' required></textarea>
    <button type='submit' className='font-Ovo flex items-center justify-center gap-2 text-sm mt-5 w-max border-[0.5px] border-gray-700 rounded-full py-3 px-8 mx-auto my-20 hover:bg-black hover:text-white duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover' >
     Send message <Image src={assets.right_arrow_white} alt='' className='w-4' />
    </button>
    <p className='text-center text-gray-600 font-Ovo mt-4 dark:text-white/80' >
     {result
      ? result
      : "I'd love to hear from you! Whether you have a question about my services, want to collaborate on a project, or just want to say hello, feel free to reach out. I'm always happy to connect with new people and discuss exciting opportunities."}
    </p>
   </form>
  </div>
 )
}

export default Contact
