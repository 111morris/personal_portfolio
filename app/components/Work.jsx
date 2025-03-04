import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Work = ({isDarkMode}) => {
 return (
  <div id='work' className='w-full px-[12%] py-10 scroll-mt-20'>
   <h4 className='text-center mb-2 text-lg font-Ovo' >My portfolio</h4>
   <h2 className='text-center text-5xl font-Ovo' >My latest work</h2>
   <p className='text-center max-w-2xl mx-auto mt-5 text-gray-600 dark:text-white/80 mb-12 font-Ovo' >
    Welcome to my web development portfolio! Explore some of my latest projects and see the work I've done in various areas of web development. From front-end design to back-end functionality, I strive to create seamless and engaging user experiences.
   </p>
   <div className='grid grid-cols-auto my-10 gap-5 dark:text-black' >
    {workData.map((project, index) => (
     <div key={index}
      style={{ backgroundImage: `url(${project.bgImage})` }} className='aspect-square bg-cover bg-center relative bg-no-repeat flex justify-between items-center p-10 rounded-lg cursor-pointer group
      '>
      {/* hover:bg-lighHover hover:-translate-y-1 duration-500 hover:shadow-black */}
      <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7' >
       <div>
        <h2 className='font-semibold' >{project.title}</h2>
        <p className='text-sm text-green-700' >{project.description}</p>
       </div>
       <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#00] group-hover:bg-lime-300 transition' >
        <Image src={assets.send_icon} alt='send icon' className='w-5' />
       </div>
      </div>
     </div>
    ))}
   </div>
   <a href="#" className='font-Ovo flex items-center justify-center gap-2 text-sm mt-5 w-max text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lighHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover' > 
    Show more
    <Image src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} alt='right arrow' className='w-4' />
   </a>
  </div>
 )
}

export default Work
