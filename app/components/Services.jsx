import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const Services = () => {

 return (
  <div id="services" className='w-full px-[12%] py-10 scroll-mt-20'>


   <h4 className='text-center mb-2 text-lg font-Ovo' >What i offer</h4>
   <h2 className='text-center text-5xl font-Ovo' >My Services</h2>
   <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo' >
    I ama fullstuck developer from Nairobi, Kenya with 1 year of professional experience in multiple companies
    I develop responsive websites and web applications using the latest technologies and frameworks
   </p>
   <div className='grid grid-cols-auto gap-6 my-10' >
    {serviceData.map(({ icon, title, description }, index) => (
     <div key={index}
      className='border border-gray-400 py-12 flex flex-col items-center gap-3 p-6 rounded-lg cursor-pointer hover:bg-lighHover hover:-translate-y-1 duration-500 hover:shadow-black dark:hover:bg-darkHover dark:hover:shadow-white '>
      <Image src={icon} alt='' className='w-12'/>
      <h3 className='text-center font-semibold text-gray-700 my-4 dark:text-white ' >{title}</h3>
      <p className='text-center text-gray-600 text-sm leading-5 dark:text-white/80 ' >{description}</p>
      <a href={Link} className='font-Ovo flex items-center gap-2 text-sm mt-5'>
       Read more
       <Image src={assets.right_arrow} alt='' className='w-4' />
      </a>    
     </div>
    ))}
   </div>


  </div>
 )

}

export default Services
