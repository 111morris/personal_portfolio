import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Footer = () => {
 return (
  <div className='w-full bg-gray-950 text-white py-10 mt-20'>
   <div className='text-center' >
    <span className='mulandi w-36 mx-auto mb-2'>Mulandi</span>
    <span className='red-dot'>.</span>
    <div className='w-max flex items-center gap-2 mx-auto' >
     <Image src={assets.mail_icon} alt='' className='w-6' />
     mulandimorris15@gmail.com
    </div>
   </div>

   <div className='items-center justify-between sm:flex text-center border-t border-gray-400 mx-[10%] mt-12 py-6' >
    <p>
     @ 2025 Mulandi. All rights reserved.
    </p>
    <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
     <li><a target='_blank' href="#">GitHub</a></li>
     <li><a target='_blank' href="#">LinkedIn</a></li>
     <li><a target='_blank' href="#">Twitter</a></li>
    </ul>
   </div>

  </div>
 )
}

export default Footer
